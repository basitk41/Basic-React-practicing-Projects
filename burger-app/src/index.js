import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App from "./containers/App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
//import App from "./assignmentTwo/App";
import { StyleRoot } from "radium";
//import Output from "./Components/output/Output";
//import Base from "./lifeCycleHooks/Base";
import msgContext from "./lifeCycleHooks/context/context";
//import Axios from "axios";
//import Main from "./httpRequest/Main";
////////////////////////////////////
import Counter from "./Redux/containers/Counter/Counter";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import Assignment from "./Redux/Assignment/Assignment";
//Redux Store
//reducers
//import reducer from "./Redux/store/Reducer";
import counterReducer from "./Redux/store/reducers/counter";
import resultReducer from "./Redux/store/reducers/result";
//combine Reducers
const rootReducer = combineReducers({
  ctr: counterReducer,
  res: resultReducer,
});
// middleware

const logger = (store) => {
  return (next) => {
    return (action) => {
      console.log("Middleware dispatching", action);
      const result = next(action);
      console.log("Middleware next state", store.getState());
      return result;
    };
  };
};
//redux dev tools
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//store
const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(logger, thunk))
);
//subscription
store.subscribe(() => {
  // console.log("Sub", store.getState());
});
//dispatching
// store.dispatch({ type: "INC" });
// store.dispatch({ type: "ADD", value: 5 });
////////////////////////////////////

// Axios.interceptors.request.use(
//   (request) => {
//     console.log(request);
//     return request;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );
// Axios.interceptors.response.use(
//   (response) => {
//     console.log(response);
//     return response;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

ReactDOM.render(
  <React.StrictMode>
    {/* Redux s */}
    <Provider store={store}>
      <Counter />
    </Provider>

    {/* <Assignment /> */}

    {/* Redux e */}
    {/* <Main /> */}

    <StyleRoot>
      {/* <App /> */}
      {/* <Output title="crud operation" /> */}

      <msgContext.Provider
        value={{ msgOne: "For useEffect", msgTwo: "For Child" }}
      >
        {/* <Base msgOne="Give this to useEffect Component" msgTwo="for child" /> */}
        {/* <Base /> */}
      </msgContext.Provider>
    </StyleRoot>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
