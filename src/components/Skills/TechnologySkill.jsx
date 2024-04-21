"use client";
import { useState } from "react";
import "./TechnologySkill.css";
export default function TechnologySkill() {
  const [type, setType] = useState("frontend");
  const skills = [
    { id: "1", name: "HTML5", value: "95%", type: "frontend" },
    { id: "2", name: "CSS3", value: "95%", type: "frontend" },
    {
      id: "3",
      name: "Tailwind CSS",
      value: "93%",
      type: "frontend",
    },
    {
      id: "4",
      name: "Bootstrap CSS",
      value: "90%",
      type: "frontend",
    },
    {
      id: "5",
      name: "JavaScript ",
      value: "85%",
      type: "frontend",
    },
    {
      id: "6",
      name: "React JS ",
      value: "88%",
      type: "frontend",
    },
    {
      id: "7",
      name: "Next JS ",
      value: "60%",
      type: "frontend",
    },
    {
      id: "8",
      name: "Express JS ",
      value: "70%",
      type: "backend",
    },
    {
      id: "9",
      name: "Firebase",
      value: "90%",
      type: "backend",
    },
    {
      id: "10",
      name: "MongoDB",
      value: "65%",
      type: "backend",
    },
    { id: "11", name: "Node JS", value: "90%", type: "backend" },
    {
      id: "12",
      name: "VS Code",
      value: "100%",
      type: "tools",
    },
    {
      id: "12",
      name: "GitHub",
      value: "95%",
      type: "tools",
    },
    {
      id: "13",
      name: "Figma",
      value: "90%",
      type: "tools",
    },
    {
      id: "14",
      name: "Netlify",
      value: "95%",
      type: "tools",
    },
    {
      id: "15",
      name: "Vercel",
      value: "80%",
      type: "tools",
    },
    {
      id: "16",
      name: "Surge",
      value: "85%",
      type: "tools",
    },
  ];

  function hendelTypeSkill(skill) {
    if (skill) {
      return setType(skill);
    }
  }
  const frontend = skills.filter((frontend) => frontend.type === "frontend");
  const backend = skills.filter((frontend) => frontend.type === "backend");
  const tools = skills.filter((frontend) => frontend.type === "tools");
  return (
      <div className="tabs_container_technology">
        {/* tabs button section start  */}
        <div className="tabs_box_technology ">
          <div className="relative">
            <button
              onClick={() => hendelTypeSkill("frontend")}
              className={`${
                type === "frontend" ? "tab_button active" : "tab_button"
              }`}
            >
              FrontEnd Technology
            </button>
            {type === "frontend" && (
              <div className="absolute -bottom-[3px]  w-full h-1 bg-[#25BFBF] rounded-lg transition-all delay-700"></div>
            )}
          </div>
          <div className="relative">
            <button
              onClick={() => hendelTypeSkill("backend")}
              className={`${
                type === "backend" ? "tab_button active" : "tab_button"
              }`}
            >
              BackEnd Technology
            </button>
            {type === "backend" && (
              <div className="absolute -bottom-[3px]  w-full h-1 bg-[#25BFBF] rounded-lg transition-all delay-700"></div>
            )}
          </div>
          <div className="relative">
            <button
              onClick={() => hendelTypeSkill("tools")}
              className={`${
                type === "tools" ? "tab_button active" : "tab_button"
              }`}
            >
              Tools Technology
            </button>
            {type === "tools" && (
              <div className="absolute -bottom-[3px]  w-full h-1 bg-[#25BFBF] rounded-lg transition-all delay-700"></div>
            )}
          </div>
        </div>
        {/* tabs button section end  */}

        {/* contant section start  */}
        <div className="tabs_contant">
          <div className="skills">
            {type === "frontend" || type === "backend" ? (
              <>
                {type === "frontend" ? (
                  <>
                    {frontend.map((skill) => (
                      <div key={skill.id} className="skill">
                        <div className="skill-name">{skill.name}</div>
                        <div className="skill-bar">
                          <div
                            className="skill-per"
                            per={skill.value}
                            style={{ maxWidth: skill.value }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </>
                ) : (
                  <>
                    {backend.map((skill) => (
                      <div key={skill.id} className="skill">
                        <div className="skill-name">{skill.name}</div>
                        <div className="skill-bar">
                          <div
                            className="skill-per"
                            per={skill.value}
                            style={{ maxWidth: skill.value }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </>
            ) : (
              <>
                {tools.map((skill) => (
                  <div key={skill.id} className="skill">
                    <div className="skill-name">{skill.name}</div>
                    <div className="skill-bar">
                      <div
                        className="skill-per"
                        per={skill.value}
                        style={{ maxWidth: skill.value }}
                      ></div>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
        {/* contant section end  */}
      </div>
  );
}
