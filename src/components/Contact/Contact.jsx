import contact from "../../assets/contact.png";
import Image from "next/image";
import { GrSend } from "react-icons/gr";
// import "./Contact.css";
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

            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-gray-900">
                Name
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  placeholder="Enter your name"
                  className="block w-full text-gray-900 shadow-sm border px-3 py-2 rounded-md outline-none placeholder-gray-700 border-[#25BFBF]"
                />
              </div>
            </div>

            <div>
              <label htmlFor="name" className="block text-lg font-medium text-gray-900">
                Email Address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="Enter your email address"
                  className="block w-full text-gray-900 shadow-sm border px-3 py-2 rounded-md outline-none placeholder-gray-700 border-[#25BFBF]"
                />
              </div>
            </div>

            <div>
              <label htmlFor="name" className="block text-lg font-medium text-gray-900">
                Message
              </label>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  placeholder="Enter your message"
                  className="block w-full text-gray-900 shadow-sm border px-3 py-2 rounded-md outline-none placeholder-gray-700 border-[#25BFBF]"
                />
              </div>
            </div>
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#25BFBF] hover:bg-[#1a9696] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25BFBF]"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
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
          {/*  <div className="entryarea">
            <input type="text" />
            <div className="labelline">Enter Your Name</div>
          </div> */}
          {/* <textarea name="" id="" cols="30" rows="10"  className="w-full px-4 py-2 rounded-lg outline-none bg-transparent border-2 placeholder:text-white  border-[#25BFBF] cursor-pointer mt-5" placeholder="Message"></textarea> */}
          {/*  <button className="rounded-md flex gap-3 justify-center items-center text-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 bg-[#072232] duration-300 mt-10 px-5 py-3 border_shadow md:w-fit">Send <span className="text-xl"><GrSend/></span></button> */}
        </div>
      </div>
    </div>
  );
}

export default Contact;
