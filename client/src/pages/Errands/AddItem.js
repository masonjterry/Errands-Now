import React from "react";
import Modal from "react-modal";

const style = {
  modal: {
    overlay: {
      backgroundColor: "rgba(150, 150, 150, .8)"
    },
    content: {
      borderRadius: 15
    }
  },
  btnStyle: {
    backgroundColor: "#64B5F6"
  }
}
export default class AddItem extends React.Component {
  state = {
    title: "",
    location: "",
    instructions: "",
    modalIsOpen: this.props.open
  }

  openModal = () => this.setState({ modalIsOpen: true });

  closeModal = () => this.setState({ modalIsOpen: false });

  handleClick = () => {
    this.setState({ modalIsOpen: false });
    console.log(this.state);
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  };

  render() {
    return(
      <Modal isOpen={this.state.modalIsOpen} ariaHideApp={false} style={style}>
        <button onClick={this.closeModal}>X</button>
        <h2>Add Your Errand</h2>
        <div className="mdc-text-field">
          <input name="title" className="mdc-text-field__input" onChange={this.handleChange} value={this.state.title} placeholder="Ex Groceries, Drycleaning"/>
        </div><br />
        <div className="mdc-text-field">
          <input name="location" className="mdc-text-field__input" onChange={this.handleChange} value={this.state.location} placeholder="Ex Whole Foods, Brown's Cleaners"/>
        </div><br />
        <div className="mdc-text-field">
          <input name="instructions" className="mdc-text-field__input" onChange={this.handleChange} value={this.state.instructions} placeholder="Instructions"/>
        </div><br />
      <button style={style.btnStyle} onClick={this.handleClick} className="mdc-button mdc-button--raised">Add</button>
      </Modal>
    );
  }
};
