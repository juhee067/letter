import React from "react";
import First from "./First";
import Second from "./Second";
import Third from "./Third";
import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
const Gift = () => {
  let [none, setNone] = useState("");
  let [show, setShow] = useState("none");
  return (
    <div className="container">
      <div className="content">
        {" "}
        <div class={`homeLetter ${none}`}>
          <h2>선물 골라봐</h2>
        </div>
        <div className={`presentBox ${none}`}>
          {" "}
          {/* {img.map((a, i) => {
            return <img src={img[i].url}></img>;
          })} */}
          <Link
            to="/Gift/First"
            onClick={() => {
              setNone("none");
              setShow("show");
              return () => {
                return () => {
                  setNone("");
                  setShow("");
                };
              };
            }}
          >
            <img src={process.env.PUBLIC_URL + "/img/gift.png"}></img>
          </Link>
          <Link to="/Gift/Second">
            {" "}
            <img src={process.env.PUBLIC_URL + "/img/gift.png"}></img>
          </Link>
          <Link to="/Gift/Third">
            {" "}
            <img src={process.env.PUBLIC_URL + "/img/gift.png"}></img>
          </Link>
        </div>
        <Routes>
          <Route path="/First" element={<First show={show} />} />
          <Route path="/Second" element={<Second />} />
          <Route path="/Third" element={<Third />} />
        </Routes>
      </div>
    </div>
  );
};

export default Gift;
