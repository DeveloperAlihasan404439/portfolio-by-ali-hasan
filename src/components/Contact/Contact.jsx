import contact from "../../assets/contact.png";
import Image from "next/image";
import { GrSend } from "react-icons/gr";
import "./Contact.css"
function Contact() {
  return (
    <div
      id="contact"
      className="w-11/12 max-w-9xl mx-auto relative rounded-xl bg-[#092f46] bg-cover bg-no-repeat mt-10 p-0 md:p-10 border_shadow"
    >
      <h2 className="text-2xl text-center font-medium pt-10 md:pt-0">
        <span className="border-b-2 border-[#25BFBF] md:pb-1 transition-[.4s] hover:text-[#25BFBF]">
          Contact Form
        </span>
      </h2>
      <div className="lg:flex gap-7 mt-5 p-10">
        <div className="lg:w-[50%]">
          <Image
            width={400}
            height={400}
            src={contact}
            alt="contact us"
            className="w-full h-auto"
          />
        </div>
        <div className="lg:w-[50%] mt-5 md:mt-0">
          {/* <div className="md:flex gap-5 items-center mb-5">
            <input
              type="text"
              className="w-full px-4 py-2  placeholder:text-white rounded-lg outline-none bg-transparent border-2 border-[#25BFBF] cursor-pointer"
              placeholder="Name"
            />
            <input
              type="email"
              className="w-full px-4 py-2 rounded-lg outline-none bg-transparent border-2 placeholder:text-white  border-[#25BFBF] cursor-pointer mt-5 md:mt-0"
              placeholder="Email"
            />
          </div>
          <input
            type="text"
            className="w-full px-4 py-2 rounded-lg outline-none bg-transparent border-2 placeholder:text-white  border-[#25BFBF] cursor-pointer"
            placeholder="Subjact"
          /> */}
          <div className="entryarea">
            <input type="text" />
            <div className="labelline">Enter Your Name</div>
          </div>
          {/* <textarea name="" id="" cols="30" rows="10"  className="w-full px-4 py-2 rounded-lg outline-none bg-transparent border-2 placeholder:text-white  border-[#25BFBF] cursor-pointer mt-5" placeholder="Message"></textarea> */}
         {/*  <button className="rounded-md flex gap-3 justify-center items-center text-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 bg-[#072232] duration-300 mt-10 px-5 py-3 border_shadow md:w-fit">Send <span className="text-xl"><GrSend/></span></button> */}
        </div>
      </div>
    </div>
  );
}

export default Contact;
