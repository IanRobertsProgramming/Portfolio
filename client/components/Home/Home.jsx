// import React from "react";
import "./Home.css";
import pictureOfMe from "../../src/assets/pictureOfMe.png";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hi">Hi,</span>
        <span className="introText">
          my name's <span className="introName">Ian</span> and
          <br />I am Full Stack Developer
        </span>
        <p className="introPara">
          I’m a software developer with a passion for building efficient
          solutions and solving complex problems. From coding to automation, I
          love creating systems that make a real impact.
        </p>
        <Link to="/contact" className="hireMeLink">
          <button className="hireMeBtn">
            <Icon
              icon="mdi:briefcase-outline"
              className="desktopContactMeIcon"
              alt="Hire Me"
            />
            Hire Me
          </button>
        </Link>
      </div>
      <img src={pictureOfMe} alt="" className="pictureOfMe" />
    </section>
  );
}
