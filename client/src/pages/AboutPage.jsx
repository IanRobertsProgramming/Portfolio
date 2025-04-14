/* eslint-disable react/no-unescaped-entities */

import "../styles/about.css";
import PictureOfMe from "/assets/images/pictureOfMe.png";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import ResumeViewer from "../components/ResumeViewer";

export default function About() {
  return (
    <section id="about">
      <h2 className="aboutTitle">About Me</h2>
      <div className="aboutContent">
        <p className="aboutPara">
          Hey, I’m Ian! I’m a software developer with a passion for solving
          complex problems and building efficient, scalable solutions. I have an
          Honors degree in Computer Science from Wilfrid Laurier University,
          where I developed a strong foundation in software development,
          databases, and automation.
        </p>
        <p className="aboutPara">
          With my education and experience, I can design, build, and optimize
          software systems, work with databases like Oracle and SQL, and develop
          backend solutions that improve efficiency and performance. I also have
          a Salesforce Administrator certification, giving me insight into CRM
          platforms, workflow automation, and customer-focused technology
          solutions.
        </p>
        <p className="aboutPara">
          Beyond coding, I love exploring new tech, whether it’s automating
          workflows, experimenting with VR applications, or optimizing software
          for real-world impact. When I’m not at my desk, you might find me
          playing baseball, gaming, or keeping up with the latest in software
          development and AI.
        </p>
        <ResumeViewer />
        <Link to="/contact" className="hireMeLink">
          <button className="hireMeBtn">
            <Icon
              icon="mdi:briefcase-outline"
              className="desktopContactMeIcon"
              alt=""
            />
            Hire Me
          </button>
        </Link>
      </div>
      <img src={PictureOfMe} alt="" className="pictureOfMe" />
    </section>
  );
}
