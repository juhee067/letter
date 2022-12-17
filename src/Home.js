import React from "react";

const Home = () => {
  return (
    <div>
      {" "}
      <div className="main">
        <div className="homeLetter">
          <h2>한이야 생일축하한다!</h2>
        </div>
        <div className="monster">
          <div className="monster__face">
            <div className="monster__eyes">
              <div className="monster__eye"></div>
              <div className="monster__eye"></div>
            </div>
            <div className="monster__mouth">
              <div className="monster__top"></div>
              <div className="monster__bottom"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
