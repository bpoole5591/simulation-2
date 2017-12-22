<<<<<<< HEAD
import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import WizardView from './src/components/wizard/step1/step1'
=======
import React, { Component } from "react";

// Modules
import { Switch, BrowserRouter as Route } from "react-router-dom";

// Components

import login from "./components/login/login";
import dashboard from "./components/dashboard/dashboard";

// CSS
import "./App.css";
>>>>>>> 96a25eba0a64b13b8fde24acdc0369a93fae801f

class App extends Component {
  render() {
    return (
      <div className="App">
<<<<<<< HEAD
        <header className="App-header">
       
        <h1 className="App-title">Houser Dashboard</h1>
      </header>

      <div className="container">
            
            <div class="leftpane"><h1>1</h1></div>
            <div class="middlepane">2</div>
           



</div>

=======
        <Switch>
          <Route exact path="/login" component={login} />
          <Route path="/" component={dashboard} />
        </Switch>
>>>>>>> 96a25eba0a64b13b8fde24acdc0369a93fae801f
      </div>
    );
  }
}

export default App;