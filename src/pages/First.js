import React from "react";

const First = ({ show }) => {
  return (
    <div className="container">
      <div className={`firstItem ${show}`}>
        <img src={process.env.PUBLIC_URL + "/img/first.png"}></img>
      </div>
    </div>
  );
};

export default First;
