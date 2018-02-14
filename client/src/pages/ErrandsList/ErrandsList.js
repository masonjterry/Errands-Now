import React from "react";
import RunnerNav from "../Nav/RunnerNav";

const style = {
  margin: "20px auto",
  textAlign: "center",
  border: "2px solid gray",
  borderRadius: 15,
  backgroundColor: "rgba(250, 250, 250, 1)",
  maxWidth: 600,
  padding: 20,
  buttonStyle: {
    backgroundColor: "#64B5F6",
    marginTop: 5
  }
}

export default class AddErrands extends React.Component {

  state = {
    modalIsOpen: false,
    errandName: "",
    location: "",
    extendedLocation: "",
    errandInstructions: ""
  };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  handleChange = (e) => {
    const {name, value} = e.target;

    this.setState({
      [name]: value
    })
  }

  handleClick = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div>
        <RunnerNav />
        {/* add button */}
        <div style={style}>
          <h1>Errands List</h1>
          <hr />
          {/* display errands */}
          {this.state.errandName ?
          <div style={style.displayStyle}>
            <h2>{this.state.errandName}</h2>
            <p>Location: {this.state.location}</p>
            <p>Instructions: {this.state.errandInstructions}</p>
          </div>
          : <p>There are no current errands available. Check back later.</p>}
        </div>
      </div>
    );
  }
}
