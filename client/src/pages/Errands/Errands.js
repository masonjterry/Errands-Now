import React from "react";
import Modal from "react-modal";
import Autocomplete from "react-google-autocomplete";
import Nav from "../Nav/Nav";
import API from "../../utilities/API";

const style = {
  margin: "20px auto",
  textAlign: "center",
  boxShadow: "2px 2px 2px",
  borderRadius: 15,
  backgroundColor: "rgba(250, 250, 250, 1)",
  maxWidth: 600,
  padding: 20,  buttonStyle: {
    backgroundColor: "#FFF176",
    marginTop: 5,
    color: "#000",
  },
  formStyle: {
    marginTop: 20
  },
  modalStyle: {
    overlay: {
      backgroundColor: "rgba(200, 200, 200, .8)"
    },
    content: {
      borderRadius: 15,
      border: "2px solid gray",
      textAlign: "center",
      maxWidth: 600,
      margin: "0 auto"
    }
  },
  displayStyle: {
    backgroundColor: "#FFF176",
    // border: "2px solid gray",
    boxShadow: "2px 2px 2px",
    borderRadius: 15,
    padding: 10,
    maxWidth: 400,
    margin: "20px auto",
    color: "#000"
  }
}

export default class AddErrands extends React.Component {

  state = {
    modalIsOpen: false,
    errandName: "",
    location: "",
    extendedLocation: "",
    errandInstructions: "",
    errands: []
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

  handleClick = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.setState({ modalIsOpen: false });
    if (this.state.errandName && this.state.errandInstructions && this.state.location) {
      API.createErrand({
        errandName: this.state.errandName,
        location: this.state.location,
        extendedLocation: this.state.extendedLocation,
        errandInstructions: this.state.errandInstructions
      }).then(res => this.listErrands());
    }
  }

  render() {
    return (
      <div>
        <Nav />
        {/* add button */}
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
          {this.state.errands.length ?
            this.state.errands.map(errands =>
          <div style={style.displayStyle} key={errands._id}>
            <h2>{errands.errandName}</h2>
            <p>Location: {errands.location}</p>
            <p>Instructions: {errands.errandInstructions}</p>
          </div>)
         : <p>Click to add errands</p>}
        </div>
      </div>
    );
  }
}
