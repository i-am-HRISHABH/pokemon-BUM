import React from "react";
import "./Attribute.css";

const Attribute = (props) => {
  const fill = Math.round(props.data);

  return (
    <div className="att-wrapper">
      <div className="att-fullbar"></div>
      <div
        className="att-colorbar"
        style={{ width: `${fill < 18 ? 19 : fill}%` }}
      ></div>
      <div className="att-circle">{fill}</div>
    </div>
  );
};

export default Attribute;
