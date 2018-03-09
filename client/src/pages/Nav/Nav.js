import React from "react";
import { Link } from "react-router-dom";

const style = {
  height: 60,
  linkStyle: {
    color: "#000",
    lineHeight: 3,
    fontSize: "2rem"
  }
}


export default class Nav extends React.Component {
  render() {
    return (
      <div>
        <nav style={style} className="mdc-tab-bar">
          <Link style={style.linkStyle} className="mdc-tab" to="/"><strong>Errands</strong>Now!</Link>
          <Link style={style.linkStyle} className="mdc-tab" to="/adderrand">My Errands</Link>
          <Link style={style.linkStyle} className="mdc-tab" to="/login">Log In</Link>
          <span className="mdc-tab-bar__indicator"></span>
        </nav>
      </div>

    );
  }
}
