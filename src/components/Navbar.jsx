import { NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { totalItems } = useCart();
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <NavLink to="/" className="brand" aria-label="Shopmate home">
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M4 14v-2a8 8 0 0 1 16 0v2"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <rect
              x="3"
              y="13"
              width="4.5"
              height="7"
              rx="2"
              fill="currentColor"
            />
            <rect
              x="16.5"
              y="13"
              width="4.5"
              height="7"
              rx="2"
              fill="currentColor"
            />
          </svg>
          <span>Shopmate</span>
        </NavLink>

        <nav className="links" aria-label="Main">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/cart">Cart</NavLink>
        </nav>

        <NavLink
          to="/cart"
          className="cart-pill"
          aria-label={`Cart, ${totalItems} items`}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M3 4h2l2.4 11h10.2L20 7H6.2"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="9" cy="19.5" r="1.5" fill="currentColor" />
            <circle cx="17" cy="19.5" r="1.5" fill="currentColor" />
          </svg>
          <span key={totalItems} className="count">
            {totalItems}
          </span>
        </NavLink>
      </div>
    </header>
  );
}
