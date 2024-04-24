/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import banner2 from "../../assets/banner2.png";
import SocialMedia from "./SocialMedia";
import Tabs from "./Tabs";
export default function About() {
  return (
    <div
      id="about"
      className="md:flex items-center w-11/12 max-w-9xl mx-auto rounded-xl border_shadow p-3"
    >
      <div className="md:w-[50%]">
        <Image width={600} height={400} alt="about" src={banner2} className="h-full" />
      </div>
      <div className="md:w-[50%] mt-5 md:mt-10 ">
        <h2 className="text-2xl font-medium border-b-2 border-[#25BFBF] md:pb-1 w-fit transition-[.4s] hover:text-[#25BFBF]">
          About me
        </h2>
        <h2 className="text-3xl font-bold my-4">Ali Hasan</h2>
        <p className="text-lg font-[400]">
          Experienced web designer proficient in design tools and coding
          languages. Specializes in creating visually striking websites and
          seamless user experiences. Let's collaborate to transform your ideas
          into captivating online platforms.
        </p>
        <Tabs />
        <div className="mt-3 lg:mt-4">
          <SocialMedia />
        </div>
      </div>
    </div>
  );
}
