import React from "react";
import Header from "./header";
import Logo from "./logo";
import Carousel from "./carousel";
import Nav from "./nav";

const App = () => {
  return (
    <div className="layout">
      <Header />
      <Logo />
      <Carousel />
      <Nav />
    </div>
  );
};

export default App;
