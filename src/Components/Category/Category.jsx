import React from "react";
import "./Category.css";

const Category = (props) => {
  const setColor = (val) => {
    if (val === "Fire") {
      return "#FF6D03";
    } else if (val === "Poison") {
      return "#AD00F";
    } else if (val === "Water") {
      return "#3E8AFC";
    } else if (val === "Bug") {
      return "#770F41";
    } else if (val === "Flying") {
      return "#0515A1";
    } else if (val === "Electric") {
      return "#FFF500";
    } else if (val === "Ground") {
      return "#934702";
    } else if (val === "Grass") {
      return "#934702";
    } else if (val === "Ice") {
      return "#7EECFB";
    } else if (val === "Psychic") {
      return "#08D67F";
    } else if (val === "Dark") {
      return "#210230";
    } else if (val === "Steel") {
      return "#79747B";
    } else if (val === "Ghost") {
      return "#F56D6D";
    } else if (val === "Rock") {
      return "#A59C95";
    } else if (val === "Fighting") {
      return "#1D7C77";
    } else if (val === "Fairy") {
      return "#FD057C";
    } else if (val === "Dragon") {
      return "#FF0000";
    } else {
      return "black";
    }
  };
  const category = props.carray;
  return (
    <div className="c-wrapper">
      {category.map((item, index) => {
        return (
          <div
            className="c-item"
            key={index}
            style={{ background: `${setColor(item)}` }}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default Category;
