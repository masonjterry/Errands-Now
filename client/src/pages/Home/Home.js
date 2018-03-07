import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";

const style = {
  textAlign: "center",
  headerStyle: {
    fontSize: "2rem",
    marginTop: 200
  },
  buttonStyle: {
    backgroundColor: "#fff",
    marginRight: 5,
    color: "#000"
  }
}

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <div style={style}>
          <p style={style.headerStyle}>We know life is busy and your list of things to do keeps getting longer.</p>
          <p>Sign up today and we can help make your list smaller!</p>
          <Link to="/login" style={style.buttonStyle} className="mdc-button mdc-button--raised">Log In</Link>
          <Link to="/newuser" style={style.buttonStyle} className="mdc-button mdc-button--raised">New User</Link>
          <p>Are you a runner? Or do you want to be?</p>
          <Link to="/runner" style={style.buttonStyle} className="mdc-button mdc-button--raised">Runner Log In</Link>
        </div>
      </div>
    );
  }
}
