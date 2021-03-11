import { act } from "@testing-library/react";
import * as actions from "./actions";
const initialState = {
  persons: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD:
      return {
        persons: state.persons.concat({ name: action.name, age: action.age }),
      };
    case actions.REMOVE:
      const array = [...state.persons];
      array.splice(action.index, 1);
      return {
        persons: array,
      };

    default:
      return state;
  }
};
export default reducer;
