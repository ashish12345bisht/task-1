import React from "react";
import { FaHome, FaSearch, FaShoppingBag, FaUser } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import "../styles/Footer.css";
function Footer() {
  return (
    <div className="footer__container">
      <div>
        <FaHome className="footer__icons" />
        <h4>Home</h4>
      </div>
      <div>
        <FaSearch className="footer__icons" />
        <h4>Search</h4>
      </div>
      <div>
        <BiCategory className="footer__icons" />
        <h4>Category</h4>
      </div>
      <div>
        <FaShoppingBag className="footer__icons" />
        <h4>Cart</h4>
      </div>
      <div>
        <FaUser className="footer__icons" />
        <h4>Account</h4>
      </div>
    </div>
  );
}

export default Footer;
