"use client"
import { useState } from "react";
import "./Navber.css";
import { IoMenu, IoCloseSharp } from "react-icons/io5";
export default function Navber() {
  const [addCssClass, setAddCssClass] = useState("home")
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
        <a href="#" className={`${addCssClass==="home"&&'active_navber'}`} style={{ '--i': 0 }} onClick={()=>setAddCssClass("home")}>Home</a>
        <a href="#about" className={`${addCssClass==="about"&&'active_navber'}`} style={{ '--i': 1 }} onClick={()=>setAddCssClass("about")}>About Us</a>
        <a href="#services" className={`${addCssClass==="services"&&'active_navber'}`} style={{ '--i': 2 }} onClick={()=>setAddCssClass("services")}>Services</a>
        <a href="#skills" className={`${addCssClass==="skills"&&'active_navber'}`} style={{ '--i': 3 }} onClick={()=>setAddCssClass("skills")}>Skills</a>
        <a href="#project" className={`${addCssClass==="project"&&'active_navber'}`} style={{ '--i': 4 }} onClick={()=>setAddCssClass("project")}>Project</a>
        <a href="#contact" className={`${addCssClass==="contact"&&'active_navber'}`} style={{ '--i': 5 }} onClick={()=>setAddCssClass("contact")}>Contact</a>
      </nav>
    </div>
  );
}
