import "./Card.css";
import React from "react";

const Card = (props) => {
  // if we pass all element html or componet of a div inside a componet then to received the data inside that div we have to used
  // props.children as well as if we want to received the class from the componet then we used props.className
  return <div className={props.className}>{props.children}</div>;
};

export default Card;
