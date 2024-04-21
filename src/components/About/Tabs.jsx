"use client";
import { useState } from "react";
import "./Tabs.css";
function Tabs() {
  const [tabs, setTabs] = useState("education");
  return (
    <div className="tabs_container">
      <div className="tabs_box ">
        <div className="relative">
          <button
            onClick={() => setTabs("education")}
            style={{ "--i": 0 }}
            className={`${
              tabs === "education" ? "tab_button active" : "tab_button"
            }`}
          >
            Education
          </button>
          {tabs === "education" && <div className="absolute -bottom-[3px]  w-full h-1 bg-[#25BFBF] rounded-lg transition-all delay-700"></div>}
        </div>
        <div className="relative">
        <button
          onClick={() => setTabs("cours")}
          className={`${tabs === "cours" ? "tab_button active" : "tab_button"}`}
        >
          Cours
        </button>
          {tabs === "cours" && <div className="absolute -bottom-[3px]  w-full h-1 bg-[#25BFBF] rounded-lg transition-all delay-700"></div>}
        </div>
      </div>
      <div className="tabs_contant">
        <div className={`${
              tabs === "education" ? "contant active" : "contant"
            }`}>
          <h3>Education</h3>
          <p> adipisicing elit. Aut
            aliquid fugit porro incidunt ea molestias aliquam sunt. Nulla
            temporibus molestiae odio repudiandae! Laborum necessitatibus hic
            iusto, explicabo nihil quam atque.
          </p>
        </div>
        <div className={`${
              tabs === "cours" ? "contant active" : "contant"
            }`}>
          <h3>Cours</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut
            aliquid fugit porro incidunt ea molestias aliquam sunt. Nulla
            temporibus molestiae odio repudiandae! Laborum necessitatibus hic
            iusto, explicabo nihil quam atque.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
