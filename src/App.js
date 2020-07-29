import React from "react";
import Header from "./header";
import Logo from "./logo";

import Carousel from "./carousel";

const App = () => {
  return (
    <React.Fragment>
      <div className="outer">
        <Header />
      </div>
      <div>
        <Logo />
      </div>
      <Carousel />
    </React.Fragment>
  );
};

export default App;
