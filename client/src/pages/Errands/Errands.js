import React from "react";
import Modal from "react-modal";
import Autocomplete from "react-google-autocomplete"

const style = {
  margin: "20px auto",
  textAlign: "center",
  border: "2px solid gray",
  borderRadius: 150,
  backgroundColor: "rgba(250, 250, 250, 1)",
  maxWidth: 600,
  padding: 20,  buttonStyle: {
    backgroundColor: "#64B5F6",
    marginTop: 5
  },
  formStyle: {
    marginTop: 20
  },
  modalStyle: {
    overlay: {
      backgroundColor: "rgba(200, 200, 200, .8)"
    },
    content: {
      borderRadius: 150,
      border: "2px solid gray",
      textAlign: "center",
      maxWidth: 500,
      margin: "0 auto"
    }
  },
  displayStyle: {
    backgroundColor: "#64B5F6",
    border: "2px solid gray",
    borderRadius: 150,
    maxWidth: 200,
    margin: "20px auto"
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
      // add button
      <div style={style}>
        <h1>Add Your Errands</h1>
        <hr />
        <button style={style.buttonStyle} onClick={this.openModal} className="mdc-fab material-icons"><span className="mdc-fab__icon">add</span></button>

        {/* modal for adding errands */}
        <Modal style={style.modalStyle} isOpen={this.state.modalIsOpen} ariaHideApp={false}>
          <button onClick={this.closeModal}>X</button>
          <h1>Add Your Errand</h1>
          <form>
            <div className="mdc-text-field--fullwidth">
              <input name="errandName" className="mdc-text-field__input" onChange={this.handleChange} value={this.state.errandName} placeholder="Errand Name Ex: Groceries, Dry Cleaning" />
            </div>
            <div className="mdc-text-field--fullwidth">
              <Autocomplete style={style.formStyle} name="location" className="mdc-text-field__input" onChange={this.handleChange} placeholder="Location Ex Whole Foods, CVS"
                  onPlaceSelected={(place) => {
                    this.setState({
                      location: place.name,
                      extendedLocation: place
                    });
                  }}
                  types={["establishment"]}
                  componentRestrictions={{country: "usa"}}
                />
            </div>
            <div className="mdc-text-field--fullwidth">
              <input name="errandInstructions" className="mdc-text-field__input" onChange={this.handleChange} value={this.state.errandInstructions} placeholder="Instructions" />
            </div>
            <button style={style.buttonStyle} className="mdc-button mdc-button--raised" onClick={this.handleClick}>Add</button>
          </form>
        </Modal>
        {/* display errands */}
        {this.state.errandName ?
        <div style={style.displayStyle}>
          <p>{this.state.errandName}</p>
          <p>{this.state.location}</p>
          <p>{this.state.errandInstructions}</p>
        </div>
        : ""}
      </div>
    );
  }
}
