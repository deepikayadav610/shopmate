import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, totalItems, totalPrice } = useCart();

  if (cart.length === 0)
    return (
      <div className="empty">
        <svg
          width="56"
          height="56"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M3 4h2l2.4 11h10.2L20 7H6.2"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="9" cy="19.5" r="1.5" fill="currentColor" />
          <circle cx="17" cy="19.5" r="1.5" fill="currentColor" />
        </svg>
        <h2>Your cart is empty</h2>
        <p className="muted">
          Add a pair of headphones and they'll show up here.
        </p>
        <Link to="/" className="btn">
          Browse headphones
        </Link>
      </div>
    );

  return (
    <section className="section">
      <div className="section-head">
        <h2>Your cart</h2>
        <span className="muted">
          {totalItems} {totalItems === 1 ? "item" : "items"}
        </span>
      </div>

      <div className="cart-layout">
        <div className="cart-list">
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        <aside className="summary">
          <h3>Order summary</h3>
          <div className="row">
            <span>Subtotal</span>
            <span>${totalPrice}</span>
          </div>
          <div className="row">
            <span>Shipping</span>
            <span className="free">Free</span>
          </div>
          <div className="row total">
            <span>Total</span>
            <span>${totalPrice}</span>
          </div>
          <button className="btn btn-block">Checkout</button>
          <Link to="/" className="link-btn center-link">
            Continue shopping
          </Link>
        </aside>
      </div>
    </section>
  );
}
