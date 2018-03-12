import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const style = {
  fontSize: "1.8rem",
  fontFamily: "Gloria Hallelujah",
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
  },
  imgStyle: {
    maxWidth: 70,
    marginBottom: -20
  }
}

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <h1 style={style.styleHeader}><strong>Errands</strong>NOW!</h1>
        <div style={style}>
          <p><img style={style.imgStyle} src={require("../../images/check.svg")} alt="check" /> Life is busy.</p>
          <p><img style={style.imgStyle} src={require("../../images/check.svg")} alt="check" /> We can help.</p>
          <p><img style={style.imgStyle} src={require("../../images/check.svg")} alt="check" /> Give us your errand today.</p>
          <Link to="/login" style={style.buttonStyle} className="mdc-button mdc-button--raised">Log In</Link>
          <Link to="/newuser" style={style.buttonStyle} className="mdc-button mdc-button--raised">New User</Link>
          <p>Runners Page</p>
          <Link to="/runner" style={style.buttonStyle} className="mdc-button mdc-button--raised">Runners</Link>
        </div>
      </div>
    );
  }
}
