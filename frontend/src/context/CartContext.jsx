import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { getProductById } from "../data/catalog";

/*
|--------------------------------------------------------------------------
| BSP CART — Cart state
|--------------------------------------------------------------------------
| The cart lives in React state and is mirrored to localStorage ("bsp_cart")
| so it survives refreshes. Every "Add to Cart" button in the app calls
| addItem(), so the cart page, the navbar badge and checkout always agree.
|
| When the backend is ready, only this file needs to change (cartService.js
| already has the API calls).
*/

const CART_KEY = "bsp_cart";

const CartContext = createContext(null);

const readCart = () => {
  try {
    const raw = localStorage.getItem(CART_KEY);
    const list = raw ? JSON.parse(raw) : [];
    return Array.isArray(list) ? list : [];
  } catch {
    return [];
  }
};

// Snapshot just what the cart needs from a catalog product.
const toLine = (product, quantity) => {
  const price = product.deal ? product.deal.price : product.price;
  const stock = Number.isFinite(Number(product.stock))
    ? Number(product.stock)
    : 99;

  return {
    id: product.id,
    productId: product.id,
    name: product.name,
    price: Number(price),
    mrp: Number(product.mrp) || Number(price),
    imageUrl:
      product.image ||
      product.imageUrl ||
      (product.images && product.images[0]) ||
      "",
    seller: product.seller || "",
    stock,
    quantity,
  };
};

const toast = (icon, title, text, extra = {}) =>
  Swal.fire({
    toast: true,
    position: "top-end",
    icon,
    title,
    text,
    timer: 2600,
    timerProgressBar: true,
    showConfirmButton: false,
    ...extra,
  });

export const CartProvider = ({ children }) => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState(readCart);
  const itemsRef = useRef(cartItems);

  const commit = (next) => {
    itemsRef.current = next;
    setCartItems(next);
  };

  // Persist on every change
  useEffect(() => {
    try {
      localStorage.setItem(CART_KEY, JSON.stringify(cartItems));
    } catch {
      /* storage full or blocked — cart still works for this session */
    }
  }, [cartItems]);

  // Keep several open tabs in sync
  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === CART_KEY) commit(readCart());
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  /**
   * Add a product (object from the catalog, or a product id).
   * Returns true when something was added.
   */
  const addItem = (productOrId, quantity = 1, { silent = false } = {}) => {
    const product =
      productOrId && typeof productOrId === "object"
        ? productOrId
        : getProductById(productOrId);

    if (!product) return false;

    const qty = Math.max(1, Number(quantity) || 1);
    const line = toLine(product, qty);

    if (line.stock <= 0) {
      toast("error", "Out of stock", product.name);
      return false;
    }

    const current = itemsRef.current;
    const existing = current.find((i) => i.id === line.id);
    const already = existing ? existing.quantity : 0;
    const nextQty = Math.min(already + qty, line.stock);

    if (nextQty === already) {
      toast("info", "Maximum reached", `Only ${line.stock} in stock`);
      return false;
    }

    commit(
      existing
        ? current.map((i) =>
            i.id === line.id ? { ...i, ...line, quantity: nextQty } : i
          )
        : [...current, { ...line, quantity: nextQty }]
    );

    if (!silent) {
      toast("success", "Added to cart", product.name, {
        showConfirmButton: true,
        confirmButtonText: "View cart",
      }).then((result) => {
        if (result.isConfirmed) navigate("/cart");
      });
    }

    return true;
  };

  const setQuantity = (id, quantity) => {
    const q = Number(quantity) || 1;
    commit(
      itemsRef.current.map((i) =>
        i.id === id
          ? { ...i, quantity: Math.max(1, Math.min(q, i.stock || q)) }
          : i
      )
    );
  };

  const increaseItem = (id) => {
    const item = itemsRef.current.find((i) => i.id === id);
    if (item) setQuantity(id, item.quantity + 1);
  };

  const decreaseItem = (id) => {
    const item = itemsRef.current.find((i) => i.id === id);
    if (item) setQuantity(id, item.quantity - 1);
  };

  const removeItem = (id) => {
    commit(itemsRef.current.filter((i) => i.id !== id));
  };

  const clearCart = () => commit([]);

  const totalItems = cartItems.reduce((sum, i) => sum + i.quantity, 0);
  const totalAmount = cartItems.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const totalMrp = cartItems.reduce(
    (sum, i) => sum + Math.max(i.mrp, i.price) * i.quantity,
    0
  );
  const totalSavings = totalMrp - totalAmount;

  return (
    <CartContext.Provider
      value={{
        cartItems,
        loading: false,
        totalItems,
        totalAmount,
        totalMrp,
        totalSavings,
        addItem,
        setQuantity,
        increaseItem,
        decreaseItem,
        removeItem,
        clearCart,
        loadCart: () => {},
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);

export default CartContext;
