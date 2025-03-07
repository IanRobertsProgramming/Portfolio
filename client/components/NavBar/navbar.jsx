// import React from "react";
import "./navbar.css";
import logo from "../../src/assets/logo.svg";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

export default function NavBar() {
  return (
    <>
      <nav className="navbar">
        <img src={logo} alt="logo" className="logo" />
        <div className="desktopMenu">
          <Link to="/" className="desktopMenuListItem">
            Home
          </Link>
          <Link to="/about" className="desktopMenuListItem">
            About
          </Link>
          <Link to="/education" className="desktopMenuListItem">
            Education
          </Link>
          <Link to="/project" className="desktopMenuListItem">
            Project
          </Link>
          <Link to="/services" className="desktopMenuListItem">
            Services
          </Link>
        </div>
        <Link to="/contact" className="desktopContactMeLink">
          <button className="desktopContactMeBtn">
            <Icon
              icon="mdi:message-outline"
              className="desktopContactMeIcon"
              alt="Contact Me"
            />
            Contact Me
          </button>
        </Link>
        {/* <button className="desktopContactMeBtn">
          <Icon icon="mdi:message-outline" className="desktopContactMeIcon" />
          <Link to="/contact" className="desktopContactMeLink">Contact Me</Link>
        </button> */}
      </nav>
    </>
  );
}
