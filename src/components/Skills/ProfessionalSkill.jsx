import "./ProfessionalSkill.css";
export default function ProfessionalSkill() {
  return (
    <>
      <h2 className="text-2xl text-center font-medium ">
        <span className="border-b-2 border-[#25BFBF] md:pb-1 transition-[.4s] hover:text-[#25BFBF]">
          professional skills{" "}
        </span>
      </h2>
      <div className="container">
        <div className="progress-bar conmmunication">
            <div className="text">
                <div>87%</div>
                <span className ="text-[12px] text-center">Communication</span>
            </div>
            <svg width="180px" height="180px">
                <circle cx="90" cy="90" r="86"></circle>
            </svg>
        </div>
        <div className="progress-bar Team">
            <div className="text">
                <div>90%</div>
                <span className ="text-[12px] text-center">Team Collaboration</span>
            </div>
            <svg width="180px" height="180px">
                <circle cx="90" cy="90" r="86"></circle>
            </svg>
        </div>
        <div className="progress-bar Problem">
            <div className="text">
                <div>80%</div>
                <span className ="text-[12px] text-center">Problem Solving</span>
            </div>
            <svg width="180px" height="180px">
                <circle cx="90" cy="90" r="86"></circle>
            </svg>
        </div>
        <div className="progress-bar Leadership">
            <div className="text">
                <div>83%</div>
                <span className ="text-[12px] text-center">Leadership</span>
            </div>
            <svg width="180px" height="180px">
                <circle cx="90" cy="90" r="86"></circle>
            </svg>
        </div>
      </div>
    </>
  );
}
