import React from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import "./style.css";

const style = {
  maxWidth: 500,
  fontSize: "1.8rem",
  margin: "0 auto",
  fontFamily: "Gloria Hallelujah",
  buttonStyle: {
    backgroundColor: "#fff",
    color: "#000",
    fontFamily: "Gloria Hallelujah",
    margin: "5% 10%"
  },
  modalBtn: {
    backgroundColor: "#FFF176",
    color: "#000",
    fontFamily: "Gloria Hallelujah",
    margin: "5% 10%"
  },
  styleHeader: {
    fontSize: "4rem",
    fontFamily: "Yellowtail",
    marginTop: 20,
    textShadow: "2px 2px #ccc"
  },
  imgStyle: {
    maxWidth: 70,
    marginBottom: -20
  },
  styleRunner: {
    backgroundColor: "#009E4E",
    marginRight: 5,
    color: "#fff",
    fontFamily: "Gloria Hallelujah"
  },
  divStyle: {
    textAlign: "right"
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
  paragraphStyle: {
    fontSize: "1.5rem"
  }
}

export default class Home extends React.Component {

  state = {
    modalIsOpen: false
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    return (
      <div>
        <h1 style={style.styleHeader}><strong>Errands</strong>NOW</h1>
        <div style={style}>
          <p><img style={style.imgStyle} src={require("../../images/check.svg")} alt="check" /> Life is busy.</p>
          <p><img style={style.imgStyle} src={require("../../images/check.svg")} alt="check" /> We can help.</p>
          <p><img style={style.imgStyle} src={require("../../images/check.svg")} alt="check" /> Give us your errand today.</p>
          <button style={style.buttonStyle} onClick={this.openModal} className="mdc-button mdc-button--raised">Learn More About ErrandsNOW</button>
        </div>
        <div style={style.divStyle}>
          <br />
          <br />
          <Link to="/runner" style={style.styleRunner} className="mdc-button mdc-button--raised">Errand Runners</Link>
        </div>
        <Modal style={style.modalStyle} isOpen={this.state.modalIsOpen} ariaHideApp={false}>
          <button onClick={this.closeModal} style={style.closeBtn}>X</button>
          <h1>About ErrandsNOW</h1>
          <p style={style.paragraphStyle}>ErrandsNOW is a full service errand running service. Once you create an account, you can add errands to your list. Once you add errands to your list, an ErrandsNOW Runner will run your errands for you. Sign up and let us run your errands today.</p>
          <Link to="/login" style={style.modalBtn} className="mdc-button mdc-button--raised">Log In</Link>
          <Link to="/newuser" style={style.modalBtn} className="mdc-button mdc-button--raised">New User</Link>
        </Modal>
      </div>
    );
  }
}
