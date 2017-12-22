import React, { Component } from "react";

// Modules
import { Switch, BrowserRouter as Route } from "react-router-dom";

// Components

import login from "./components/login/login";
import dashboard from "./components/dashboard/dashboard";

// CSS
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/login" component={login} />
          <Route path="/" component={dashboard} />
        </Switch>
      </div>
    );
  }
}

export default App;
