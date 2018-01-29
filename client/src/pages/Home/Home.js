import React from "react";
import { Link } from "react-router-dom";

const style = {
  margin: 20,
  buttonStyle: {
    backgroundColor: "#64B5F6",
    marginRight: 5
  },
  headerStyle: {
    textAlign: "center"
  }
}

export default class Home extends React.Component {
  render() {
    return (
      <div style={style}>
      <h1 style={style.headerStyle}>Welcome to ErrandsNow!</h1>
      <p style={style.headerStyle}>We know life is busy and your list of things to do keeps getting longer. Sign up today and we can help make your list smaller!</p>
      <Link to="/login" style={style.buttonStyle} className="mdc-button mdc-button--raised">Login</Link>
      <Link to="/newuser" style={style.buttonStyle} className="mdc-button mdc-button--raised">New User</Link>
      </div>
    );
  }
}
