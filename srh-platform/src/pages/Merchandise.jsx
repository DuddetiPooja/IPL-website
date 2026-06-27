import { useState, useMemo } from "react";
import ProductCard from "../components/ProductCard";
import Reveal from "../components/Reveal";
import { products } from "../data/mockData";

const CATEGORIES = ["All", ...new Set(products.map((p) => p.category))];

export default function Merchandise() {
  const [category, setCategory] = useState("All");
  const [activeProduct, setActiveProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const filtered = useMemo(() =>
    products.filter((p) => category === "All" || p.category === category)
  , [category]);

  const addToCart = (product) => {
    setCart((c) => {
      const existing = c.find((i) => i.id === product.id);
      if (existing) return c.map((i) => (i.id === product.id ? { ...i, qty: i.qty + 1 } : i));
      return [...c, { ...product, qty: 1 }];
    });
    setCartOpen(true);
  };

  const removeFromCart = (id) => setCart((c) => c.filter((i) => i.id !== id));
  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <>
      <div className="page-banner">
        <div className="container flex-between" style={{ flexWrap: "wrap", gap: 14 }}>
          <div>
            <span className="eyebrow">Orange Vault</span>
            <h1 className="hero-title" style={{ fontSize: "clamp(32px,5vw,52px)" }}>Merchandise</h1>
          </div>
          <button className="btn btn-outline" onClick={() => setCartOpen(true)}>🛒 Cart ({cart.reduce((s, i) => s + i.qty, 0)})</button>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="scrollx" style={{ marginBottom: 28 }}>
            {CATEGORIES.map((c) => (
              <button key={c} className={`btn btn-sm ${category === c ? "btn-primary" : "btn-outline"}`} onClick={() => setCategory(c)}>{c}</button>
            ))}
          </div>

          <div className="grid-auto">
            {filtered.map((p, i) => (
              <Reveal key={p.id} delay={i * 40}>
                <ProductCard product={p} onOpen={setActiveProduct} onAddToCart={addToCart} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      {activeProduct && (
        <div className="lightbox" onClick={() => setActiveProduct(null)}>
          <div
            className="card"
            style={{ maxWidth: 640, width: "92%", display: "grid", gridTemplateColumns: "1fr 1fr", overflow: "hidden" }}
            onClick={(e) => e.stopPropagation()}
          >
            <img src={activeProduct.image} alt={activeProduct.name} style={{ height: "100%", objectFit: "cover" }} />
            <div style={{ padding: 28 }}>
              <button className="lightbox-close" style={{ position: "static", marginBottom: 12 }} onClick={() => setActiveProduct(null)}>✕</button>
              <div className="product-card-cat">{activeProduct.category}</div>
              <h2 style={{ fontSize: 22, margin: "6px 0 14px" }}>{activeProduct.name}</h2>
              <div className="product-card-price" style={{ marginBottom: 22 }}>
                <b style={{ fontSize: 22 }}>₹{activeProduct.price.toLocaleString()}</b>
                <s>₹{activeProduct.mrp.toLocaleString()}</s>
              </div>
              <button className="btn btn-primary btn-block" onClick={() => { addToCart(activeProduct); setActiveProduct(null); }}>Add to Cart</button>
            </div>
          </div>
        </div>
      )}

      {/* Cart Drawer */}
      {cartOpen && (
        <>
          <div className="mobile-menu-overlay" onClick={() => setCartOpen(false)} />
          <div className="mobile-menu" style={{ width: "min(380px, 90vw)" }}>
            <button className="mobile-menu-close" onClick={() => setCartOpen(false)}>✕</button>
            <h3 style={{ marginTop: 0 }}>Your Cart</h3>
            {cart.length === 0 && <p className="text-muted">Your cart is empty.</p>}
            {cart.map((item) => (
              <div key={item.id} style={{ display: "flex", gap: 12, padding: "12px 0", borderBottom: "1px solid var(--border)" }}>
                <img src={item.image} alt={item.name} style={{ width: 56, height: 56, objectFit: "cover", borderRadius: 8 }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13.5, fontWeight: 700 }}>{item.name}</div>
                  <div className="text-muted" style={{ fontSize: 12 }}>Qty: {item.qty} · ₹{item.price.toLocaleString()}</div>
                </div>
                <button onClick={() => removeFromCart(item.id)} style={{ background: "none", border: "none", color: "var(--muted)" }}>✕</button>
              </div>
            ))}
            {cart.length > 0 && (
              <div style={{ marginTop: 20 }}>
                <div className="flex-between" style={{ marginBottom: 16, fontWeight: 800 }}>
                  <span>Total</span><span>₹{total.toLocaleString()}</span>
                </div>
                <button className="btn btn-primary btn-block">Checkout</button>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
}
