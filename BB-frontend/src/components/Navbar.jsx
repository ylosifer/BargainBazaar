import React from "react";
import { Link } from "react-router-dom";
import LazyLoad from "./LazyLoad";
import "./css/Navbar.css";

const Navbar = () => {
  return (
    <LazyLoad className="navbar-container">
      <nav className="navbar">
        <div className="navbar-logo">Bargain Bazaar</div>
        <div className="navbar-links">
          <Link to="/" id="navbar-link">
            Home
          </Link>
          <Link to="/createAd" id="navbar-link">
            Create Ad
          </Link>
          <Link to="/login" id="navbar-link">
            Login
          </Link>
        </div>
      </nav>
    </LazyLoad>
  );
};

export default Navbar;