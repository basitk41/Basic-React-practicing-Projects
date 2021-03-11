import React, { useState } from "react";
import Char from "./CharComponent";
import Validation from "./ValidationComponent";
import Radium from "radium";
import "./App.css";

const App = (props) => {
  const [data, setData] = useState([]);
  const [style, setStyle] = useState({
    ":hover": {
      width: "400px",
      height: "40px",
      backgroundColor: "lightgreen",
      borderRadius: "3%",
    },
    "@media (max-width:500px)": {
      backgroundColor: "pink",
    },
  });
  const handleChange = (e) => {
    const input = e.target.value;
    const org = [];
    if (input) {
      for (let value of input) {
        org.push(value);
      }
    } else {
      console.log("empty");
    }
    setData(org);
  };
  const handleDelete = (index) => {
    const org = [...data];
    org.splice(index, 1);
    setData(org);
  };

  const handleFocus = () => {
    setStyle({
      width: "400px",
      height: "40px",
      ":hover": {
        width: "400px",
        height: "40px",
        backgroundColor: "lightgray",
      },
    });
  };
  const handleBlur = () => {
    setStyle({
      ":hover": {
        width: "400px",
        height: "40px",
        backgroundColor: "lightgreen",
      },
    });
  };

  const joined = data.join("");

  return (
    <div className="container">
      <br />
      <p>Character Length:{data.length}</p>
      <input
        onChange={handleChange}
        style={style}
        value={joined}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <Validation data={data.length} />
      <Char handleDelete={handleDelete} data={data} />
    </div>
  );
};

export default Radium(App);
