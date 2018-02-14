import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Login from "./pages/Login";
import NewUser from "./pages/NewUser";
import AddErrands from "./pages/Errands";
import Runner from "./pages/Runner";
import RunnerLogin from "./pages/RunnerLogin";
import NewRunner from "./pages/NewRunner";
import RunnerErrands from "./pages/RunnerErrands";
import ErrandsList from "./pages/ErrandsList";

export default class App extends React.Component {
  render() {
    return(
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/newuser" component={NewUser} />
          <Route exact path="/adderrand" component={AddErrands} />
          <Route exact path="/runner" component={Runner} />
          <Route exact path="/runner/errands" component={ErrandsList} />
          <Route exact path="/runner/login" component={RunnerLogin} />
          <Route exact path="/runner/newrunner" component={NewRunner} />
          <Route exact path="/runner/errands/:myerrands" component={RunnerErrands} />
        </Switch>
      </Router>
    );
  }
}
