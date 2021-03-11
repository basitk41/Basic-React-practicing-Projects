import React from "react";
const Validation = ({ data }) => {
  return (
    <div>
      {data === 0 ? null : data < 5 ? (
        <p>Text too short.</p>
      ) : (
        <p>Text long enough.</p>
      )}
    </div>
  );
};

export default Validation;
