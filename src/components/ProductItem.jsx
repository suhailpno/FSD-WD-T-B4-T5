import React, { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io"; // Close icon for the modal

const ProductItem = ({ product, cart, onAddToCart, onRemoveFromCart }) => {
  const [inCart, setInCart] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const isInCart = cart.some((item) => item.product.id === product.id);
    setInCart(isInCart);
  }, [cart, product.id]);

  const handleButtonClick = () => {
    if (inCart) {
      onRemoveFromCart(product);
    } else {
      onAddToCart(product);
    }
  };

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div className="relative bg-white shadow-lg hover:shadow-2xl border rounded-lg transform transition-transform duration-300 hover:scale-105 overflow-hidden">
      <div className="relative">
        <img
          src={product.image}
          alt={product.title}
          className="hover:opacity-80 w-full h-64 transition-transform duration-300 cursor-pointer object-cover"
          onClick={handleModalOpen}
        />
        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-transparent p-4">
          <h2 className="font-semibold text-lg text-white truncate">
            {product.title}
          </h2>
          <p className="font-bold text-white text-xl">₹{product.price}</p>
        </div>
      </div>
      <div className="p-4">
        <button
          onClick={handleButtonClick}
          className={`w-full py-2 rounded-lg text-white font-semibold transition-colors duration-300 ${
            inCart
              ? "bg-red-500 hover:bg-red-600"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          {inCart ? "Remove from Cart" : "Add to Cart"}
        </button>
      </div>

      {/* Full Image Modal */}
      {showModal && (
        <div className="z-50 fixed inset-0 flex justify-center items-center bg-black bg-opacity-60 transition-opacity duration-300">
          <div className="relative bg-white shadow-2xl mx-auto rounded-lg max-w-4xl transform transition-transform duration-300 scale-100 hover:scale-105">
            <button
              onClick={handleModalClose}
              className="top-4 right-4 absolute bg-gray-800 hover:bg-gray-700 p-2 rounded-full text-white focus:outline-none"
            >
              <IoMdClose className="w-6 h-6" />
            </button>
            <div className="flex md:flex-row flex-col">
              <img
                src={product.image}
                alt={product.title}
                className="rounded-t-lg md:rounded-l-lg w-full md:w-1/2 h-auto object-cover"
              />
              <div className="flex-1 p-6">
                <h2 className="mb-4 font-semibold text-3xl text-gray-900">
                  {product.title}
                </h2>
                <p className="mb-4 font-bold text-gray-800 text-xl">
                  ₹{product.price}
                </p>
                <p className="mb-4 text-gray-600">
                  {product.description || "No description available."}
                </p>
                <button
                  onClick={handleButtonClick}
                  className={`py-3 px-6 rounded-lg text-white font-semibold transition-colors duration-300 ${
                    inCart
                      ? "bg-red-500 hover:bg-red-600"
                      : "bg-blue-500 hover:bg-blue-600"
                  }`}
                >
                  {inCart ? "Remove from Cart" : "Add to Cart"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductItem;
