import React from "react";
import { FaBars, FaSearch, FaRegBell, FaShoppingBag } from "react-icons/fa";
import "../styles/Header.css";
function Header() {
  return (
    <div className="header__container">
      <div>
        <FaBars className="icons" />
      </div>
      <div className="header__right">
        <FaSearch className="header__icons__right icons" />
        <FaRegBell className="header__icons__right icons" />
        <FaShoppingBag className="header__icons__right icons" />
      </div>
    </div>
  );
}

export default Header;
