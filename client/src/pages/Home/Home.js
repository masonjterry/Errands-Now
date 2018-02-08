import React from "react";
import { Link } from "react-router-dom";

const style = {
  margin: "20px auto",
  textAlign: "center",
  border: "2px solid gray",
  borderRadius: 150,
  backgroundColor: "rgba(250, 250, 250, 1)",
  maxWidth: 600,
  padding: 20,
  buttonStyle: {
    backgroundColor: "#64B5F6",
    marginRight: 5
  }
}

export default class Home extends React.Component {
  render() {
    return (
      <div style={style}>
      <h1>Welcome to ErrandsNow!</h1>
      <p>We know life is busy and your list of things to do keeps getting longer.</p>
      <p>Sign up today and we can help make your list smaller!</p>
      <Link to="/login" style={style.buttonStyle} className="mdc-button mdc-button--raised">Login</Link>
      <Link to="/newuser" style={style.buttonStyle} className="mdc-button mdc-button--raised">New User</Link>
      </div>
    );
  }
}
