import React from "react";
import { Link } from "react-router-dom";
import { FaMinus, FaPlus, FaTrashAlt } from "react-icons/fa";
import { discountPercent, formatINR } from "../data/catalog";

function CartItem({ item, onIncrease, onDecrease, onRemove }) {
  const pct = discountPercent(item.price, item.mrp);
  const atMax = item.stock && item.quantity >= item.stock;

  return (
    <article className="cart-line">
      <Link to={`/products/${item.productId}`} className="cart-line-photo">
        <img src={item.imageUrl} alt={item.name} loading="lazy" />
      </Link>

      <div className="cart-line-body">
        <div className="cart-line-top">
          <div>
            <Link to={`/products/${item.productId}`} className="cart-line-name">
              {item.name}
            </Link>
            {item.seller && (
              <p className="cart-line-seller">Sold by {item.seller}</p>
            )}
          </div>

          <button
            type="button"
            className="cart-line-remove"
            onClick={() => onRemove(item.id)}
            aria-label={`Remove ${item.name} from cart`}
            title="Remove"
          >
            <FaTrashAlt />
          </button>
        </div>

        <div className="cart-line-prices">
          <strong>{formatINR(item.price)}</strong>
          {pct > 0 && (
            <>
              <s>{formatINR(item.mrp)}</s>
              <span className="cart-line-off">{pct}% off</span>
            </>
          )}
        </div>

        <div className="cart-line-bottom">
          <div className="cart-stepper" role="group" aria-label="Quantity">
            <button
              type="button"
              onClick={() => onDecrease(item.id)}
              disabled={item.quantity <= 1}
              aria-label="Decrease quantity"
            >
              <FaMinus />
            </button>
            <span aria-live="polite">{item.quantity}</span>
            <button
              type="button"
              onClick={() => onIncrease(item.id)}
              disabled={atMax}
              aria-label="Increase quantity"
            >
              <FaPlus />
            </button>
          </div>

          {atMax && <span className="cart-line-max">Max available</span>}

          <div className="cart-line-total">
            {formatINR(item.price * item.quantity)}
          </div>
        </div>
      </div>
    </article>
  );
}

export default CartItem;
