import React from "react";
import "./Category.css";

const Category = (props) => {
  const setColor = (val) => {
    if (val === "Fire") {
      return "red";
    } else if (val === "Poison") {
      return "purple";
    } else if (val === "Water") {
      return "blue";
    } else if (val === "Bug") {
      return "crimson";
    } else if (val === "Flying") {
      return "pink";
    } else if (val === "Electric") {
      return "aqua";
    } else if (val === "Ground") {
      return "brown";
    } else if (val === "Grass") {
      return "green";
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
