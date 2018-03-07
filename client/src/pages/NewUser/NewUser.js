import React from "react";
import Nav from "../Nav/Nav";
import API from "../../utilities/API";

const style = {
  margin: "20px auto",
  textAlign: "center",
  border: "2px solid gray",
  borderRadius: 15,
  backgroundColor: "rgba(250, 250, 250, 1)",
  maxWidth: 600,
  padding: 20,
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
    API.createUser({
      name: this.state.name,
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      zipCode: this.state.zipCode
    }).then(res => {
      this.props.history.push("/adderrand");
    });
  }

  render() {
    return (
      <div>
        <Nav />
        <div style={style}>
          <h1>Please Enter Your Information</h1>
          <hr />
          <form>
            <div className="mdc-text-field--fullwidth">
              <input type="text" name="name" className="mdc-text-field__input" onChange={this.handleChange} value={this.state.name} placeholder="Full Name" />
            </div><br />
          <div className="mdc-text-field--fullwidth">
              <input type="email" name="email" className="mdc-text-field__input" onChange={this.handleChange} value={this.state.email} placeholder="name@example.com" />
            </div><br />
          <div className="mdc-text-field--fullwidth">
              <input type="text" name="username" className="mdc-text-field__input" onChange={this.handleChange} value={this.state.username} placeholder="username" />
            </div><br />
          <div className="mdc-text-field--fullwidth">
              <input type="password" name="password" className="mdc-text-field__input" onChange={this.handleChange} value={this.state.password} placeholder="password" />
            </div><br />
          <div className="mdc-text-field--fullwidth">
              <input type="text" name="address" className="mdc-text-field__input" onChange={this.handleChange} value={this.state.address} placeholder="1234 Street Name" />
            </div><br />
          <div className="mdc-text-field--fullwidth">
              <input type="text" name="city" className="mdc-text-field__input" onChange={this.handleChange} value={this.state.city} placeholder="City" />
            </div><br />
          <div className="mdc-text-field--fullwidth">
              <input type="text" name="state" className="mdc-text-field__input" onChange={this.handleChange} value={this.state.state} placeholder="State" />
            </div><br />
          <div className="mdc-text-field--fullwidth">
              <input type="text" name="zipCode" className="mdc-text-field__input" onChange={this.handleChange} value={this.state.zipCode} placeholder="Zip Code" />
            </div><br />
          <button style={style.buttonStyle} onClick={this.handleClick} className="mdc-button mdc-button--raised">Create</button>
          </form>
        </div>
      </div>
    );
  }
}
