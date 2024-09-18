import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ products, cart, onAddToCart, onRemoveFromCart }) => {
  return (
    <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-6">
      {products.map(product => (
        <ProductItem
          key={product.id}
          product={product}
          cart={cart}
          onAddToCart={onAddToCart}
          onRemoveFromCart={onRemoveFromCart}
        />
      ))}
    </div>
  );
};

export default ProductList;
