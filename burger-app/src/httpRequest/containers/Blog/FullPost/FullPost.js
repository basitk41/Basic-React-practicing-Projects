import React, { Component } from "react";
import Axios from "axios";
import "./FullPost.css";
// import ownAxios from '../../axios';

class FullPost extends Component {
  state = {
    post: null,
  };
  componentDidUpdate() {
    const id = this.props.match.params.id;
    if (id) {
      if (!this.state.post || (this.state.post && this.state.post.id !== +id)) {
        Axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(
          ({ data: post }) => {
            this.setState({ post });
          }
        );
      }
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    Axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(
      ({ data: post }) => {
        this.setState({ post });
      }
    );
  }

  deleteHandler = () => {
    const id = this.props.match.params.id;
    Axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`).then(
      (response) => {
        console.log(response);
      }
    );
  };
  render() {
    const { id } = this.props.match.params;
    let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;
    if (id) {
      post = <p style={{ textAlign: "center" }}>Loading...</p>;
    }
    if (this.state.post) {
      post = (
        <div className="FullPost">
          <h1>{this.state.post.title}</h1>
          <p>{this.state.post.body}</p>
          <div className="Edit">
            <button className="Delete" onClick={this.deleteHandler}>
              Delete
            </button>
          </div>
        </div>
      );
    }
    return post;
  }
}

export default FullPost;
