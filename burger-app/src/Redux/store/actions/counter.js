import * as actionType from "./ActionsTypes";
export const increment = () => {
  return {
    type: actionType.INCREMENT,
  };
};
export const decrement = () => {
  return {
    type: actionType.DECREMENT,
  };
};
export const add = (value) => {
  return {
    type: actionType.ADD,
    value,
  };
};
export const sub = (value) => {
  return {
    type: actionType.SUB,
    value,
  };
};
