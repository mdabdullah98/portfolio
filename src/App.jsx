import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import About from "./About";
import Header from "./Header";
import Herosec from "./Herosec";
import Skills from "./stack/Skills";
import Projects from "./Projects";
import ContactUs from "./Contact";

import "./App.css";
function App() {
  return (
    <>
      <Header />
      <Herosec />
      <About />
      <Skills />
      <Projects />
      <ContactUs />
    </>
  );
}

export default App;
