// import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./src/pages/HomePage";
import About from "./src/pages/AboutPage";
import Contact from "./src/pages/ContactPage";
import Projects from "./src/pages/ProjectsPage";
import Services from "./src/pages/ServicesPage";
import NavBar from "./src/components/NavBar";
import Footer from "./src/components/Footer";

const MainRouter = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default MainRouter;
