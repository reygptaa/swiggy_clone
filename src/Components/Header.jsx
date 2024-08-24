import React, { useEffect, useState } from "react";
import logo from "/logo.png";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartItems = useSelector((store) => store.cart.items);
  const [user, setUser] = useState(localStorage.getItem("user"));
  const [isLoggedIn, setisLoggedIn] = useState(
    localStorage.getItem("isLoggedIn")
  );

  const location = useLocation(); // Get the current location

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    // Update user state whenever the location changes
    setisLoggedIn(localStorage.getItem("isLoggedIn"));
    setUser(localStorage.getItem("user"));
  }, [location]);

  return (
    <div className="header sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/">
            {/* <img
              className="h-10 sm:h-12 cursor-pointer hover:scale-105"
              src={logo}
              alt="Image is not able to see."
            /> */}
            <p className="font-bold text-3xl text-orange-500 p-2 rounded-lg  transform hover:scale-105 transition-transform duration-300">
              FoodVillah
            </p>
          </Link>
          <nav className="hidden sm:block">
            <ul className="flex flex-row gap-8 text-gray-600">
              <li className="font-semibold text-md hover:text-orange-500 cursor-pointer">
                <Link to="/search" className="flex items-center gap-2">
                  <i className="fa-solid fa-magnifying-glass"></i>
                  <span>Search</span>
                </Link>
              </li>

              <li className="font-semibold text-md hover:text-orange-500 cursor-pointer">
                <Link to="/instamart" className="flex items-center gap-2">
                  <i className="fa-solid fa-shop"></i>
                  <span>Instamart</span>
                </Link>
              </li>

              <li className="font-semibold text-md hover:text-orange-500 cursor-pointer">
                <Link to="/cart" className="flex items-center gap-2">
                  <i className="fa-solid fa-cart-shopping"></i>
                  <span>Cart ({cartItems.length})</span>
                </Link>
              </li>

              {isLoggedIn ? (
                <li className="font-semibold text-md hover:text-orange-500 cursor-pointer">
                  <Link
                    to={"/profile"}
                    className="font-bold p-2 underline text-orange-500"
                  >
                    {user.toUpperCase()}
                  </Link>
                </li>
              ) : (
                <li className="font-semibold text-md hover:text-orange-500 cursor-pointer">
                  <Link to="/login" className="flex items-center gap-2">
                    <i className="fa-regular fa-user"></i>
                    <span>Sign in</span>
                  </Link>
                </li>
              )}

              {!isLoggedIn && (
                <li className="font-semibold text-md hover:text-orange-500 cursor-pointer">
                  <Link to="/register" className="flex items-center gap-2">
                    <i className="fa-regular fa-user"></i>
                    <span>Sign up</span>
                  </Link>
                </li>
              )}
            </ul>
          </nav>
          <div className="sm:hidden">
            {/* Hamburger menu for mobile */}
            <button
              className="text-gray-600 hover:text-orange-500 focus:outline-none"
              onClick={toggleMenu}
            >
              <i className="fa-solid fa-bars fa-lg"></i>
            </button>
          </div>
        </div>
        {/* Center-aligned mobile menu */}
        {isMenuOpen && (
          <div className="sm:hidden flex justify-center mt-5">
            <ul className="flex flex-col gap-4 mb-5">
              <li>
                <Link
                  to="/search"
                  className="font-semibold text-md hover:text-orange-500 cursor-pointer flex items-center gap-2"
                  onClick={toggleMenu}
                >
                  <i className="fa-solid fa-magnifying-glass"></i>
                  <span>Search</span>
                </Link>
              </li>

              <li>
                <Link
                  to="/instamart"
                  className="font-semibold text-md hover:text-orange-500 cursor-pointer flex items-center gap-2"
                  onClick={toggleMenu}
                >
                  <i className="fa-solid fa-shop"></i>
                  <span>Instamart</span>
                </Link>
              </li>

              <li>
                <Link
                  to="/login"
                  className="font-semibold text-md hover:text-orange-500 cursor-pointer flex items-center gap-2"
                  onClick={toggleMenu}
                >
                  <i className="fa-regular fa-user"></i>
                  <span>Sign in</span>
                </Link>
              </li>

              <li>
                <Link
                  to="/register"
                  className="font-semibold text-md hover:text-orange-500 cursor-pointer flex items-center gap-2"
                  onClick={toggleMenu}
                >
                  <i className="fa-regular fa-user"></i>
                  <span>Sign up</span>
                </Link>
              </li>

              <li>
                <Link
                  to="/cart"
                  className="font-semibold text-md hover:text-orange-500 cursor-pointer flex items-center gap-2"
                  onClick={toggleMenu}
                >
                  <i className="fa-solid fa-cart-shopping"></i>
                  <span>Cart ({cartItems.length})</span>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
