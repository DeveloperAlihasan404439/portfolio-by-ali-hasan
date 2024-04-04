import { HiOutlineMailOpen } from "react-icons/hi";
import { FaGithub } from "react-icons/fa6";
function Contact() {
  return (
    <div id="skills" className="w-11/12 max-w-7xl mx-auto relative rounded-xl shadow bg-[#092f46] bg-cover bg-no-repeat mt-10 p-10 border_shadow">
      <h2 className="text-2xl text-center font-medium ">
        <span className="border-b-2 border-[#25BFBF] md:pb-1 transition-[.4s] hover:text-[#25BFBF]">
          Contact My
        </span>
      </h2>
      <div className="flex gap-7 mt-10 p-10 ">
        <div className="w-[50%]">
            <div className="flex flex-col items-center justify-center py-7 bg-[#071d2b8e] border-2 border-[#071c29] rounded-md mb-7">
                <div className="w-16 h-16 text-5xl rounded-full bg-[#092f46] flex justify-center items-center">
                    <HiOutlineMailOpen/>
                </div>
                <h2>alihasan404439@gmail.com</h2>
            </div>
            <div className="flex flex-col items-center justify-center py-7 bg-[#071d2b8e] border-2 border-[#071c29] rounded-md mb-7">
                <div className="w-16 h-16 text-5xl rounded-full bg-[#092f46] flex justify-center items-center">
                    <FaGithub/>
                </div>
                <h2>https://github.com/DeveloperAlihasan404439</h2>
            </div>
        </div>
        <div className="w-[50%]">
            <div className="flex gap-7 items-center">
                <input type="text" className="w-full"/>
                <input type="text" className="w-full"/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
