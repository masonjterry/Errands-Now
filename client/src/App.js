import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Nav from "./pages/Nav";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NewUser from "./pages/NewUser";
import AddErrands from "./pages/Errands";

const App = () =>
  <Router>
    <div>
      <Nav />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/newuser" component={NewUser} />
      <Route exact path="/adderrand" component={AddErrands} />
    </Switch>
  </div>
  </Router>


export default App;
