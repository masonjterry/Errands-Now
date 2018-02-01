import React from "react";

const style = {
  margin: 20,
  buttonStyle: {
    backgroundColor: "#64B5F6"
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
        </form>
      </div>
    );
  }
}
