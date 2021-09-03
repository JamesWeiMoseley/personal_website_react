import React from "react";
import "../App.css";
import { Button } from "./Button";
import Button3 from "./Button2";
import "./hero.css";

function hero() {
  return (
    <div className="hero">
      <video src="/images/lines.mp4" autoPlay loop muted />
      <div id="#top" className="hero-container">
        <h1>Hi there, I am James</h1>
        <h1>Software Developer</h1>
        <p>Welcome to my personal website</p>
        <div className="hero-btns">
          <Button
            whereTo="https://www.linkedin.com/in/james-moseley/"
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            Linkedin <i className="far fa-address-card" />
          </Button>
          <Button
            whereTo="https://github.com/JamesWeiMoseley"
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            Github <i className="fas fa-puzzle-piece" />
          </Button>
          <Button3
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
          >
            Resume <i className="far fa-file" />
          </Button3>
          <p>
            <i class="far fa-envelope"></i> james.wei.moseley@gmail.com
          </p>
        </div>
      </div>
      <div className="hero-container">
        <img style={{ width: "90%" }} src="/images/winter.png" />
      </div>
    </div>
  );
}

export default hero;
