import React from "react";

import "./Person.css";

const person = ({ person, remove }) => (
  <div className="Person" onClick={remove}>
    <h1>{person.name}</h1>
    <p>Age: {person.age}</p>
  </div>
);

export default person;
