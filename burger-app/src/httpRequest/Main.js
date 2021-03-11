import React, { Component } from "react";
import Blog from "./containers/Blog/Blog";
import { BrowserRouter } from "react-router-dom";
class Main extends Component {
  state = {};
  render() {
    return (
      //   <BrowserRouter basename="myApp">
      <BrowserRouter>
        <Blog></Blog>
      </BrowserRouter>
    );
  }
}

export default Main;
