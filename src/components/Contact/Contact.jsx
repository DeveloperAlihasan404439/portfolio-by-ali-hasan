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
          <div className="bg-[#061b28af] py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg font-medium text-white"
                >
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
                    className="block w-full text-white bg-none bg-transparent  shadow-sm border px-3 py-2 rounded-md outline-none placeholder-gray-100 border-white"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="name"
                  className="block text-lg font-medium text-gray-900"
                >
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
                    className="block w-full text-white bg-none bg-transparent  shadow-sm border px-3 py-2 rounded-md outline-none placeholder-gray-100 border-white"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="name"
                  className="block text-lg font-medium text-gray-900"
                >
                  Message
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    placeholder="Enter your message"
                    className="block w-full text-white bg-none bg-transparent  shadow-sm border px-3 py-2 rounded-md outline-none placeholder-gray-100 border-white"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#092f46] hover:bg-[#051b29] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#092f46] transform  delay-300 ease-in-out"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
