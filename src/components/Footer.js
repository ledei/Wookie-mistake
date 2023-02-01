import React from "react";
import logo from "../assets/darth-vader-18586.png";

export function Footer() {
  return (
    <footer className="container-footer">
      <h4 className="footer-title">Made by</h4>
      <div className="footer-content">
        <p>Niklas</p>
        <img src={logo} alt="dart-vader-logo" />
        <p>Hampus</p>
      </div>
    </footer>
  );
}
