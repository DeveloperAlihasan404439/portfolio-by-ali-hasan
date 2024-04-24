"use client";
import { useState } from "react";
import "./Tabs.css";
import Link from "next/link";
function Tabs() {
  const [tabs, setTabs] = useState("cours");
  return (
    <div className="tabs_container">
      <div className="tabs_box ">
      <div className="relative">
          <button
            onClick={() => setTabs("cours")}
            className={`${
              tabs === "cours" ? "tab_button active" : "tab_button"
            }`}
          >
            Cours
          </button>
          {tabs === "cours" && (
            <div className="absolute -bottom-[3px]  w-full h-1 bg-[#25BFBF] rounded-lg transition-all delay-700"></div>
          )}
        </div>
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
          {tabs === "education" && (
            <div className="absolute -bottom-[3px]  w-full h-1 bg-[#25BFBF] rounded-lg transition-all delay-700"></div>
          )}
        </div>
        
      </div>
      <div className="tabs_contant">
        <div
          className={`${tabs === "education" ? "contant active" : "contant"}`}
        >
          <table className="border border-[#25BFBF]">
            <thead className=" border-b p-2 bg-[#25BFBF] border-b-[#25BFBF]">
              <tr className="px-10  ">
                <td className="text-center">Exam</td>
                <td className="text-center">Concentration Major</td>
                <td className="text-center">Institute</td>
                <td className="text-center">Result</td>
                <td className="text-center">Passing Year</td>
              </tr>
            </thead>
            <tbody>
              <tr className="p-2 text-center border-b text-sm border-b-[#25BFBF]">
                <td>Diploma in Engineering</td>
                <td>Computer Science</td>
                <td>Dinajpur polytechnic institute</td>
                <td>3.46 out of 4.00</td>
                <td>2023</td>
              </tr>
              <tr className="p-2 text-center border-b text-sm border-b-[#25BFBF]">
                <td>Alim</td>
                <td>Humanities</td>
                <td>Charchare Bari Darul Ulum Alim Madrasah</td>
                <td>4.00 out of 5.00</td>
                <td>2021</td>
              </tr>
              <tr className="p-2 text-center text-sm border-b-[#25BFBF]">
                <td>Dakhil</td>
                <td>Humanities</td>
                <td>Charchare Bari Darul Ulum Alim Madrasah</td>
                <td>4.20 out of 5.00</td>
                <td>2019</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={`${tabs === "cours" ? "contant active" : "contant"}`}>
          <h1 className="text-xl">Web Development course with <span className="text-[#25BFBF]">Programming Hero!</span></h1>
          <p>
            🎉 Successfully completed the Web Development Course at Programming
            Hero and earned <Link href='https://drive.google.com/file/d/19Zr8kvgPHy09keuJHa-Fag9Q_wriWRg7/view?usp=sharing' className="text-[#25BFBF] border-b border-[#25BFBF] p-b-2 hover:text-[#1a9696]"> Certification! 🌟 </Link>Mastered HTML, CSS, JavaScript,
            and more to build stunning websites and dynamic applications. Ready
            to embark on the next stage of my coding journey!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
