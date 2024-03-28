"use client";
// Dynamically import ResponsivePagination
import dynamic from "next/dynamic";
const DynamicResponsivePagination = dynamic(
  () => import("react-responsive-pagination"),
  { ssr: false }
);

import { MdDesignServices, MdDisplaySettings } from "react-icons/md";
import { FaReact, FaLaptopCode, FaCodeBranch, FaNode } from "react-icons/fa";
import { SiConvertio, SiFirebase } from "react-icons/si";
// import { TbBrandJavascript } from "react-icons/tb";
import { DiMongodb } from "react-icons/di";

import './Service.css'
import { useState } from "react";
function Service() {
  const services = [
    {
      id: 1,
      title: "Web Design",
      color: "#25BFBF",
      description:
        "Create captivating user interfaces with 'Elegant Web Design.' This category encompasses the art of balancing aesthetics and functionality, employing modern design principles, CSS frameworks.",
      icon: MdDesignServices,
    },
    {
      id: 2,
      title: "React Development",
      color: "#087ea4",
      description:
        "Achieve mastery in 'React Development' and revolutionize web applications. Dive deep into React.js, harnessing the power of component-based architecture, state management, and the virtual DOM.",
      icon: FaReact,
    },
    {
      id: 3,
      title: "REST API",
      color: "#ff5c35",
      description:
        "Architect 'RESTful Wonders' with expertise in designing, implementing, and optimizing RESTful APIs. Facilitate seamless communication between frontend and backend components, ensuring scalability.",
      icon: FaCodeBranch,
    },
    {
      id: 4,
      title: "Front-End Developer",
      color: "#46DFC5",
      description:
        "Excel as a 'Front-End Developer' by crafting delightful user experiences through innovative design and development. Utilize HTML, CSS, and JavaScript to create responsive and interactive web applications.",
      icon: MdDisplaySettings,
    },
    {
      id: 5,
      title: "JavaScript Wizardry",
      color: "#f9dc5c",
      description:
        "Unleash the magic of 'JavaScript Wizardry.' Dive into the depths of JavaScript, mastering ES6+ features, asynchronous programming and client-side scripting. Build interactive and responsive websites powerful scripting languages.",
      icon: DiMongodb,
    },
    {
      id: 6,
      title: "My Digital Canvas",
      color: "#5c62d6",
      description:
        "Transform your skills into a masterpiece with 'My Digital Canvas.' This category is dedicated to creating a personalized 'Personal Portfolio' that seamlessly blends creativity and professionalism.",
      icon: SiConvertio,
    },

    {
      id: 7,
      title: "Firebase Authentication",
      color: "#f7c52a",
      description:
        "Ensure robust security with 'Secure Firebase Authentication.' Implement advanced authentication and authorization features using Firebase, including OAuth and multi-factor authentication.",
      icon: SiFirebase,
    },
    {
      id: 8,
      title: "MongoDB Database",
      color: "#12a54f",
      description:
        "Master 'MongoDB Mastery' for proficient database design and management. Embrace NoSQL principles to create scalable, flexible, and high-performance data storage solutions for web applications.",
      icon: DiMongodb,
    },
    {
      id: 9,
      title: "Full-Stack Development",
      color: "#B412E1",
      description:
        "Embark on a comprehensive journey in 'Web Development,' covering both client and server sides. Integrate cutting-edge frontend technologies, backend frameworks, and master the art of RESTful API design.",
      icon: FaLaptopCode,
    },

    {
      id: 10,
      title: "Node js Developer",
      color: "#5eac45",
      description:
        "Become a proficient 'Node js Developer' by integrating Node.js into your frontend development workflow. Harness the power of server-side rendering, build real-time applications, and streamline your development process.",
      icon: FaNode,
    },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const ItemsPerPage = 6;
  const indexOfLastItem = currentPage * ItemsPerPage;
  const indexOfFirstItem = indexOfLastItem - ItemsPerPage;
  const servicesItems = services?.slice(indexOfFirstItem, indexOfLastItem);
  const serviceTotal = Math.ceil(services.length / ItemsPerPage);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-6 lg:mt-10 group">
        {servicesItems.map((service) => (
          <div
            key={service.id}
            className="w-full border border-[#25BFBF] p-5 border_shadow rounded-md bg-[#082435] transition ease-in-out delay-150 hover:-translate-y-3 hover:scale-110 hover:bg-[#082435c0] duration-300 group-hover:blur-sm hover:!blur-none cursor-pointer"
          >
            <service.icon
              className={`text-5xl text-`}
              style={{ color: `${service.color}` }}
            />
            <h2 className="pt-4 pb-2 text-xl font-medium">{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center w-full lg:w-[400px] m-auto py-5 ">
        <DynamicResponsivePagination
          current={servicesItems}
          total={serviceTotal}
          onPageChange={setCurrentPage}
        />
      </div>
    </>
  );
}

export default Service;
