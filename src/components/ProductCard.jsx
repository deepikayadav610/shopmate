import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (!added) return;
    const t = setTimeout(() => setAdded(false), 1400);
    return () => clearTimeout(t);
  }, [added]);

  const handleAdd = () => {
    addToCart(product);
    setAdded(true);
  };

  return (
    <article className="card">
      <div className="card-media">
        {product.tag && <span className="badge">{product.tag}</span>}
        <img src={product.image} alt={product.name} loading="lazy" />
      </div>
      <div className="card-body">
        <p className="rating" aria-label={`Rated ${product.rating} out of 5`}>
          <span className="star">★</span> {product.rating}
        </p>
        <h3 className="name">{product.name}</h3>
        <div className="card-footer">
          <span className="price">${product.price}</span>
          <button
            className={`btn ${added ? "btn-done" : ""}`}
            onClick={handleAdd}
          >
            {added ? "Added ✓" : "Add to cart"}
          </button>
        </div>
      </div>
    </article>
  );
}
