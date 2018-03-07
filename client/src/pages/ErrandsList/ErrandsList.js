import React from "react";
import RunnerNav from "../Nav/RunnerNav";
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
    backgroundColor: "#64B5F6",
    marginTop: 5
  },
  displayStyle: {
    backgroundColor: "#64B5F6",
    border: "2px solid gray",
    borderRadius: 15,
    maxWidth: 400,
    margin: "20px auto",
    color: "#fff"
  }
}

export default class AddErrands extends React.Component {

  state = {
    errands: []
  };

  listErrands = () => {
    API.listErrands()
    .then(res => {
      this.setState({ errands: res.data });
    }).catch(err => {
      console.log(err);
      alert("something went wrong");
    });
  }

  componentDidMount = () => {
    this.listErrands();
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
          {this.state.errands.length ?
            this.state.errands.map(errands =>
          <div style={style.displayStyle} key={errands._id}>
            <h2>{errands.errandName}</h2>
            <p>Location: {errands.location}</p>
            <p>Instructions: {errands.errandInstructions}</p>
          </div>)
          : <p>There are no current errands available. Check back later.</p>}
        </div>
      </div>
    );
  }
}
