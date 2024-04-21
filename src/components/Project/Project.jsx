import duay from "../../assets/projact/duay.png";
import bodypulse from "../../assets/projact/bodypulse.png";
import careerpulse from "../../assets/projact/carer pulse.png";
import eventmenagement from "../../assets/projact/event-menagement.png";
import communit from "../../assets/projact/commint-calcaral.png";
import swiftMail from "../../assets/projact/swift-mail.png";

import Image from "next/image";
import "./Project.css";
import Link from "next/link";
export default function Project() {
  const projectList = [
    {
      id: "1",
      title: "Swift Mail",
      image: swiftMail,
      demo: "https://swift-mail-5a7d7.web.app",
      github: "https://github.com/DeveloperAlihasan404439/Team-client-project",
      description:
        "Swifty Mail revolutionizes email management through its innovative approach to privacy and inbox organization. By offering disposable email addresses and a range of advanced features, ",
    },
    {
      id: "6",
      title: "Communit Cultural",
      image: communit,
      demo: "https://communitd-cultural.surge.sh",
      github:
        "https://github.com/DeveloperAlihasan404439/Communitd-and-Cultural-Cliend",
      description:"Eventbrite Education is your gateway to a world of learning. Discover workshops, courses seminars, and more. Enhance your skills, explore interests, or delve into academics. Find, register, and customize your learning journey with ease",
    },
    {
      id: "2",
      title: "Dua Page",
      image: duay,
      demo: "https://duay.vercel.app",
      github: "https://github.com/DeveloperAlihasan404439/IRD-job-task",
      description:
        "This repository contains information about the importance of dua (supplication) in Islam, including its significance, benefits, and practices.",
    },
    {
      id: "3",
      title: "Body Pulse",
      image: bodypulse,
      demo: "https://bodypulse-assignament-12.surge.sh",
      github:
        "https://github.com/DeveloperAlihasan404439/Body-pulse-client-site",
      description:
        "BodyPulse Tracker revolutionizes your fitness journey. Monitor your activities, track vital stats, and unlock personalized insights for a holistic approach to your well-being. Sync, track, and excel with BodyPulse Tracker",
    },
    {
      id: "4",
      title: "Career Pulse",
      image: careerpulse,
      demo: "https://authfirebaseassignament11.web.app",
      github:
        "https://github.com/DeveloperAlihasan404439/careee-pulse-client-site",
      description:
        "Career Pulse is a dedicated job marketing website that specializes in promoting job listings and career opportunities. With a focus on helping job seekers and employers connect,",
    },
    {
      id: "5",
      title: "Event Menagement",
      image: eventmenagement,
      demo: "https://event-menagement-surge.surge.sh",
      github: "https://github.com/DeveloperAlihasan404439/event-management",
      description:"Career Pulse is a dedicated job marketing website that specializes in promoting job listings and career opportunities. With a focus on helping job seekers and employers connect,",
    },
  ];

  return (
    <div
      id="project"
      className="w-full relative shadow bg-[#092f46] bg-cover bg-no-repeat mt-10 px-14 py-10 border_shadow"
    >
      <h2 className="text-2xl text-center font-medium ">
        <span className="border-b-2 border-[#25BFBF] md:pb-1 transition-[.4s] hover:text-[#25BFBF]">
          My Project
        </span>
      </h2>
      <div id="card-area">
        <div className="wrapper">
          <div className="box-area grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {projectList?.map((project) => (
              <div key={project.id} className="box">
                <Image
                  width={500}
                  height={600}
                  src={project.image}
                  alt={project?.title}
                  className="w-full h-[380px] rounded-xl"
                />
                <div className="overlay">
                  <h3>{project?.title}</h3>
                  <p>{project?.description}</p>
                  <div className="live-link">
                    <Link href={project?.demo} className="link">
                      Demo Link
                    </Link>
                    <Link href={project?.github} className="link">
                      Github Link
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
