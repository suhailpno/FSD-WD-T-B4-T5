import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import CartDialog from "./components/CartDialog";
import Footer from "./components/Footer";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const itemIndex = prevCart.findIndex(
        (item) => item.product.id === product.id
      );
      if (itemIndex !== -1) {
        alert("Item already added to the cart");
        return prevCart;
      }
      return [...prevCart, { product, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (product) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.product.id !== product.id)
    );
  };

  const handleUpdateQuantity = (product, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveFromCart(product);
    } else {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: newQuantity }
            : item
        )
      );
    }
  };

  return (
    <div className="font-sans">
      <Navbar
        cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)}
        onCartClick={() => setShowCart(true)}
      />
      <ProductList
        products={products}
        cart={cart}
        onAddToCart={handleAddToCart}
        onRemoveFromCart={handleRemoveFromCart}
      />
      {showCart && (
        <CartDialog
          cartItems={cart}
          onClose={() => setShowCart(false)}
          onRemoveFromCart={handleRemoveFromCart}
          onUpdateQuantity={handleUpdateQuantity}
        />
      )}
      <Footer />
    </div>
  );
};

export default App;
