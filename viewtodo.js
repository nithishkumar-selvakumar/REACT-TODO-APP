import React from "react";
import "./index.css";

const View = (props) => {
  return (
    <>
      <div onClick={() => props.Deletetask(props.id)}>
        <li className="list-group-item list-group-item-primary">
          <center>{props.text}</center>
        </li>
      </div>
    </>
  );
};
export default View;
