import { useCart } from "../context/CartContext";

export default function CartItem({ item }) {
  const { changeQty, removeFromCart } = useCart();
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <div className="info">
        <h3>{item.name}</h3>
        <p className="muted">${item.price} each</p>
        <button className="link-btn" onClick={() => removeFromCart(item.id)}>
          Remove
        </button>
      </div>
      <div
        className="qty"
        role="group"
        aria-label={`Quantity for ${item.name}`}
      >
        <button
          onClick={() => changeQty(item.id, -1)}
          aria-label="Decrease quantity"
        >
          −
        </button>
        <span>{item.qty}</span>
        <button
          onClick={() => changeQty(item.id, 1)}
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>
      <p className="line-total">${item.price * item.qty}</p>
    </div>
  );
}
