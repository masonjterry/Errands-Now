import React from "react";
import AddItem from "./AddItem";

const style = {
  margin: 20,
  buttonStyle: {
    backgroundColor: "#64B5F6"
  }
}

export default class AddErrands extends React.Component {
  render() {
    return (
      <div style={style}>
        <h1>Add Your Errands</h1>
        <hr />
        <button style={style.buttonStyle} className="mdc-fab material-icons"><span className="mdc-fab__icon">add</span></button>
        <AddItem open="false"/>
      </div>
    );
  }
}
