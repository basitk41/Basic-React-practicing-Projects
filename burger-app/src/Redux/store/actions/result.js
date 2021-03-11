import * as actionType from "./ActionsTypes";
export const saveResult = (counter) => {
  return {
    type: actionType.RESULT,
    counter,
  };
};
export const result = (counter) => {
  return (dispatch, getState) => {
    setTimeout(() => {
      // issue using this. if we have some synchronous code that will change the old state
      // better to pass data in aurgments
      const oldState = getState().ctr.counter;
      console.log("oldState");
      console.log(oldState);
      console.log("counter");
      console.log(counter);
      dispatch(saveResult(counter));
    }, 2000);
  };
};
export const deleteResult = (id) => {
  return {
    type: actionType.DELETE,
    id,
  };
};
