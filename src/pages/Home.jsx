import { useEffect, useState } from "react";
import ProductList from "../components/ProductList";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <section className="hero">
        <div className="hero-text">
          <h1>Headphones for every kind of listener.</h1>
          <p>
            From $49 daily drivers to flagship noise cancelling. Free shipping
            on every order.
          </p>
          <a href="#products" className="btn btn-light">
            Shop headphones
          </a>
        </div>
        <div className="hero-art" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </section>

      <section id="products" className="section">
        <div className="section-head">
          <h2>All headphones</h2>
          {!loading && !error && (
            <span className="muted">{products.length} products</span>
          )}
        </div>

        {loading && (
          <div className="grid">
            {[1, 2, 3].map((n) => (
              <div key={n} className="skeleton" />
            ))}
          </div>
        )}
        {error && (
          <p className="center">
            Couldn't load products. Refresh the page to try again.
          </p>
        )}
        {!loading && !error && <ProductList products={products} />}
      </section>
    </>
  );
}
