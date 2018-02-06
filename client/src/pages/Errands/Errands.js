import React from "react";
import { Modal } from "react-modal";

const style = {
  margin: 20,
  buttonStyle: {
    backgroundColor: "#64B5F6"
  }
}

export default class AddErrands extends React.Component {

  state = {
    modalIsOpen: false
  };

  openModal = () => {
    this.setState({ modalIsOpen: true })
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false })
  };

  render() {
    return (
      <div style={style}>
        <h1>Add Your Errands</h1>
        <hr />
        <button style={style.buttonStyle} onClick={this.openModal} className="mdc-fab material-icons"><span className="mdc-fab__icon">add</span></button>
        <Modal isOpen={this.state.modalIsOpen}>
          <button onClick={this.closeModal}>X</button>
          <h1>Test</h1>
          <p>Test</p>
        </Modal>
      </div>
    );
  }
}
