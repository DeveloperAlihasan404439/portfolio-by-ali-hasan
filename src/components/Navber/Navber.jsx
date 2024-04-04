import "./Navber.css";
import { IoMenu, IoCloseSharp } from "react-icons/io5";
export default function Navber() {
 
  return (
    <div className="header">
      <a href="#" className="logo">
        Ali <span>Hasan</span>
      </a>
      <input type="checkbox" name="" id="check" />
      <label htmlFor="check" className="icons">
        <IoMenu id="menu-icon" />
        <IoCloseSharp id="close-icon" />
      </label>
      <nav className="navbers">
        <a href="#" style={{ '--i': 0 }}>Home</a>
        <a href="#about" style={{ '--i': 1 }}>About Us</a>
        <a href="#services" style={{ '--i': 2 }}>Services</a>
        <a href="#skills" style={{ '--i': 3 }}>Skills</a>
        <a href="#project" style={{ '--i': 4 }}>Project</a>
        <a href="#contact" style={{ '--i': 5 }}>Contact</a>
      </nav>
    </div>
  );
}
