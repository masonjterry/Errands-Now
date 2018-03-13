import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const style = {
  maxWidth: 500,
  fontSize: "1.8rem",
  margin: "0 auto",
  fontFamily: "Gloria Hallelujah",
  buttonStyle: {
    backgroundColor: "#fff",
    marginRight: 5,
    color: "#000",
    fontFamily: "serif"
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
  },
  styleRunner: {
    backgroundColor: "#009E4E",
    marginRight: 5,
    color: "#fff",
    
  },
  divStyle: {
    textAlign: "right"
  }
}

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <h1 style={style.styleHeader}><strong>Errands</strong>NOW</h1>
        <div style={style}>
          <p><img style={style.imgStyle} src={require("../../images/check.svg")} alt="check" /> Life is busy.</p>
          <p><img style={style.imgStyle} src={require("../../images/check.svg")} alt="check" /> We can help.</p>
          <p><img style={style.imgStyle} src={require("../../images/check.svg")} alt="check" /> Give us your errand today.</p>
          <Link to="/login" style={style.buttonStyle} className="mdc-button mdc-button--raised">Log In</Link>
          <Link to="/newuser" style={style.buttonStyle} className="mdc-button mdc-button--raised">New User</Link>
        </div>
        <div style={style.divStyle}>
          <br />
          <br />
          <Link to="/runner" style={style.styleRunner} className="mdc-button mdc-button--raised">Errand Runners</Link>
        </div>
      </div>
    );
  }
}
