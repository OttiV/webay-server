import React, { Component } from "react";
import store from "./store";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import AdsListContainer from "./components/AdsListContainer";
import AdDetailsContainer from "./components/AdDetailsContainer";
// import AdFormContainer from "./components/AdFormContainer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Route path="/" exact component={AdsListContainer} />
          <Route path="/ads/:id" component={AdDetailsContainer} />
          {/* <Route path="/login" component={AdFormContainer} /> */}
        </div>
      </Provider>
    );
  }
}

export default App;
