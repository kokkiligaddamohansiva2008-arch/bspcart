import React from "react";
import { Link } from "react-router-dom";
import { discountPercent, formatINR } from "../data/catalog";
import { FiStar } from "react-icons/fi";

function ProductCard({ product, onAddToCart, onView }) {
  const price = Number(product.price);
  const mrp = Number(product.mrp ?? product.price);
  const safePrice = Number.isFinite(price) ? price : 0;
  const pct = Number.isFinite(mrp) ? discountPercent(safePrice, mrp) : 0;

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (onAddToCart) onAddToCart(product.id, product);
  };

  return (
    <div className="col-6 col-md-4 col-lg-3">
      <div className="product-card h-100 d-flex flex-column">
        <Link
          to={`/products/${product.id}`}
          onClick={() => onView && onView(product.id)}
          className="text-decoration-none text-dark position-relative"
        >
          <img
            src={product.imageUrl || product.image || "https://placehold.co/600x450?text=Product+Image"}
            onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = "https://placehold.co/600x450?text=Image+Unavailable"; }}
            alt={product.name}
            style={{ width: "100%", aspectRatio: "4 / 3", objectFit: "cover", borderRadius: "10px" }}
          />
          {pct > 0 && (
            <span
              className="badge bg-success position-absolute"
              style={{ top: 8, left: 8 }}
            >
              {pct}% off
            </span>
          )}

          <h3 className="h6 mt-2 mb-1">{product.name}</h3>
        </Link>

        {product.description && <p className="text-muted small mb-1">{product.description}</p>}

        <div className="d-flex align-items-center gap-2 mb-1">
          <p className="fw-bold mb-0">{formatINR(safePrice)}</p>
          {pct > 0 && <span className="text-muted text-decoration-line-through small">{formatINR(mrp)}</span>}
          {product.rating && (
            <span className="badge bg-success ms-auto d-inline-flex align-items-center gap-1"><FiStar aria-hidden="true" size={13} fill="currentColor" /> {product.rating.toFixed(1)}</span>
          )}
        </div>

        <button className="btn btn-dark btn-sm mt-auto" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
