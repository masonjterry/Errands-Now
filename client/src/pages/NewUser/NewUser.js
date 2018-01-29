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
      name: "",
      email: "",
      username: "",
      password: "",
      address: "",
      city: "",
      state: "",
      zipCode: ""
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
            <input type="text" name="name" className="mdc-text-field__input" onChange={this.handleChange} value={this.state.name} placeholder="Full Name" />
          </div><br />
          <div className="mdc-text-field">
            <input type="email" name="email" className="mdc-text-field__input" onChange={this.handleChange} value={this.state.email} placeholder="name@example.com" />
          </div><br />
          <div className="mdc-text-field">
            <input type="text" name="username" className="mdc-text-field__input" onChange={this.handleChange} value={this.state.username} placeholder="username" />
          </div><br />
          <div className="mdc-text-field">
            <input type="password" name="password" className="mdc-text-field__input" onChange={this.handleChange} value={this.state.password} placeholder="password" />
          </div><br />
          <div className="mdc-text-field">
            <input type="text" name="address" className="mdc-text-field__input" onChange={this.handleChange} value={this.state.address} placeholder="1234 Street Name" />
          </div><br />
          <div className="mdc-text-field">
            <input type="text" name="city" className="mdc-text-field__input" onChange={this.handleChange} value={this.state.city} placeholder="City" />
          </div><br />
          <div className="mdc-text-field">
            <input type="text" name="state" className="mdc-text-field__input" onChange={this.handleChange} value={this.state.state} placeholder="State" />
          </div><br />
          <div className="mdc-text-field">
            <input type="text" name="zipCode" className="mdc-text-field__input" onChange={this.handleChange} value={this.state.zipCode} placeholder="Zip Code" />
          </div><br />
        <button style={style.buttonStyle} onClick={this.handleClick} className="mdc-button mdc-button--raised">Create</button>
        </form>
      </div>
    );
  }
}
