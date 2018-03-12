import React from "react";
import { Link } from "react-router-dom";

const style = {
  fontSize: "2rem",
  textAlign: "center",
  buttonStyle: {
    backgroundColor: "#fff",
    marginRight: 5,
    color: "#000"
  },
  styleHeader: {
    fontSize: "6rem",
    fontFamily: "Fugaz One",
    marginTop: 20,
    textShadow: "2px 2px #ccc"
  }
}


export default class Runner extends React.Component {
  render() {
    return(
      <div>
        <h1 style={style.styleHeader}><strong>Errands</strong>NOW! Runners</h1>
        <div style={style}>
          <p>Want to be an errand runner?</p>
          <Link to="/runner/newrunner" style={style.buttonStyle} className="mdc-button mdc-button--raised">New User</Link>
          <p>Already an errand runner? Log in.</p>
          <Link to="/runner/login" style={style.buttonStyle} className="mdc-button mdc-button--raised">Log in</Link>
        </div>
      </div>
    );
  }
}
