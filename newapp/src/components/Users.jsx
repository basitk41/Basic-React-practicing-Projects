import React, { useState, useEffect } from "react";
import User from "./User";
const Users = (props) => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((data) => setUsers(data));
  }, []);
  const handleDelete = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };
  const tdStyle = {
    cursor: "pointer",
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-8">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {users.map(({ id, name }) => {
                return (
                  <tr key={id}>
                    <td>{id}</td>
                    <td
                      className="text text-info"
                      style={tdStyle}
                      onClick={() => setSelectedUser(id)}
                    >
                      {name}
                    </td>
                    <td>
                      <button
                        onClick={() => handleDelete(id)}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="col-sm-4">
          {/* {!!selectedUser && <User id={selectedUser} />} */}
          {selectedUser ? <User id={selectedUser} /> : null}
        </div>
      </div>
    </div>
  );
};

export default Users;
