import React, { useState } from "react";
import ReactDOM from "react-dom";
import Input from "./inputarea";
import View from "./viewtodo";
import "./index.css";

const Final = () => {
  const [list, listofnames] = useState([]);
  const Getdata = (name) => {
    return listofnames((prevdata) => {
      return [...prevdata, name];
    });
  };
  const Deletetask = (id) => {
    listofnames((prevdata) => {
      return prevdata.filter((item, index) => {
        return index !== id;
      });
    });
  };

  console.log(list);
  return (
    <div>
      <Input Getdata={Getdata} list={list} />
      <div>
        <ul className="list-group">
          {list.map((data, index) => {
            return (
              <div key={index}>
                <View
                  key={index}
                  text={data}
                  id={index}
                  Deletetask={Deletetask}
                />
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

ReactDOM.render(<Final />, document.getElementById("root"));
