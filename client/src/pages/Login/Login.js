import React from "react";
import { Link } from "react-router-dom";

const style = {
  margin: "20px auto",
  textAlign: "center",
  border: "2px solid gray",
  borderRadius: 150,
  backgroundColor: "rgba(250, 250, 250, 1)",
  maxWidth: 600,
  padding: 20,  buttonStyle: {
    backgroundColor: "#64B5F6",
    marginRight: 5
  }
}

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleClick = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div style={style}>
        <h1>Please Login</h1>
        <hr />
        <form>
          <div className="mdc-text-field">
            <input type="text" name="username" className="mdc-text-field__input" onChange={this.handleChange} value={this.state.username} placeholder="username" />
          </div><br />
          <div className="mdc-text-field">
            <input type="password" name="password" className="mdc-text-field__input" onChange={this.handleChange} value={this.state.password} placeholder="password" />
          </div><br />
        <button style={style.buttonStyle} onClick={this.handleClick} className="mdc-button mdc-button--raised">Login</button>
        <Link style={style.buttonStyle} to="/newuser" className="mdc-button mdc-button--raised">New User</Link>
        </form>
      </div>
    );
  }
}
