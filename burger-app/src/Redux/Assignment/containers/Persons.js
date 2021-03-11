import React, { Component } from "react";

import Person from "../components/Person/Person";
import AddPerson from "../components/AddPerson/AddPerson";
import { connect } from "react-redux";
import * as actions from "../store/actions";

class Persons extends Component {
  render() {
    return (
      <div>
        <AddPerson addPerson={this.props.add} />
        {this.props.persons.map((person, i) => {
          return (
            <Person
              key={i}
              person={person}
              remove={() => this.props.remove(i)}
            />
          );
        })}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    persons: state.persons,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    add: (name, age) => dispatch({ type: actions.ADD, name, age }),
    remove: (index) => dispatch({ type: actions.REMOVE, index }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
