import React from "react";
//import { withRouter } from "react-router-dom";
//recieve history,search,match from which this rendering inside.

import "./Post.css";

const post = (props) => {
  return (
    <article className="Post" onClick={props.clicked}>
      <h4>{props.title}</h4>
      <div className="Info">
        <div className="Author">{props.author}</div>
      </div>
    </article>
  );
};

export default post;
//export default withRouter(post);
