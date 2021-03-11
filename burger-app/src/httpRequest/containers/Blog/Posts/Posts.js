import React, { Component } from "react";
import Post from "../../../components/Post/Post";
import Axios from "axios";
import "./Posts.css";
import { Link, Route } from "react-router-dom";
import FullPost from "../FullPost/FullPost";
class Posts extends Component {
  state = {
    posts: [],
    selectedPostId: null,
  };
  componentDidMount() {
    console.log(this.props);
    Axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(({ data: posts }) => {
        const slicedPosts = posts.slice(0, 4);
        const updatedPosts = slicedPosts.map((post) => {
          return {
            ...post,
            author: "Basit",
          };
        });
        this.setState({ posts: updatedPosts });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ error: true });
      });
  }

  selectedPostHandler = (id) => {
    // this will work without the link tag and by button tag
    // this.props.history.push({ pathname: "/" + id });
    // this.props.history.push("/" + id);
  };
  render() {
    return (
      <div>
        <section className="Posts">
          {this.state.posts.map((post) => {
            return (
              // <Link key={post.id} to={"/posts/" + post.id}>
              <Link key={post.id} to={"/posts/" + post.id}>
                <Post
                  title={post.title}
                  author={post.author}
                  clicked={() => this.selectedPostHandler(post.id)}
                />
              </Link>
            );
          })}
        </section>
        <Route path="/posts/:id" component={FullPost} />
      </div>
    );
  }
}

export default Posts;
