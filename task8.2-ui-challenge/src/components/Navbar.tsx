import React from "react";

export default function Navbar() {
  return (
    <div className="navBar">
      <div>
        <div className="left">
          <div className="logo">
            <img src={"/src/assets/images/logo.svg"}></img>
          </div>
          <div className="desktop" id="features">
            Features
            <img
              src={"/src/assets/images/icon-arrow-down.svg"}
              className="arrow"
            ></img>
          </div>
          <div className="desktop" id="company">
            Company
            <img
              src={"/src/assets/images/icon-arrow-down.svg"}
              className="arrow"
            ></img>
          </div>
          <div className="desktop" id="careers">
            Careers
          </div>
          <div className="desktop" id="about">
            About
          </div>
        </div>
      </div>

      <div>
        <div className="right desktop">
          <div id="login">
            Login
          </div>
          <div id="register">
            Register
          </div>
        </div>
        <img
          className="mobile"
          src="/src/assets/images/icon-menu.svg"
        />
      </div>
    </div>
  );
}
