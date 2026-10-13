import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useCart from "../hooks/useCart";
import CartItem from "../components/CartItem";
import { formatINR } from "../data/catalog";
import emptyCart from "../assets/emptycart.png";
import "./Cart.css";

const Cart = () => {
  const navigate = useNavigate();
  const {
    cartItems,
    totalItems,
    totalAmount,
    totalMrp,
    totalSavings,
    increaseItem,
    decreaseItem,
    removeItem,
    clearCart,
  } = useCart();

  const handleRemove = (id) => {
    const item = cartItems.find((i) => i.id === id);
    removeItem(id);
    Swal.fire({
      toast: true,
      position: "top-end",
      icon: "success",
      title: "Removed from cart",
      text: item ? item.name : "",
      timer: 1500,
      showConfirmButton: false,
    });
  };

  const handleClear = async () => {
    const result = await Swal.fire({
      title: "Empty your cart?",
      text: "All items will be removed.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, empty it",
      cancelButtonText: "Keep shopping",
      confirmButtonColor: "#B5533C",
    });
    if (result.isConfirmed) clearCart();
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <div className="cart-empty">
          <img src={emptyCart} alt="" />
          <h1>Your cart is empty</h1>
          <p>Nothing here yet. Browse the stalls and add what you need.</p>
          <Link to="/products" className="cart-btn cart-btn-primary">
            Start shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <header className="cart-head">
        <div>
          <h1>Your cart</h1>
          <p>
            {totalItems} {totalItems === 1 ? "item" : "items"} from{" "}
            {cartItems.length} {cartItems.length === 1 ? "product" : "products"}
          </p>
        </div>
        <button type="button" className="cart-clear" onClick={handleClear}>
          Empty cart
        </button>
      </header>

      <div className="cart-layout">
        <section className="cart-lines" aria-label="Items in your cart">
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onIncrease={increaseItem}
              onDecrease={decreaseItem}
              onRemove={handleRemove}
            />
          ))}
        </section>

        <aside className="cart-bill" aria-label="Order summary">
          <h2>Bill</h2>

          <dl>
            <div>
              <dt>Price ({totalItems} {totalItems === 1 ? "item" : "items"})</dt>
              <dd>{formatINR(totalMrp)}</dd>
            </div>

            {totalSavings > 0 && (
              <div className="cart-bill-save">
                <dt>Discount</dt>
                <dd>− {formatINR(totalSavings)}</dd>
              </div>
            )}

            <div>
              <dt>Delivery</dt>
              <dd>Free</dd>
            </div>
          </dl>

          <div className="cart-bill-total">
            <span>Total</span>
            <strong>{formatINR(totalAmount)}</strong>
          </div>

          {totalSavings > 0 && (
            <p className="cart-bill-note">
              You save {formatINR(totalSavings)} on this order
            </p>
          )}

          <button
            type="button"
            className="cart-btn cart-btn-primary"
            onClick={() => navigate("/checkout")}
          >
            Proceed to checkout
          </button>

          <Link to="/products" className="cart-continue">
            Continue shopping
          </Link>
        </aside>
      </div>
    </div>
  );
};

export default Cart;
