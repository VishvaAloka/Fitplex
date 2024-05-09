import React from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="flex justify-between bg-#3c3f45">
      <img src={Logo} alt="" className="logo w-40 h-12" />

      <ul className="header-menu">
        <li>Home</li>
        <li>Programmes</li>
        <li>Why us</li>
        <li>Plans</li>
        <li>Testimonial</li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
