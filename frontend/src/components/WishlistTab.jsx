import React from 'react';
import { Link } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';

export default function WishlistTab() {
  const wl = useWishlist() || {};
  const cart = useCart() || {};

  const items = wl.wishlist || wl.items || wl.wishlistItems || [];
  const remove = wl.removeFromWishlist || wl.remove || (() => {});
  const addToCart = cart.addToCart || cart.addItem || (() => {});

  if (!items.length) {
    return (
      <div className="text-center py-5">
        <div style={{ fontSize: 48 }}>♡</div>
        <h5 className="mt-2">Your wish list is empty</h5>
        <p className="text-muted">Tap the heart on any product to save it here.</p>
        <Link to="/products" className="btn btn-dark">Browse products</Link>
      </div>
    );
  }

  return (
    <div className="row g-3">
      {items.map((p) => {
        const id = p.id ?? p._id ?? p.productId;
        const img = p.image || (p.images && p.images[0]) || '';
        return (
          <div className="col-6 col-md-4 col-lg-3" key={id}>
            <div className="card h-100 shadow-sm">
              {img && (
                <img src={img} alt={p.name} className="card-img-top"
                     style={{ height: 160, objectFit: 'cover' }} />
              )}
              <div className="card-body d-flex flex-column">
                <Link to={`/products/${id}`} className="text-decoration-none text-dark fw-semibold">
                  {p.name}
                </Link>
                <div className="mt-1 mb-3">₹{Number(p.price || 0).toLocaleString('en-IN')}</div>
                <div className="mt-auto d-flex gap-2">
                  <button className="btn btn-sm btn-dark flex-fill" onClick={() => addToCart(p, 1)}>
                    Add to cart
                  </button>
                  <button className="btn btn-sm btn-outline-danger" title="Remove"
                          onClick={() => remove(id)}>
                    ✕
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
