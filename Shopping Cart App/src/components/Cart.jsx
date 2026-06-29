import React from 'react';

function Cart({ cartItems, removeFromCart }) {
  // Calculate total price dynamically
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h3>Your Cart</h3>
      {cartItems.length === 0 ? (
        <p>The cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div>
                <strong>{item.name}</strong> (x{item.quantity})
                <br />
                <small>${item.price} each</small>
              </div>
              <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </div>
          ))}
          <hr />
          <h4>Total Price: ${totalPrice}</h4>
        </div>
      )}
    </div>
  );
}

export default Cart;