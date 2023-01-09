import React from "react";
import trollface from "../assets/trollface.svg";

function Header() {
  return (
    <nav className="header">
      <div className="header-banner">
        <img className="header-logo" src={trollface} alt="" />
        <h1 className="header-title">Meme Generator</h1>
        <h3 className="header-project">React Course - Project 3</h3>
      </div>
    </nav>
  );
}

export default Header;
