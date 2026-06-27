import { useState } from "react";

export default function ProductCard({ product, onOpen, onAddToCart }) {
  const [wished, setWished] = useState(false);

  return (
    <div className="card product-card">
      <div className="product-card-img" onClick={() => onOpen(product)} style={{ cursor: "pointer" }}>
        <img src={product.image} alt={product.name} loading="lazy" />
        <button
          className={`product-wishlist ${wished ? "active" : ""}`}
          aria-label="Add to wishlist"
          onClick={(e) => { e.stopPropagation(); setWished((w) => !w); }}
        >
          {wished ? "♥" : "♡"}
        </button>
      </div>
      <div className="product-card-body">
        <div className="product-card-cat">{product.category}</div>
        <div className="product-card-name">{product.name}</div>
        <div className="product-card-price">
          <b>₹{product.price.toLocaleString()}</b>
          <s>₹{product.mrp.toLocaleString()}</s>
        </div>
        <button className="btn btn-primary btn-sm btn-block" onClick={() => onAddToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
}
