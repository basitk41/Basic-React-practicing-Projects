import React, { Component } from "react";
import anotherForm from "./hoc/withAnotherForm";
import PropTypes from "prop-types";
import msgContext from "./context/context";

// PureComponent instead of shouldComponentUpdate()....
class Child extends Component {
  state = {};
  // alternate of Consumer
  static contextType = msgContext;

  refElement = React.createRef();
  getSnapshotBeforeUpdate() {
    console.log("Child getSnapshotBeforeUpdate");
    return null;
  }
  static getDerivedStateFromProps(props, state) {
    console.log("Child getDerivedStateFromProps");
    return state;
  }
  componentDidCatch() {
    console.log("Child componentDidCatch");
    /*
    A component becomes an error boundary if it defines the componentDidCatch 
    method. In this method, this.setState can be called and used to catch an 
    unhandled JavaScript error in a child component tree and display a fallback 
    UI instead of the component that crashed. These errors are caught during 
    rendering, in lifecycle methods, and in constructors of the whole tree below them.

    This is to ensure that an error in a child component does not break the whole app.

    It is important to note that this method only catches errors in child 
    componimport anotherForm from './hoc/withAnotherForm';
ents and nimport msgContext from './context/context';
ot in the component itself.
    */
  }
  componentDidMount() {
    console.log("Child componentDidMount");
    this.refElement.current.focus();
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
    console.log("Child componentWillUnmount");
    /*
    componentWillUnmount is called right before a component is removed 
    from the DOM. This is where you can perform any cleanups that should 
    be done such as invalidating timers, canceling network requests, 
    removing event listeners or canceling any subscriptions made 
    in componentDidMount.
    */
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("Child shouldComponentUpdate");
    if (nextProps.message !== this.props.message) return true;
    else return false;
    //return true;
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
    console.log("Child componentDidUpdate");
    /* 
    componentDidUpdate is the best place to perform 
    an interaction with a non-React environment like 
    the browser or making HTTP requests. This 
    should be done as long as you compare the 
    current props to the previous props to 
    avoid unnecessary network requests.
    */
  }
  render() {
    console.log("Child Render");
    return (
      <div>
        <h1>Child class</h1>
        <h2>{this.props.message}</h2>
        {/* <msgContext.Consumer>
          {(context) => {
            return <p>{context.msgTwo}</p>;
          }}
        </msgContext.Consumer> */}

        {/* alternate way of Consumer */}
        <p>{this.context.msgTwo}</p>

        <input ref={this.refElement} type="text" />
      </div>
    );
  }
}
Child.propTypes = {
  message: PropTypes.string,
};
export default anotherForm(Child);
