import React from 'react';

const PRODUCTS = [
  { id: 1, name: 'Laptop', price: 999 },
  { id: 2, name: 'Headphones', price: 99 },
  { id: 3, name: 'Keyboard', price: 49 },
  { id: 4, name: 'Mouse', price: 29 },
];

function ProductList({ addToCart }) {
  return (
    <div className="product-list">
      <h3>Available Products</h3>
      {PRODUCTS.map((product) => (
        <div key={product.id} className="product-item">
          <div>
            <strong>{product.name}</strong> - ${product.price}
          </div>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;