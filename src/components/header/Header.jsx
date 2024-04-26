import React from "react";
import "./headerStyle.scss";
import Buttons from "../../props/Buttons";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="41"
          height="41"
          viewBox="0 0 41 41"
          fill="none"
        >
          <circle cx="20.5" cy="20.5" r="20.5" fill="#1ABE84" />
          <circle
            cx="20.5"
            cy="20.5"
            r="9"
            fill="#FB8F1D"
            stroke="white"
            stroke-width="3"
          />
        </svg>
      </div>
      <div className="items">
        <ul>
          <li>Home</li>
          <li>Destinations</li>
          <li>About</li>
          <li>Partner</li>
        </ul>
        <div className="header__btns">
          <Buttons text="Login"/>
          <Buttons text="Register"/>
        </div>
      </div>
    </div>
  );
};

export default Header;
