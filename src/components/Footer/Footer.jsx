import React from "react";
import SocialMedia from "../About/SocialMedia";

function Footer() {
  return (
    <div className="pt-10 border-t border_shadow mt-10 border-[#092f46]">
      <div className="w-11/12 max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <a href="#" className="logo">
            Ali <span>Hasan</span>
          </a>

          <nav className="navbers">
            <a href="#" style={{ "--i": 0 }}>
              Home
            </a>
            <a href="#about" style={{ "--i": 1 }}>
              About Us
            </a>
            <a href="#services" style={{ "--i": 2 }}>
              Services
            </a>
            <a href="#skills" style={{ "--i": 3 }}>
              Skills
            </a>
            <a href="#project" style={{ "--i": 4 }}>
              Project
            </a>
            <a href="#contact" style={{ "--i": 5 }}>
              Contact
            </a>
          </nav>
          <SocialMedia/>
        </div>
        <p className="text-center pt-10 pb-5">Developed by  <span className="text-[#25BFBF]">🎗</span> Ali Hasan 2023</p>
      </div>
    </div>
  );
}

export default Footer;
