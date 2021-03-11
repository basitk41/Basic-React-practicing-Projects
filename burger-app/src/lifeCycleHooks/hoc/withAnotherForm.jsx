import React from "react";
const anotherForm = (Component) => {
  return (props) => (
    <div>
      <Component {...props} />
    </div>
  );
};

export default anotherForm;
