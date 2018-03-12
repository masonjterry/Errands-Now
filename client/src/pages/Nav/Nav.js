import React from "react";
import { Link } from "react-router-dom";

const style = {
  height: 60,
  linkStyle: {
    fontFamily: "Fugaz One",
    color: "#000",
    lineHeight: 3,
    fontSize: "2.5rem"
  }
}


export default class Nav extends React.Component {

  handleClick = () => {
    localStorage.clear();
  }

  render() {
    return (
      <div>
        <nav style={style} className="mdc-tab-bar">
          <Link style={style.linkStyle} className="mdc-tab" to="/"><strong>Errands</strong>NOW!</Link>
          <Link style={style.linkStyle} className="mdc-tab" to="/adderrand">My Errands</Link>
          <Link style={style.linkStyle} className="mdc-tab" to="/login" onClick={this.handleClick}>Log Out</Link>
          <span className="mdc-tab-bar__indicator"></span>
        </nav>
      </div>

    );
  }
}
