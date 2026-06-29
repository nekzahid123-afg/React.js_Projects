import React from 'react';

function Navbar({ totalItems }) {
  return (
    <nav className="navbar">
      <h2>My Shopping Cart App</h2>
      <div>
        <strong>Cart Items: {totalItems}</strong>
      </div>
    </nav>
  );
}

export default Navbar;