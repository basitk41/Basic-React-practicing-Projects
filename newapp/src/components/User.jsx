import React, { useState, useEffect } from "react";
const User = ({ id }) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((user) => user.json())
      .then((user) => setUser(user));
  }, [id]);
  const divStyle = {
    border: "3px solid pink",
    marginTop: "5px",
    padding: "5px",
    borderRadius: "5px",
  };
  return (
    <div style={divStyle}>
      <h3 className="text text-primary" style={{ textAlign: "center" }}>
        Selected User
      </h3>
      <h6>ID: {user.id}</h6>
      <h6>NAME: {user.name}</h6>
      <h6>EMAIL: {user.email}</h6>
      <h6>PHONE: {user.phone}</h6>
    </div>
  );
};

export default User;
