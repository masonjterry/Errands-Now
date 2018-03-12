import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const style = {
  fontSize: "2rem",
  fontFamily: "Gloria Hallelujah",
  textAlign: "center",
  buttonStyle: {
    backgroundColor: "#fff",
    marginRight: 5,
    color: "#000"
  },
  styleHeader: {
    fontSize: "6rem",
    // textAlign: "center"
    fontFamily: "Lobster",
    marginTop: 20
  }
}

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <h1 style={style.styleHeader}><strong>Errands</strong>Now!</h1>
        <div style={style}>
          <p>Life is busy.</p>
          <p>We can help.</p>
          <p>Give us your errand today.</p>
          <Link to="/login" style={style.buttonStyle} className="mdc-button mdc-button--raised">Log In</Link>
          <Link to="/newuser" style={style.buttonStyle} className="mdc-button mdc-button--raised">New User</Link>
          <p>Runners Page</p>
          <Link to="/runner" style={style.buttonStyle} className="mdc-button mdc-button--raised">Runners</Link>
        </div>
      </div>
    );
  }
}
