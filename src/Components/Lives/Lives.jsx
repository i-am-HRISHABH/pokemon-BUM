import React from "react";
import "./Lives.css";

const Lives = (props) => {
  let life = [];
  for (let i = 1; i <= props.life; i++) {
    life.push("o");
  }

  return (
    <div className="l-wrapper">
      {/* <div className="l-life"></div>
      <div className="l-life"></div>
      <div className="l-life"></div> */}
      {life.map((item, index) => {
        return <div className="l-life" key={index}></div>;
      })}
    </div>
  );
};

export default Lives;
