// import React from "react";
import "../styles/navbar.css";
import Logo from "/assets/images/logo.svg";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="logoWrapper">
        <img src={Logo} alt="logo" className="logo" />
      </div>
      <div className="desktopMenu">
        <Link to="/" className="desktopMenuListItem" activeclass="active">
          Home
        </Link>
        <Link to="/about" className="desktopMenuListItem" activeclass="active">
          About
        </Link>
        <Link
          to="/projects"
          className="desktopMenuListItem"
          activeclass="active"
        >
          Projects
        </Link>
        <Link
          to="/services"
          className="desktopMenuListItem"
          activeclass="active"
        >
          Services
        </Link>
      </div>
      <Link to="/contact">
        <button className="desktopContactMeBtn">
          <Icon
            icon="mdi:message-outline"
            className="desktopContactMeIcon"
            alt="Contact Me"
          />
          Contact Me
        </button>
      </Link>
    </nav>
  );
}
