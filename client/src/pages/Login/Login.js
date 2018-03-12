import React from "react";
import { Link } from "react-router-dom";

const style = {
  margin: "20px auto",
  textAlign: "center",
  boxShadow: "2px 2px 2px",
  borderRadius: 15,
  backgroundColor: "rgba(250, 250, 250, 1)",
  maxWidth: 600,
  padding: 20,  buttonStyle: {
    backgroundColor: "#FFF176",
    marginRight: 5,
    color: "#000"
  },
  styleHeader: {
    fontSize: "4rem",
    textAlign: "center"
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
    if (!this.state.username || !this.state.password) {
      alert("please fill in all fields");
    } else {
      this.props.history.push("/adderrand");
    }
  }

  render() {
    return (
      <div>
        <h1 style={style.styleHeader}><strong>ERRANDS</strong>Now!</h1>
        <div style={style}>
          <h1>Please Log In</h1>
	        <hr />
	        <form>
            <div className="mdc-text-field">
              <input type="text" name="username" className="mdc-text-field__input" onChange={this.handleChange} value={this.state.username} placeholder="username" />
            </div><br />
            <div className="mdc-text-field">
              <input type="password" name="password" className="mdc-text-field__input" onChange={this.handleChange} value={this.state.password} placeholder="password" />
            </div><br />
          <button style={style.buttonStyle} onClick={this.handleClick} className="mdc-button mdc-button--raised">Log In</button>
          <Link style={style.buttonStyle} to="/newuser" className="mdc-button mdc-button--raised">New User</Link>
          </form>
	      </div>
      </div>
    );
  }
}
