import React, { Component } from 'react';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import store from "./store";
import Login from "./components/login/Login";
import Edit from "./components/edit/Edit";
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <Router>
          <div className="App">
            <Switch>
              <Route path="/" exact component={ Login }/>
              <Route path="/edit/:id" exact component={ Edit }/>
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
