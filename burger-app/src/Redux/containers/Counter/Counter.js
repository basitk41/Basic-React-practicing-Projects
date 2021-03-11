import React, { Component } from "react";
import { connect } from "react-redux";
import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
//import * as actions from "../../store/Actions";
import * as actionType from "../../store/actions/index";

class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.counter} />
        <CounterControl label="Increment" clicked={this.props.inc} />
        <CounterControl label="Decrement" clicked={this.props.dec} />
        <CounterControl label="Add 5" clicked={this.props.add} />
        <CounterControl label="Subtract 5" clicked={this.props.sub} />
        <button onClick={() => this.props.res(this.props.counter)}>
          Store Result
        </button>
        <ul>
          {this.props.result.map((result) => {
            return (
              <li
                key={result.id}
                onClick={() => this.props.del(result.id)}
                style={{ cursor: "pointer" }}
              >
                {" "}
                {result.value}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    counter: state.ctr.counter,
    result: state.res.result,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    inc: () => dispatch(actionType.increment()),
    dec: () => dispatch(actionType.decrement()),
    add: () => dispatch(actionType.add(5)),
    sub: () => dispatch(actionType.sub(5)),
    res: (counter) => dispatch(actionType.result(counter)),
    del: (id) => dispatch(actionType.deleteResult(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
