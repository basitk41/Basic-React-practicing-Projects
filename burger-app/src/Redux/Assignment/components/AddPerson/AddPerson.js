import React, { useState } from "react";

import "./AddPerson.css";

const AddPerson = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  return (
    <div className="AddPerson">
      <input
        type="text"
        value={name}
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      ></input>
      <br />
      <br />
      <input
        type="text"
        value={age}
        placeholder="Age"
        onChange={(e) => setAge(e.target.value)}
      ></input>
      <br />
      <br />
      <button onClick={() => props.addPerson(name, age)}>Add Person</button>
    </div>
  );
};

export default AddPerson;
