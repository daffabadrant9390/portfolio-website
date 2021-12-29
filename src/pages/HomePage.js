import Contact from "parts/Contact";
import Footer from "parts/Footer";
import Header from "parts/Header";
import Hero from "parts/Hero";
import Projects from "parts/Projects";
import React from "react";

import useSmoothScrollAnchor from "../helpers/hooks/useSmoothScrollAnchor";
import useModal from "../helpers/hooks/useModal";
import useMenuToggler from "helpers/hooks/useMenuToggler";
import useAnimation from "../helpers/hooks/useAnimation";

const HomePage = () => {
  useSmoothScrollAnchor();
  useModal();
  useMenuToggler();
  useAnimation();
  return (
    <>
      <Header />;
      <Hero />;
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default HomePage;
