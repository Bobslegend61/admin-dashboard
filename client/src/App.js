import React, { Component } from 'react';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import store from "./store";
import Login from "./components/login/Login";
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <Router>
          <div className="App">
            <Switch>
              <Route path="/" exact component={ Login }/>
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
