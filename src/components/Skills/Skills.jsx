"use client";
import TechnologySkill from "./TechnologySkill";
function Skills() {
  return (
    <div id="skills" className="mt-10 w-11/12 max-w-7xl mx-auto">
      <h2 className="text-2xl text-center font-medium ">
        <span className="border-b-2 border-[#25BFBF] md:pb-1 transition-[.4s] hover:text-[#25BFBF]">
          My Skills
        </span>
      </h2>
      <div className="w-full flex ">
        <div className="w-[50%]">
        <TechnologySkill />
        </div>
        <div className="w-[50%] mt-10">
          <h2 className="text-2xl text-center font-medium ">
            <span className="border-b-2 border-[#25BFBF] md:pb-1 transition-[.4s] hover:text-[#25BFBF]">
              Technical Skills{" "}
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Skills;
