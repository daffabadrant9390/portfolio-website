import Contact from "parts/Contact";
import Footer from "parts/Footer";
import Header from "parts/Header";
import Hero from "parts/Hero";
import Projects from "parts/Projects";
import React from "react";

import useSmoothScrollAnchor from "../helpers/hooks/useSmoothScrollAnchor";
import useModal from "../helpers/hooks/useModal";
import useMenuToggler from "helpers/hooks/useMenuToggler";

const HomePage = () => {
  useSmoothScrollAnchor();
  useModal();
  useMenuToggler();
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
