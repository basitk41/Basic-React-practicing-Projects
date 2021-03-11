import React, { Component } from "react";
import Axios from "axios";
class Data extends Component {
  state = {
    data: [],
  };
  componentDidMount() {
    Axios.get("https://jsonplaceholder.typicode.com/todos").then((data) => {
      this.setState({ data: data.data });
    });
  }
  render() {
    return (
      <div className="container">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>TITLE</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Data;
