import React from "react";

const Gift = () => {
  let img = [{ url: 'process.env.PUBLIC_URL + "/img/gift.png"}' }];
  return (
    <div className="container">
      <div className="content">
        {" "}
        <div class="homeLetter">
          <h2>선물 좀 골라봐라!</h2>
        </div>
        <div className="presentBox">
          {" "}
          {/* {img.map((a, i) => {
            return <img src={img[i].url}></img>;
          })} */}
          <img src={process.env.PUBLIC_URL + "/img/gift.png"}></img>
          <img src={process.env.PUBLIC_URL + "/img/gift.png"}></img>
          <img src={process.env.PUBLIC_URL + "/img/gift.png"}></img>
        </div>
      </div>
    </div>
  );
};

export default Gift;
