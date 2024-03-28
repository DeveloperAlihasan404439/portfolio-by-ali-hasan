import Service from "./Service";

export default function Services() {
    return (
        <div id="services" className=" mt-20 w-11/12 max-w-6xl mx-auto">
            <h2 className="text-2xl text-center font-medium "><span className="border-b-2 border-[#25BFBF] md:pb-1 transition-[.4s] hover:text-[#25BFBF]">My Services</span></h2>
            <Service/>
        </div>
    );
};