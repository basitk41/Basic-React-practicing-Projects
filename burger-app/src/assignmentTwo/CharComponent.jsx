import React from "react";
const Char = ({ data, handleDelete }) => {
  const style = {
    display: "inline-block",
    padding: "16px",
    textAlign: "center",
    margin: "16px",
    border: "1px solid black",
  };
  return (
    <div>
      {data.map((a, index) => {
        return (
          <div onClick={() => handleDelete(index)} key={index} style={style}>
            {a}
          </div>
        );
      })}
    </div>
  );
};

export default Char;
