import { NavLink } from "react-router-dom";
import {
  FaLaptopCode,
  FaUserTie,
  FaUsers,
  FaHandshake,
  FaArrowRight,
} from "react-icons/fa";
import {
  Cpu,
  Code2,
  TestTube2,
} from "lucide-react";

const techStack = [
  {
    title: "Embedded Systems",
    icon: Cpu,
    items: [
      "Embedded C++",
      "Embedded Tester",
      "Verification & Validation Engineer",
      "Embedded Support Engineer",
      "Embedded C++ Developer",
      "Firmware Developers",
    ],
  },
  {
    title: "Software Development",
    icon: Code2,
    items: [
      "Business Analysts",
      "Developers",
      "Senior Developers",
    ],
  },
  {
    title: "Testing & Quality",
    icon: TestTube2,
    items: [
      "Manual & Automation Testing",
    ],
  },
];
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
          <h className="mt-4 text-3xl lg:text-4xl font-extrabold text-primary-text tracking-tight text-[#2D1663]">
          OUR SERVICES
        </h>
        
        
      {/* <div className="w-full bg-[#080B11] py-10">
  <div className="max-w-7xl mx-auto px-6"> */}

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

      {techStack.map((item, index) => {
        const Icon = item.icon;

        return (
          <div key={index}>

            {/* Title + Icon */}
            <div className="flex items-center gap-2 my-4">
              <Icon
                className="w-5 h-5 text-cyan-400"
                strokeWidth={2}
              />

              <h className="text-white text-sm font-semibold">
                {item.title}
              </h>
            </div>

            {/* Text Items */}
            <div className="space-y-2">
              {item.items.map((text, itemIndex) => (
                <div
                  key={itemIndex}
                  className="flex items-start gap-2 text-white-800 text-xs"
                >
                  <span className="text-cyan-400 mt-1">
                    •
                  </span>

                  <span>
                    {text}
                  </span>
                </div>
              ))}
            </div>

          </div>
        );
      })}

    </div>

  {/* </div>
</div> */}
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



