import React, { Component } from "react";

// Modules
import { Switch, BrowserRouter as Route } from "react-router-dom";

// Components

import Login from "./components/login/login";
import Dashboard from "./components/dashboard/dashboard";

// CSS
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="./login" component={Login} />
          <Route path="/" component={Dashboard} />
        </Switch>
      </div>
    );
  }
}

export default App;
