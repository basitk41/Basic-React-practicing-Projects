import React from "react";
const Table = ({ data, handleState, handleDelete }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>AGE</th>
          <th>ACTION</th>
        </tr>
      </thead>
      <tbody>
        {data.map((a) => {
          return (
            <tr key={a.id}>
              <td>{a.id}</td>
              <td>{a.name}</td>
              <td>{a.age}</td>
              <td>
                <button
                  onClick={() => handleState(a.id)}
                  style={{
                    backgroundColor: "#0FCDBF",
                    borderRadius: "3px",
                    color: "white",
                  }}
                >
                  Update
                </button>
                &nbsp;
                <button
                  onClick={() => handleDelete(a.id)}
                  style={{
                    backgroundColor: "#D7300C",
                    borderRadius: "3px",
                    color: "white",
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
