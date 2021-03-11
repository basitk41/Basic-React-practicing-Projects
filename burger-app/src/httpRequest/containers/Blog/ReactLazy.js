import React, { Component, Suspense } from "react";
import "./Blog.css";
import Posts from "./Posts/Posts";

import { Route, NavLink, Switch, Redirect } from "react-router-dom";
//import FullPost from "./FullPost/FullPost";

//import NewPost from "../Blog/NewPost/NewPost";

// import AsyncComponent from "../../hoc/asyncComponent";
// const AsyncNewPost = AsyncComponent(() => {
//   return import("../Blog/NewPost/NewPost");
// });
const LazyNewPost = React.lazy(() => import("../Blog/NewPost/NewPost"));

class ReactLazy extends Component {
  state = {
    auth: false,
  };
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                {/* <NavLink
                  to="/"
                  exact
                  activeClassName="myActive"
                  style={{
                    color: "blue",
                    backgroundColor: "pink",
                  }}
                > */}
                <NavLink to="/posts" exact>
                  Posts
                </NavLink>
              </li>
              <li>
                {/* <Link to="/new-post">New Post</Link> */}
                <NavLink
                  to={{
                    pathname: "/new-post",
                    hash: "#Tabah",
                    search: "?GhareebTabah",
                  }}
                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          {/* <Route path="/" exact render={() => <Posts />} /> */}
          {/* {this.state.auth ? (
            <Route path="/new-post" component={NewPost} />
          ) : null} */}
          <Route
            path="/new-post"
            render={() => (
              <Suspense fallback={<div>loading...</div>}>
                <LazyNewPost />
              </Suspense>
            )}
          />
          <Route path="/posts" component={Posts} />
          <Route render={() => <h2>Not found</h2>} />
          {/* <Redirect from="/" to="/posts" /> */}
          {/* <Route path="/posts/:id" component={FullPost} /> */}
          {/* <Route path="/:id" component={FullPost} /> */}
        </Switch>
      </div>
    );
  }
}

export default ReactLazy;
