import React from "react";
const Input = ({ handleChange, name, value }) => {
  return (
    <div>
      <input type="text" value={value} onChange={handleChange} name={name} />
    </div>
  );
};

export default Input;
