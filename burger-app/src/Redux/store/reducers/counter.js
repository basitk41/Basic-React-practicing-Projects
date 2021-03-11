import * as actions from "../actions/ActionsTypes";
const initialState = {
  counter: 1,
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };
    // return updatedObject(state,{counter: state.counter + 1});
    case actions.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case actions.ADD:
      return {
        ...state,
        counter: state.counter + action.value,
      };
    case actions.SUB:
      return {
        ...state,
        counter: state.counter - action.value,
      };
    default:
      return state;
  }
};
export default rootReducer;
