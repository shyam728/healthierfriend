import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assests/logo.png";
import {
  faCommentDots,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/Navbar.css";
import { useNavigate } from "react-router-dom";


function Navbar() {
  const [nav, setNav] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const navigate = useNavigate();

  const openNav = () => {
    setNav(!nav);
  };

  const startToday = () =>{
  navigate('/welcome')
  }


  return (
    <div className="navbar-section">
      <h1 className="navbar-title">
        
        <img src={logo} width="200px" height="120px" />
     
      </h1>

      {/* Desktop */}
      <ul className="navbar-items">
        <li>
        <a href="#Home" className="navbar-links">
            Home
         </a>
        </li>
        <li>
          <a href="#Health" className="navbar-links">
             Health
          </a>
        </li>
        <li>
          <a href="#suggestion" className="navbar-links">
            Suggestion
          </a>
        </li>
        <li>
          <a href="#about" className="navbar-links">
            About
          </a>
        </li>
        <li>
          <a href="#reviews" className="navbar-links">
            Reviews
          </a>
        </li>
        <li>
          <a href="#blog" className="navbar-links">
             Blog
          </a>
        </li>
        <li>
          <a href="#footer" className="navbar-links">
             Contact Us
          </a>
        </li>
      
      </ul>

      <button
        className="navbar-btn"
        type="button"
        disabled={isButtonDisabled}
        onClick={startToday}
      >
       Start Today
      </button>
     

      {/* Mobile */}
      <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
        <div onClick={openNav} className="mobile-navbar-close">
          <FontAwesomeIcon icon={faXmark} className="hamb-icon" />
        </div>

        <ul className="mobile-navbar-links">
          <li>
           
              Home
          
          </li>
          <li>
          
              Services
           
          </li>
          <li>
            <a onClick={openNav} href="#about">
              About
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#reviews">
              Reviews
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#doctors">
              Doctors
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Hamburger Icon */}
      <div className="mobile-nav">
       Sign In
      </div>
    </div>
  );
}

export default Navbar;