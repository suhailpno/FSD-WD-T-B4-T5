import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineUser, AiOutlineLogout } from "react-icons/ai";

const Navbar = ({ cartCount, onCartClick, onProfileClick, onLogoutClick }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="top-0 z-50 sticky flex justify-between items-center bg-gray-900 shadow-md p-4 text-white">
      {/* Branding */}
      <h1 className="font-bold text-2xl hover:text-gray-300 transition-colors duration-300 cursor-pointer">
        Add to Cart Task
      </h1>

      {/* Navbar Items */}
      <div className="flex items-center space-x-6">
        {/* Cart Icon */}
        <button
          onClick={onCartClick}
          className="relative flex items-center bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors duration-300 group"
        >
          <FaShoppingCart className="mr-2 text-lg" />
          <span>Cart</span>
          {cartCount > 0 && (
            <span className="top-0 right-0 absolute flex justify-center items-center bg-red-600 rounded-full w-4 h-4 font-bold text-white text-xs transform -translate-x-1/2 translate-y-1/2">
              {cartCount}
            </span>
          )}
        </button>

        {/* User Profile and Sign-Out Options */}
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="flex items-center bg-gray-800 hover:bg-gray-700 p-2 rounded-lg transition-colors duration-300 focus:outline-none"
          >
            <AiOutlineUser className="mr-2 text-xl" />
            Profile
          </button>

          {/* Profile Dropdown */}
          {isDropdownOpen && (
            <div className="top-full right-0 z-50 absolute border-gray-300 bg-white shadow-lg mt-2 border rounded-lg w-48 text-black transform transition-transform translate-y-2">
              <button
                onClick={onProfileClick}
                className="flex items-center hover:bg-gray-100 px-4 py-2 rounded-t-lg w-full transition-colors duration-300"
              >
                <AiOutlineUser className="mr-2 text-gray-600 text-lg" />
                View Profile
              </button>
              <button
                onClick={onLogoutClick}
                className="flex items-center hover:bg-gray-100 px-4 py-2 rounded-b-lg w-full transition-colors duration-300"
              >
                <AiOutlineLogout className="mr-2 text-gray-600 text-lg" />
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
