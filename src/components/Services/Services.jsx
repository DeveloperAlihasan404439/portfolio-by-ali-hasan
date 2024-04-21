import Service from "./Service";
export default function Services() {
  return (
    <div id="services" 
    className="w-11/12 max-w-9xl mx-auto relative rounded-xl bg-[#092f46] bg-cover bg-no-repeat mt-10 p-0 md:p-10 border_shadow">
      <h2 className="text-2xl text-center font-medium py-5 md:py-0">
        <span className="border-b-2 border-[#25BFBF] md:pb-1 transition-[.4s] hover:text-[#25BFBF]">
          My Services
        </span>
      </h2>
      <Service/>
    </div>
  );
}
