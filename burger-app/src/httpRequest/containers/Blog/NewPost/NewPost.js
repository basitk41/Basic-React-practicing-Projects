import React, { Component } from "react";
import "./NewPost.css";
import Axios from "axios";
import { Redirect } from "react-router-dom";

class NewPost extends Component {
  state = {
    title: "",
    content: "",
    author: "",
    submitted: false,
  };
  componentDidMount() {
    // if unauth => this.props.history.replace('/posts');
    console.log(this.props);
  }
  postDataHandler = () => {
    const data = {
      title: this.state.title,
      body: this.state.content,
      author: this.state.author,
    };
    Axios.post("https://jsonplaceholder.typicode.com/posts/", data).then(
      (response) => {
        console.log(response);
        //push bring back to the previous page by clicking back not replacing path
        //this.props.history.push("/posts");

        //while replace and redirect replace path ... alternative of redirect
        this.props.history.replace("/posts");

        //for redirect conditionally
        //this.setState({ submitted: true });
      }
    );
  };
  render() {
    return (
      <div className="NewPost">
        {this.state.submitted && <Redirect to="/posts" />}
        <h1>Add a Post</h1>
        <label>Title</label>
        <input
          type="text"
          value={this.state.title}
          onChange={(event) => this.setState({ title: event.target.value })}
        />
        <label>Content</label>
        <textarea
          rows="4"
          value={this.state.content}
          onChange={(event) => this.setState({ content: event.target.value })}
        />
        <label>Author</label>
        <select
          value={this.state.author}
          onChange={(event) => this.setState({ author: event.target.value })}
        >
          {" "}
          <option value="" defaultValue>
            Please select Author
          </option>
          <option value="Max">Max</option>
          <option value="Manu">Manu</option>
        </select>
        <button onClick={this.postDataHandler}>Add Post</button>
      </div>
    );
  }
}

export default NewPost;
