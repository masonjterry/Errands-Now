import React from "react";
import { Link } from "react-router-dom";

const style = {
  fontSize: "2.5rem",
  margin: "100px auto",
  textAlign: "center",
  buttonStyle: {
    backgroundColor: "#fff",
    marginRight: 5,
    color: "#000"
  },
  styleHeader: {
    fontSize: "4rem",
    textAlign: "center"
  }
}


export default class Runner extends React.Component {
  render() {
    return(
      <div>
        <h1 style={style.styleHeader}><strong>ERRANDS</strong>Now! Runners</h1>
        <div style={style}>
          <p>Want to be a runner?</p>
          <Link to="/runner/newrunner" style={style.buttonStyle} className="mdc-button mdc-button--raised">New User</Link>
          <p>Already a runner? Log in.</p>
          <Link to="/runner/login" style={style.buttonStyle} className="mdc-button mdc-button--raised">Log in</Link>
        </div>
      </div>
    );
  }
}
