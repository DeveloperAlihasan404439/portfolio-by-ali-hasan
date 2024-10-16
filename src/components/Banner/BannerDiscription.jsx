/* eslint-disable react/no-unescaped-entities */
"use client";
import Link from "next/link";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import SocialMedia from "../Shared/SocialMedia/SocialMedia";
export default function BannerDiscription() {
  return (
    <div className="md:ml-20">
      <h1 className="text-2xl font-medium">Hello, It's Me</h1>
      <h2 className="text-3xl font-bold my-2">
        Ali Hasan <span className="text-[#25BFBF]">( Liton Islam)</span>
      </h2>
      <TypeAnimation
        sequence={[
          "And I'm a Web Developer",
          1000,
          "And I'm a Front End Developer",
          1000,
          "And I'm a Back End Developer",
          1000,
          "And I'm a Node.js Developer",
          "And I'm a React Developer",
          1000,
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: "2em", display: "inline-block" }}
        repeat={Infinity}
      />
      <p className="text-xl mt-2">
        Experienced web designer proficient in design tools and coding
        languages. Specializes in creating visually striking websites and
        seamless user experiences...
      </p>
      <div className="mt-5 lg:mt-10">
        <SocialMedia />
      </div>
      <div className="flex items-center gap-3">
        <Link
          href="https://drive.google.com/file/d/13E7yldQvie1Vg5THc_s5UTKEEBcMcZe9/view?usp=sharing"
          target="_blank"
          className="rounded-md flex justify-center items-center text-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 bg-[#072232] duration-300 mt-10 px-5 py-3 border_shadow md:w-fit"
        >
          View Resume
        </Link>
        <a
          href="/Resume.pdf"
          download="Ali_Hasan_Resume.pdf"
          className="rounded-md flex justify-center items-center text-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 text-white bg-[#0722323b] hover:bg-[#0722329f] duration-300 mt-10 px-5 py-3 border_shadow md:w-fit"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}
