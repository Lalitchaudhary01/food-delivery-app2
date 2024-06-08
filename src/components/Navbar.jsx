
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { SwiggyLogo } from '../utlis/constants';

function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const cartItems = useSelector((store) => store.cart.items);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`navbar ${
        isSticky ? 'sticky top-0 bg-white shadow-lg shadow-indigo-500/40 transition-all duration-300' : ''
      } w-full px-3 sm:px-5 md:px-5 z-10  `}
    >
      <nav className="flex justify-between items-center sm:px-8 md:px-8 py-1">
        <div className="firstnav flex items-center">
          <div className="w-8 sm:w-12 md:mr-14">
            <img src={SwiggyLogo} alt="" />
          </div>
          <div className="logoitem hidden md:flex">
            <p className="mx-2 font-semibold">Other</p>
            <p className="text-slate-400">Delhi, India</p>
          </div>
        </div>
        <div className="second flex justify-between md:text-[1.2rem] font-semibold">
          <div className="flex gap-4">
            <div className="cursor-pointer hover:text-orange-500">
              <Link to="/">Home</Link>
            </div>
            <div className="cursor-pointer hover:text-orange-500">
              <Link to="/about">About</Link>
            </div>
            <div className="cursor-pointer hover:text-orange-500">
              <Link to="/contact">Contact Us</Link>
            </div>
            <div className="cursor-pointer hover:text-orange-500">
              <Link to="/cart">Cart({cartItems.length} items)</Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;


