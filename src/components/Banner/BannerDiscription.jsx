/* eslint-disable react/no-unescaped-entities */
"use client";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import SocialMedia from "../About/SocialMedia";
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
      {/* <h3 className="text-2xl font-medium"></h3> */}
      <p className="text-xl mt-2">
        I'm a skilled web designer with extensive experience in crafting
        captivating online experiences. My expertise lies in website design,
        frontend...
      </p>
      <div className="mt-5 lg:mt-10">
        <SocialMedia/>
      </div>
      <Link
        href="https://drive.google.com/file/d/1HyQiIRPAh5mQaRO3sGpM6rnDfYn-ey4l/view?usp=drive_link"
        className="rounded-md flex justify-center items-center text-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 bg-[#072232] duration-300 mt-10 px-5 py-3 border_shadow md:w-fit"
      >
        Resume
      </Link>
    </div>
  );
}
