import React from "react";
import Styled from "styled-components";

const NavBar = Styled.nav`
  margin-bottom: 20px;
`;

const Nav = props => {
  return (
    <div className="navbar-fixed">
      <NavBar>
        <div className="nav-wrapper blue lighten-3">
          <h5 className="brand-logo left">
            Score: {props.score}
          </h5>
          <h5 className="brand-logo right">
            Top Score: {props.highScore}
          </h5>
          <a href="github.com/pgould94" id="nav-mobile" className="brand-logo center">
          Clicky Game  
          </a>
        </div>
      </NavBar>
    </div>
  );
};

export default Nav;
