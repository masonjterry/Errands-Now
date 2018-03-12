import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";
import "./style.css";

const style = {
  fontSize: "3rem",
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

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <h1 style={style.styleHeader}><strong>ERRANDS</strong>Now!</h1>
        <div style={style}>
          <p>Life is busy</p>
          <p>We can help</p>
          <p>Sign up today</p>
          <Link to="/login" style={style.buttonStyle} className="mdc-button mdc-button--raised">Log In</Link>
          <Link to="/newuser" style={style.buttonStyle} className="mdc-button mdc-button--raised">New User</Link>
        </div>
      </div>
    );
  }
}
