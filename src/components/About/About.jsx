/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import banner2 from "../../assets/banner2.png";
import SocialMedia from "./SocialMedia";
import Tabs from "./Tabs";
export default function About() {
  return (
    <div id="about" className="w-11/12 mx-auto md:flex items-center gap-3 my-10">
      <div className="md:w-[50%]">
        <Image width={600} height={400} alt="about" src={banner2} />
      </div>
      <div className="md:w-[50%] mt-5 md:mt-10 ">
        <h2 className="text-2xl font-medium border-b-2 border-[#25BFBF] md:pb-1 w-fit transition-[.4s] hover:text-[#25BFBF]">About me</h2>
        <h2 className="text-3xl font-bold my-4">Ali Hasan</h2>
        <p className="text-lg font-[400]">
          I'm a highly experienced web designer with a focus on creating
          visually striking websites and frontend solutions. Proficient in
          various design tools and coding languages, I excel in crafting
          seamless user experiences. {/* Whether it's building responsive layouts or
          enhancing site functionality, I'm dedicated to delivering top-notch
          results. Let's collaborate to transform your ideas into captivating
          online platforms that not only impress users but also achieve your
          goals effectively. With my expertise, your website will stand out in
          today's competitive digital landscape, drawing in visitors and driving
          meaningful engagement. */}
        </p>
        <Tabs/>
        <div className="mt-5 lg:mt-10">
          <SocialMedia/>
        </div>
      </div>
    </div>
  );
}
