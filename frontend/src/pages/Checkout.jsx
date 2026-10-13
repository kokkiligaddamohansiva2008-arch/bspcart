import { useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useCart from "../hooks/useCart";
import { formatINR } from "../data/catalog";
import { collectPayment } from "../services/paymentService";
import {
  MOBILE_MESSAGE,
  PINCODE_MESSAGE,
  digitsOnly,
  sanitizeMobile,
  sanitizePincode,
  isValidMobile,
  isValidPincode,
  isValidUpiId,
  isValidCardNumber,
  isValidExpiry,
  formatCardNumber,
  formatExpiry,
} from "../utils/validators";
import "./Checkout.css";

const PAYMENT_OPTIONS = [
  { id: "COD", label: "Cash on Delivery", hint: "Pay when it arrives" },
  { id: "UPI", label: "UPI", hint: "Pay now with UPI ID" },
  { id: "CARD", label: "Credit / Debit Card", hint: "Pay now with card" },
];

const readSavedAddress = () => {
  try {
    return JSON.parse(localStorage.getItem("bsp_delivery_address")) || {};
  } catch {
    return {};
  }
};

const Checkout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cartItems, totalAmount, clearCart } = useCart();
  const placedRef = useRef(false);

  const saved = location.state?.address || readSavedAddress();

  const [formData, setFormData] = useState({
    fullName: saved.fullName || localStorage.getItem("name") || "",
    mobile: sanitizeMobile(saved.mobile),
    email: saved.email || "",
    address: saved.address || "",
    city: saved.city || "",
    state: saved.state || "",
    pincode: sanitizePincode(saved.pincode),
    paymentMethod: "COD",
  });

  const [upiId, setUpiId] = useState("");
  const [card, setCard] = useState({ number: "", name: "", expiry: "", cvv: "" });
  const [errors, setErrors] = useState({});
  const [processing, setProcessing] = useState(false);

  const method = formData.paymentMethod;
  const payNow = method !== "COD";

  const clearError = (key) =>
    setErrors((prev) => (prev[key] ? { ...prev, [key]: undefined } : prev));

  const handleChange = (e) => {
    const { name, value } = e.target;
    let next = value;

    if (name === "mobile") next = sanitizeMobile(value);
    if (name === "pincode") next = sanitizePincode(value);

    setFormData((prev) => ({ ...prev, [name]: next }));
    clearError(name);
  };

  const handleCard = (e) => {
    const { name, value } = e.target;
    let next = value;

    if (name === "number") next = formatCardNumber(value);
    if (name === "expiry") next = formatExpiry(value);
    if (name === "cvv") next = digitsOnly(value, 3);

    setCard((prev) => ({ ...prev, [name]: next }));
    clearError(name);
  };

  const validate = () => {
    const found = {};

    if (!formData.fullName.trim()) found.fullName = "Enter your full name";
    if (!isValidMobile(formData.mobile)) found.mobile = MOBILE_MESSAGE;
    if (!/^\S+@\S+\.\S+$/.test(formData.email.trim()))
      found.email = "Enter a valid email address";
    if (!formData.address.trim()) found.address = "Enter your address";
    if (!formData.city.trim()) found.city = "Enter your city";
    if (!formData.state.trim()) found.state = "Enter your state";
    if (!isValidPincode(formData.pincode)) found.pincode = PINCODE_MESSAGE;

    if (method === "UPI" && !isValidUpiId(upiId))
      found.upiId = "Enter a valid UPI ID, e.g. name@bank";

    if (method === "CARD") {
      if (!isValidCardNumber(card.number))
        found.number = "Enter a valid 16-digit card number";
      if (!card.name.trim()) found.name = "Enter the name on the card";
      if (!isValidExpiry(card.expiry))
        found.expiry = "Enter a valid expiry (MM/YY)";
      if (!/^\d{3}$/.test(card.cvv)) found.cvv = "CVV must be 3 digits";
    }

    return found;
  };

  const placeOrder = async (e) => {
    e.preventDefault();
    if (processing) return;

    if (cartItems.length === 0) {
      navigate("/cart");
      return;
    }

    const found = validate();
    setErrors(found);

    if (Object.keys(found).length > 0) {
      setTimeout(() => {
        document
          .querySelector(".is-invalid")
          ?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 0);
      return;
    }

    let receipt = null;

    // Cash on Delivery: nothing is collected now.
    // UPI / Card: collect the payment before the order is placed.
    if (payNow) {
      setProcessing(true);

      Swal.fire({
        title: `Processing payment of ${formatINR(totalAmount)}`,
        text: "Please don't close or refresh this page.",
        allowOutsideClick: false,
        allowEscapeKey: false,
        showConfirmButton: false,
        didOpen: () => Swal.showLoading(),
      });

      try {
        receipt = await collectPayment({ method, amount: totalAmount });
      } catch (err) {
        setProcessing(false);
        Swal.fire({
          icon: "error",
          title: "Payment failed",
          text: err?.message || "Your money was not deducted. Please try again.",
        });
        return;
      }
    }

    placedRef.current = true;
    clearCart();
    setCard({ number: "", name: "", expiry: "", cvv: "" });
    setUpiId("");
    setProcessing(false);

    Swal.fire({
      icon: "success",
      title: "Order placed",
      text: payNow
        ? `Payment of ${formatINR(totalAmount)} received. Transaction ID: ${receipt.txnId}`
        : `Please keep ${formatINR(totalAmount)} ready to pay in cash on delivery.`,
      confirmButtonText: "View my orders",
    }).then(() => navigate("/orders"));
  };

  if (cartItems.length === 0 && !placedRef.current) {
    return (
      <div className="container mt-5 mb-5 text-center">
        <h3>Your cart is empty</h3>
        <p className="text-muted">Add something to your cart before checking out.</p>
        <Link to="/products" className="btn btn-dark">
          Browse products
        </Link>
      </div>
    );
  }

  const field = (name) => ({
    name,
    value: formData[name],
    onChange: handleChange,
    className: `form-control${errors[name] ? " is-invalid" : ""}`,
  });

  return (
    <div className="container mt-4 mb-5">
      <h2 className="mb-4">Checkout</h2>

      <form onSubmit={placeOrder} noValidate>
        <div className="row g-4">
          <div className="col-lg-8">
            {/* ---------------- Delivery address ---------------- */}
            <div className="card shadow-sm mb-4">
              <div className="card-body">
                <h4 className="mb-3">Delivery Address</h4>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label" htmlFor="co-name">Full Name</label>
                    <input id="co-name" type="text" autoComplete="name" {...field("fullName")} />
                    <div className="invalid-feedback">{errors.fullName}</div>
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label" htmlFor="co-mobile">Mobile Number</label>
                    <input
                      id="co-mobile"
                      type="tel"
                      inputMode="numeric"
                      autoComplete="tel-national"
                      placeholder="10-digit mobile number"
                      {...field("mobile")}
                    />
                    <div className="invalid-feedback">{errors.mobile}</div>
                  </div>

                  <div className="col-12 mb-3">
                    <label className="form-label" htmlFor="co-email">Email</label>
                    <input id="co-email" type="email" autoComplete="email" {...field("email")} />
                    <div className="invalid-feedback">{errors.email}</div>
                  </div>

                  <div className="col-12 mb-3">
                    <label className="form-label" htmlFor="co-address">Address</label>
                    <textarea
                      id="co-address"
                      rows={3}
                      placeholder="House / Flat / Street / Area"
                      {...field("address")}
                    />
                    <div className="invalid-feedback">{errors.address}</div>
                  </div>

                  <div className="col-md-4 mb-3">
                    <label className="form-label" htmlFor="co-city">City</label>
                    <input id="co-city" type="text" {...field("city")} />
                    <div className="invalid-feedback">{errors.city}</div>
                  </div>

                  <div className="col-md-4 mb-3">
                    <label className="form-label" htmlFor="co-state">State</label>
                    <input id="co-state" type="text" {...field("state")} />
                    <div className="invalid-feedback">{errors.state}</div>
                  </div>

                  <div className="col-md-4 mb-3">
                    <label className="form-label" htmlFor="co-pincode">Pincode</label>
                    <input
                      id="co-pincode"
                      type="text"
                      inputMode="numeric"
                      autoComplete="postal-code"
                      placeholder="6-digit pincode"
                      {...field("pincode")}
                    />
                    <div className="invalid-feedback">{errors.pincode}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* ---------------- Payment ---------------- */}
            <div className="card shadow-sm">
              <div className="card-body">
                <h4 className="mb-3">Payment Method</h4>

                <div className="co-methods" role="radiogroup" aria-label="Payment method">
                  {PAYMENT_OPTIONS.map((opt) => (
                    <label
                      key={opt.id}
                      className={`co-method${method === opt.id ? " is-active" : ""}`}
                    >
                      <input
                        type="radio"
                        name="paymentMethod"
                        value={opt.id}
                        checked={method === opt.id}
                        onChange={handleChange}
                      />
                      <strong>{opt.label}</strong>
                      <span>{opt.hint}</span>
                    </label>
                  ))}
                </div>

                {method === "COD" && (
                  <div className="co-panel">
                    <p className="co-panel-note">
                      <strong>Nothing to pay now.</strong> Keep {formatINR(totalAmount)} ready
                      to pay in cash when your order is delivered.
                    </p>
                  </div>
                )}

                {method === "UPI" && (
                  <div className="co-panel">
                    <label className="form-label" htmlFor="co-upi">UPI ID</label>
                    <input
                      id="co-upi"
                      type="text"
                      autoComplete="off"
                      placeholder="name@bank"
                      value={upiId}
                      onChange={(e) => {
                        setUpiId(e.target.value);
                        clearError("upiId");
                      }}
                      className={`form-control${errors.upiId ? " is-invalid" : ""}`}
                    />
                    <div className="invalid-feedback">{errors.upiId}</div>
                    <p className="co-secure">
                      You will pay {formatINR(totalAmount)} when you place the order.
                    </p>
                  </div>
                )}

                {method === "CARD" && (
                  <div className="co-panel">
                    <div className="row">
                      <div className="col-12 mb-3">
                        <label className="form-label" htmlFor="co-card-number">Card Number</label>
                        <input
                          id="co-card-number"
                          name="number"
                          type="text"
                          inputMode="numeric"
                          autoComplete="cc-number"
                          placeholder="1234 5678 9012 3456"
                          value={card.number}
                          onChange={handleCard}
                          className={`form-control${errors.number ? " is-invalid" : ""}`}
                        />
                        <div className="invalid-feedback">{errors.number}</div>
                      </div>

                      <div className="col-12 mb-3">
                        <label className="form-label" htmlFor="co-card-name">Name on Card</label>
                        <input
                          id="co-card-name"
                          name="name"
                          type="text"
                          autoComplete="cc-name"
                          value={card.name}
                          onChange={handleCard}
                          className={`form-control${errors.name ? " is-invalid" : ""}`}
                        />
                        <div className="invalid-feedback">{errors.name}</div>
                      </div>

                      <div className="col-6 mb-1">
                        <label className="form-label" htmlFor="co-card-expiry">Expiry</label>
                        <input
                          id="co-card-expiry"
                          name="expiry"
                          type="text"
                          inputMode="numeric"
                          autoComplete="cc-exp"
                          placeholder="MM/YY"
                          value={card.expiry}
                          onChange={handleCard}
                          className={`form-control${errors.expiry ? " is-invalid" : ""}`}
                        />
                        <div className="invalid-feedback">{errors.expiry}</div>
                      </div>

                      <div className="col-6 mb-1">
                        <label className="form-label" htmlFor="co-card-cvv">CVV</label>
                        <input
                          id="co-card-cvv"
                          name="cvv"
                          type="password"
                          inputMode="numeric"
                          autoComplete="cc-csc"
                          placeholder="3 digits"
                          maxLength={3}
                          value={card.cvv}
                          onChange={handleCard}
                          className={`form-control${errors.cvv ? " is-invalid" : ""}`}
                        />
                        <div className="invalid-feedback">{errors.cvv}</div>
                      </div>
                    </div>

                    <p className="co-secure">
                      You will pay {formatINR(totalAmount)} when you place the order.
                      Card details are not saved.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* ---------------- Summary ---------------- */}
          <div className="col-lg-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h4>Order Summary</h4>
                <hr />

                <ul className="co-items">
                  {cartItems.map((item) => (
                    <li key={item.id}>
                      <span>
                        {item.name} × {item.quantity}
                      </span>
                      <span>{formatINR(item.price * item.quantity)}</span>
                    </li>
                  ))}
                </ul>

                <hr />

                <div className="d-flex justify-content-between">
                  <span>Items Total</span>
                  <span>{formatINR(totalAmount)}</span>
                </div>

                <div className="d-flex justify-content-between">
                  <span>Delivery</span>
                  <span>FREE</span>
                </div>

                <hr />

                <div className="d-flex justify-content-between">
                  <strong>Total</strong>
                  <strong>{formatINR(totalAmount)}</strong>
                </div>

                <button
                  type="submit"
                  className="btn btn-dark btn-lg w-100 mt-3"
                  disabled={processing}
                >
                  {payNow ? `Pay ${formatINR(totalAmount)} & Place Order` : "Place Order"}
                </button>

                <Link to="/cart" className="d-block text-center mt-3 small">
                  Back to cart
                </Link>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
