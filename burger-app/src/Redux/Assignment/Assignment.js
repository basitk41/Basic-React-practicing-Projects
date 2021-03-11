import React, { Component } from "react";
import Persons from "./containers/Persons";

import { createStore } from "redux";
import { Provider } from "react-redux";
import Reducer from "./store/reducer";

const store = createStore(Reducer);
class App extends Component {
  render() {
    return (
      <div className="App">
        <ol>
          <li>
            Turn this app into one which does NOT use local state (in
            components) but instead uses Redux
          </li>
        </ol>
        <Provider store={store}>
          <Persons />
        </Provider>
      </div>
    );
  }
}

export default App;
