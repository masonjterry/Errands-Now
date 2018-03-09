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


export default class RunnerNav extends React.Component {
  render() {
    return (
      <div>
        <nav style={style} className="mdc-tab-bar">
          <Link style={style.linkStyle} className="mdc-tab" to="/runner"><strong>ErrandsNow!</strong></Link>
          <Link style={style.linkStyle} className="mdc-tab" to="/runner/errands">Errands Page</Link>
          <Link style={style.linkStyle} className="mdc-tab" to="/runner/errands/:myerrands">Errands To Run</Link>
          <Link style={style.linkStyle} className="mdc-tab" to="/runner/login">Log In</Link>
          <span className="mdc-tab-bar__indicator"></span>
        </nav>
      </div>

    );
  }
}
