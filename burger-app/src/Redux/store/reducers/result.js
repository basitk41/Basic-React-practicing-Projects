import * as actions from "../actions/ActionsTypes";
const initialState = {
  result: [],
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.RESULT:
      return {
        ...state,
        result: state.result.concat({ id: new Date(), value: action.counter }),
      };
    case actions.DELETE:
      //   const newArray = [...state.result];
      //   newArray.splice(action.id, 1);
      const newArray = state.result.filter((result) => result.id !== action.id);
      return {
        ...state,
        result: newArray,
      };
    default:
      return state;
  }
};
export default rootReducer;
