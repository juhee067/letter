import React from "react";
import "./Main.scss";
import Header from "./Header";
import Home from "./Home";
const Main = () => {
  return (
    <div>
      <div className="main">
        <div className="container">
          <Header />
          <Home />
        </div>
      </div>
    </div>
  );
};

export default Main;
