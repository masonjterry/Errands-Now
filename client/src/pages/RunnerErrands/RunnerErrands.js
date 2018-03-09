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
    backgroundColor: "#FFF176",
    marginTop: 5,
    color: "#000"
  }
}

export default class AddErrands extends React.Component {

  state = {
    errandName: "",
    location: "",
    extendedLocation: "",
    errandInstructions: ""
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
  }

  render() {
    return (
      <div>
        <RunnerNav />
        {/* add button */}
        <div style={style}>
          <h1>My Errands</h1>
          <hr />
          {/* display errands */}
          {this.state.errandName ?
          <div style={style.displayStyle}>
            <h2>{this.state.errandName}</h2>
            <p>Location: {this.state.location}</p>
            <p>Instructions: {this.state.errandInstructions}</p>
          </div>
          : <p>You do not have any errands at this time. Go to the errands page to see what errands are available right now.</p>}
        </div>
      </div>
    );
  }
}
