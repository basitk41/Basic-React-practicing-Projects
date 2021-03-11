import React, { Component } from "react";
import Child from "./Child";
import Effect from "./useEffect";
class Base extends Component {
  state = {
    baseMessage: "Base Message",
    childMessage: "Child Message",
    effectMessage: "Effect Message",
    show: false,
    count: 0,
  };
  getSnapshotBeforeUpdate() {
    console.log("getSnapshotBeforeUpdate");
    return null;
  }
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    return state;
  }
  componentDidCatch() {
    console.log("componentDidCatch");
    /*
    A component becomes an error boundary if it defines the componentDidCatch 
    method. In this method, this.setState can be called and used to catch an 
    unhandled JavaScript error in a child component tree and display a fallback 
    UI instead of the component that crashed. These errors are caught during 
    rendering, in lifecycle methods, and in constructors of the whole tree below them.

    This is to ensure that an error in a child component does not break the whole app.

    It is important to note that this method only catches errors in child 
    components and not in the component itself.
    */
  }
  componentDidMount() {
    console.log("componentDidMount");
    /* 
    It is called once in the component life cycle and it signals 
    that the component and all its sub-components have rendered properly.
    This is the best place to make API calls since, at this point, 
    the component has been mounted and is available to the DOM. 
    Generally, componentDidMount is a good place to do all the setup 
    you couldn’t have done without the DOM.
   */
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
    /*
    componentWillUnmount is called right before a component is removed 
    from the DOM. This is where you can perform any cleanups that should 
    be done such as invalidating timers, canceling network requests, 
    removing event listeners or canceling any subscriptions made 
    in componentDidMount.
    */
  }
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
    /* 
    It returns either a true or false value. 
    If it returns true, the component will 
    go ahead and do what it always does, 
    re-render the component. If it returns 
    false then the component will not update. 
    Note that this does not prevent child components 
    from re-rendering when their state changes.

    The best way to use this method is to 
    have it return false and hence the component will 
    not update under certain conditions. If those conditions 
    are met, then the component does not update.
    */
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
    /* 
    componentDidUpdate is the best place to perform 
    an interaction with a non-React environment like 
    the browser or making HTTP requests. This 
    should be done as long as you compare the 
    current props to the previous props to 
    avoid unnecessary network requests.
    */
  }
  showMessage = () => {
    console.log("showMessage");
    this.setState({ show: true });
  };
  hideMessage = () => {
    console.log("hideMessage");
    this.setState({ show: false });
  };
  changeBaseMessage = () => {
    this.setState({ baseMessage: "Base Message Changed." });
  };
  render() {
    console.log("Render");
    return (
      <div className="container">
        <br />
        <button onClick={this.showMessage} className="btn btn-info">
          show message
        </button>{" "}
        <button onClick={this.hideMessage} className="btn btn-primary">
          hide message
        </button>{" "}
        <button onClick={this.changeBaseMessage} className="btn btn-primary">
          Change Base message
        </button>
        <h1>Base class</h1>
        <h2>Base Counter:{this.state.count}</h2>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          inc
        </button>
        <h2>{this.state.show ? this.state.baseMessage : null}</h2>
        <hr />
        {this.state.show ? <Child message={this.state.childMessage} /> : null}
        <hr />
        {this.state.show ? (
          <Effect
            counter={this.state.count}
            message={this.state.effectMessage}
          />
        ) : null}
      </div>
    );
  }
}

export default Base;
