"use client";
import { useState } from 'react';
import './TechnologySkill.css'
export default function TechnologySkill() {
    const [type, setType] = useState("frontend");
    const skills = [
      { id: "1", name: "HTML5", value: "95%", type: "frontend" },
      { id: "2", name: "CSS3", value: "95%", type: "frontend" },
      {
        id: "3",
        name: "Tailwind CSS",
        value: "90%",
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
    ];
  
    function hendelTypeSkill(skill) {
      if (skill) {
        return setType(skill);
      }
    }
    const frontend = skills.filter((frontend) => frontend.type === "frontend");
    const backend = skills.filter((frontend) => frontend.type === "backend");
    return (
        <div>
          <div className="md:flex gap-7">
            <button
              onClick={() => hendelTypeSkill("frontend")}
              title={`${type==="frontend"?'Active Technology':'Disabled Technology'}`}
              className={`rounded-md flex justify-center items-center text-xl w-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 mt-10 px-5 py-3 border_shadow md:w-fit ${type==="frontend"?'bg-[#072232]':'bg-[#051a1a]'}`}
            >
              Front-End Technology
            </button>
            <button
              onClick={() => hendelTypeSkill("backend")}
              title={`${type==="backend"?'Active Technology':'Disabled Technology'}`}
              className={`rounded-md flex justify-center items-center text-xl w-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 mt-10 px-5 py-3 border_shadow md:w-fit ${type==="backend"?'bg-[#072232]':'bg-[#051a1a]'}`}
            >
              Back-End Technology
            </button>
          </div>
          <div className="skills">
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
          </div>
        </div>
    );
};