import React, { useState } from "react";
import "./index.css";
//import View from "./viewtodo";
const Input = (props) => {
  //const [name, addname] = useState("");
  const [name, addname] = useState("");
  const Handlechange = (event) => {
    addname(event.target.value);
  };
  //console.log(name);
  return (
    <div>
      <div>
        <h1 className="jumbotron text-center">TO-DO-APP!!</h1>

        <div className="form-group">
          <label for="pwd">
            <h2>
              <center>Tasks:</center>
            </h2>
          </label>
          <input
            type="text"
            placeholder="Enter Your Task"
            className="form-control"
            onChange={Handlechange}
            value={name}
          />

          <br />

          <button
            className="btn btn-success btn-sm btn-block"
            onClick={() => {
              props.Getdata(name);
              addname("");
            }}
          >
            <span class="spinner-border spinner-border-sm"></span>
            AddTask
          </button>
        </div>
        <h3>LIST OF TASKS</h3>
        <br />
        {/* <View list={props.list} /> */}
      </div>
    </div>
  );
};

export default Input;
