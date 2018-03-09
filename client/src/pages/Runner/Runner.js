import React from "react";
import RunnerNav from "../Nav/RunnerNav";
import { Link } from "react-router-dom";

const style = {
  margin: "20px auto",
  textAlign: "center",
  border: "2px solid gray",
  borderRadius: 15,
  backgroundColor: "rgba(250, 250, 250, 1)",
  maxWidth: 600,
  padding: 20,
  buttonStyle: {
    backgroundColor: "#FFF176",
    marginRight: 5,
    color: "#000"
  }
}

export default class Runner extends React.Component {
  render() {
    return(
      <div>
        <RunnerNav />
          <div style={style}>
            <h1>ErrandsNow! Runners</h1>
            <p>Do you want to be a runner? Create an account today.</p>
            <Link to="/runner/newrunner" style={style.buttonStyle} className="mdc-button mdc-button--raised">New User</Link>
            <p>Already have an account? Click to log in.</p>
            <Link to="/runner/login" style={style.buttonStyle} className="mdc-button mdc-button--raised">Log in</Link>
          </div>
      </div>
    );
  }
}
