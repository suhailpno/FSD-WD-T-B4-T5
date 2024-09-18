import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { HiPlus, HiMinus } from "react-icons/hi";

const CartDialog = ({
  cartItems,
  onClose,
  onRemoveFromCart,
  onUpdateQuantity,
}) => {
  // Calculate total value of the cart
  const calculateTotal = () => {
    return cartItems
      .reduce((acc, { product, quantity }) => acc + product.price * quantity, 0)
      .toFixed(2);
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 p-4">
      <div className="bg-white shadow-xl rounded-lg w-full max-w-2xl overflow-hidden">
        <header className="bg-gray-800 p-4 text-white">
          <h2 className="font-semibold text-2xl">Your Cart</h2>
        </header>

        <div className="p-4">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-600">Your cart is empty</p>
          ) : (
            <ul className="divide-y divide-gray-200">
              {cartItems.map(({ product, quantity }) => (
                <li
                  key={product.id}
                  className="flex justify-between items-center px-2 md:px-4 py-4"
                >
                  <div className="flex items-center space-x-4 bg-gray-50 shadow-md p-3 rounded-lg w-full">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="border-gray-300 border rounded-md w-24 h-24 object-cover"
                    />
                    <div className="flex-1 ml-4">
                      <p className="font-semibold text-lg">{product.title}</p>
                      <p className="text-gray-600 text-sm">₹{product.price}</p>
                      <div className="flex items-center space-x-2 mt-2">
                        <button
                          onClick={() =>
                            onUpdateQuantity(product, quantity - 1)
                          }
                          className="bg-gray-300 hover:bg-gray-400 p-2 rounded-full text-gray-800 transition-colors duration-300"
                          disabled={quantity <= 1}
                        >
                          <HiMinus className="w-5 h-5" />
                        </button>
                        <span className="font-medium text-lg">{quantity}</span>
                        <button
                          onClick={() =>
                            onUpdateQuantity(product, quantity + 1)
                          }
                          className="bg-gray-300 hover:bg-gray-400 p-2 rounded-full text-gray-800 transition-colors duration-300"
                        >
                          <HiPlus className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => onRemoveFromCart(product)}
                    className="bg-red-500 hover:bg-red-600 ml-4 p-2 rounded-full text-white transition-colors duration-300"
                    aria-label="Remove from cart"
                  >
                    <FaTrashAlt className="w-5 h-5" />
                  </button>
                </li>
              ))}
            </ul>
          )}

          <div className="flex justify-between items-center mt-6 font-bold text-lg">
            <span>Total:</span>
            <span>₹{calculateTotal()}</span>
          </div>
        </div>

        <footer className="flex justify-between bg-gray-100 p-4">
          <button
            onClick={() => alert("Proceed to checkout (dummy button)")}
            className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg text-white transition-colors duration-300"
          >
            Proceed to Checkout
          </button>
          <button
            onClick={onClose}
            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-white transition-colors duration-300"
          >
            Close
          </button>
        </footer>
      </div>
    </div>
  );
};

export default CartDialog;
