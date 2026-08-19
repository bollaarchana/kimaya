import { NavLink } from "react-router-dom";
import { Users, Bot, Database, TrendingUp, Layers } from "lucide-react";

const capabilities = [
  {
    icon: Users,
    title: "IT Staffing",
  },
  {
    icon: Bot,
    title: "AI/ML & GenAI Solutions",
  },
  {
    icon: Database,
    title: "Data Engineering & MLOps",
  },
  {
    icon: TrendingUp,
    title: "Consulting",
  },
  {
    icon: Layers,
    title: "Training & AI Readiness",
  },
];

import {
  FaLaptopCode,
  FaUserTie,
  FaUsers,
  FaHandshake,
  FaArrowRight,
} from "react-icons/fa";

const services = [
  {
    icon: <FaLaptopCode />,
    title: "IT Recruitment",
    description:
      "Find highly skilled IT professionals across software development, cloud, AI, cybersecurity, DevOps and emerging technologies.",
    color: "text-[#2D1663]",
    bg: "bg-[#F5F1FD]",
  },
  {
    icon: <FaUserTie />,
    title: "Executive Search",
    description:
      "Identify and recruit experienced leaders and senior executives who drive business growth and strategic transformation.",
    color: "text-orange-500",
    bg: "bg-[#FFF5EE]",
  },
  {
    icon: <FaUsers />,
    title: "Contract Staffing",
    description:
      "Flexible staffing solutions to quickly scale your workforce with qualified contract professionals for short and long-term projects.",
    color: "text-[#2D1663]",
    bg: "bg-[#F5F1FD]",
  },
  {
    icon: <FaHandshake />,
    title: "HR Consulting",
    description:
      "Strategic HR consulting services covering workforce planning, employee engagement, performance management and compliance.",
    color: "text-orange-500",
    bg: "bg-[#FFF5EE]",
  },
];

export default function ServicesHome() {
  return (
    <section className="relative items-center overflow-hidden bg-orange-500 py-4">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h className="my-4 text-3xl lg:text-4xl font-extrabold text-primary-text tracking-tight text-[#2D1663]">
          OUR SERVICES
        </h>
        <p className="mt-2 text-sm text-white/80 sm:text-base font-semibold">
          Everything you need to create a better digital experience.
        </p>

        <div className="container mx-auto px-3 md:px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-1 pt-2 gap-y-4 sm:gap-x-2 lg:flex lg:flex-nowrap lg:items-center lg:justify-between lg:gap-3">
            {capabilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="flex min-w-0 items-center justify-center gap-1 text-white lg:shrink-0 lg:justify-start"
                >
                  <Icon className="h-4 w-4 shrink-0 text-blue-800 lg:h-5 lg:w-5" />

                  <span className="min-w-0 truncate text-center text-[10px] font-medium sm:text-base lg:text-sm">
                    {item.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="container pb-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div className="mt-2" key={index}>
            <div className="relative flex flex-col justify-start items-center text-center h-full min-h-[340px] group rounded-2xl border border-gray-200 bg-white p-3 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-orange-500">
              <div
                className={`w-18 h-18 rounded-full flex items-center justify-center text-3xl ${service.bg} ${service.color} group-hover:bg-[#2D1663] group-hover:text-white transition-all`}
              >
                {service.icon}
              </div>

              <p className="mt-1 text-lg font-bold !text-[#2D1663]">
                {service.title}
              </p>

              <p className="mt-1 text-gray-600 text-sm leading-7">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="container flex justify-content-end">
        <NavLink
          to={"/service"}
          className="hover:text-white !text-[#2D1663] px-8 py-2 
                        flex items-center gap-3 font-semibold"
        >
          Read More
          <FaArrowRight />
        </NavLink>
      </div>
    </section>
  );
}
