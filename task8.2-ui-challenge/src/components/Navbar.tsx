import React from 'react'

export default function Navbar() {
  return (
    <div className="navBar">
      <div>
        <div className="left">
          <div className="logo">
            <img src={"/src/assets/images/logo.svg"}></img>
          </div>
          <div id="features">
            Features
            <img src={"/src/assets/images/icon-arrow-down.svg"}></img>
          </div>
          <div id="company">
            Company
            <img src={"/src/assets/images/icon-arrow-down.svg"}></img>
          </div>
          <div id="careers">Careers</div>
          <div id="about">About</div>
        </div>
      </div>

      <div>
        <div className="right">
          <div id="login">Login</div>
          <div id="register">Register</div>
        </div>
      </div>
    </div>
  );
}
