"use client"
import { useEffect, useRef, useState } from "react";
import "./ProfessionalSkill.css";
export default function ProfessionalSkill() {
  const [isAnimated, setIsAnimated] = useState(false);
  const circleRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      const circlePosition = circleRef.current.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;

      if (circlePosition < screenPosition) {
        setIsAnimated(true);
      }
      else {
        setIsAnimated(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
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
            <span className="text-[12px] text-center">Communication</span>
          </div>
          <svg width="180px" height="180px">
            <circle
              ref={circleRef}
              cx="90" cy="90" r="86"
              stroke="yellow"
              fill="none"
              className={isAnimated ? "animated" : ""}
            ></circle>
          </svg>
        </div>
        <div className="progress-bar conmmunication team">
          <div className="text">
            <div per={90}>90%</div>
            <span className="text-[12px] text-center">Team Collaboration</span>
          </div>
          <svg width="180px" height="180px">
            <circle
              ref={circleRef}
              cx="90" cy="90" r="86"
              stroke="yellow"
              fill="none"
              className={isAnimated ? "animated" : ""}
            ></circle>
            </svg> 
        </div>
        <div className="progress-bar conmmunication Problem">
          <div className="text">
            <div style={{'--i': 80}}>80%</div>
            <span className="text-[12px] text-center">Problem Solving</span>
          </div>
          <svg width="180px" height="180px">
            <circle
              ref={circleRef}
              cx="90" cy="90" r="86"
              stroke="yellow"
              fill="none"
              className={isAnimated ? "animated" : ""}
            ></circle>
            </svg> 
        </div>
        <div className="progress-bar conmmunication Leadership">
          <div className="text">
            <div>83%</div>
            <span className="text-[12px] text-center">Leadership</span>
          </div>
          <svg width="180px" height="180px">
            <circle
              ref={circleRef}
              cx="90" cy="90" r="86"
              stroke="yellow"
              fill="none"
              className={isAnimated ? "animated" : ""}
            ></circle>
            </svg> 
        </div>
      </div>
    </>
  );
}
