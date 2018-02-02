import React from "react";
import { Link } from "react-router-dom";

const style = {
  backgroundColor: "#64B5F6",
  height: 60,
  linkStyle: {
    color: "#fff",
    lineHeight: 3,
    fontSize: "1.3rem"
  }
}


export default class Nav extends React.Component {
  render() {
    return (
      <div>
        <nav style={style} className="mdc-tab-bar">
          <Link style={style.linkStyle} className="mdc-tab" to="/"><strong>ErrandsNow!</strong></Link>
          <Link style={style.linkStyle} className="mdc-tab" to="/adderrand">My Errands</Link>
          <Link style={style.linkStyle} className="mdc-tab" to="/login">Login</Link>
          <span className="mdc-tab-bar__indicator"></span>
        </nav>
      </div>

    );
  }
}
