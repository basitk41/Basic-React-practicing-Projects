import React from "react";
import Input from "../input/Input";
const Form = ({ state, handleChange, handleInsert, handleUpdate, title }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>Name:</p>
      <Input handleChange={handleChange} value={state.name} name="name" />
      <br />
      <p>Age:</p>
      <Input handleChange={handleChange} value={state.age} name="age" />
      <br />
      {state.id === 0 ? (
        <button
          onClick={handleInsert}
          style={{
            backgroundColor: "#189814",
            borderRadius: "3px",
            color: "white",
          }}
        >
          Insert
        </button>
      ) : (
        <button
          onClick={handleUpdate}
          style={{
            backgroundColor: "#0FCDBF",
            borderRadius: "3px",
            color: "white",
          }}
        >
          Update
        </button>
      )}
    </div>
  );
};

export default Form;
