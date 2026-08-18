import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

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
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const techCategories = [
  {
    title: "Embedded Systems",
    icon: Cpu,
    items: [
      "Embedded C++",
      "Embedded Tester",
      "Validation Engineer",
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
    title: "Quality Assurance",
    icon: TestTube2,
    items: [
      "Manual & Automation Testing",
    ],
  },
];


// const techStack = [
//   {
//     title: "Embedded Systems",
//     icon: Cpu,
//     items: [
//       "Embedded C++",
//       "Embedded Tester",
//       "Verification & Validation Engineer",
//       "Embedded Support Engineer",
//       "Embedded C++ Developer",
//       "Firmware Developers",
//     ],
//   },
//   {
//     title: "Software Development",
//     icon: Code2,
//     items: [
//       "Business Analysts",
//       "Developers",
//       "Senior Developers",
//     ],
//   },
//   {
//     title: "Testing & Quality",
//     icon: TestTube2,
//     items: [
//       "Manual & Automation Testing",
//     ],
//   },
// ];
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
        
        
      {/* <div className="w-full bg-[#080B11] py-10">
  <div className="max-w-7xl mx-auto px-6"> */}
   <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.1,
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 mt-4"
          >

            {techCategories.map((category, index) => {

              const Icon = category.icon;

              return (
                <motion.div
                  key={category.index}
                  variants={cardVariants}
                  whileHover={{
                    y: -7,
                  }}
                  className="group bg-white rounded-2xl border border-gray-100 p-4 shadow-sm hover:shadow-xl transition-shadow duration-300"
                >

                  {/* Icon */}

                  {/* <div
                    className="w-10 h-10 rounded-xl bg-[#2D1663]/10 
                               flex items-center justify-center
                               text-[#2D1663]
                               group-hover:bg-[#2D1663]
                               group-hover:text-white
                               transition-all duration-300"
                  >
                    <Icon size={27} strokeWidth={1.8} />
                    <h5 className="mt-6 text-xl font-bold text-[#2D1663]">
                    {category.title}
                  </h5>

                  </div> */}
                  <div className="flex items-center gap-1 mb-4">
                                  <Icon size={20} strokeWidth={1.8} />

{/* // className="w-4 h-4 rounded-xl bg-[#2D1663]/10 
//                                flex items-center justify-center
//                                text-[#2D1663]
//                                group-hover:bg-[#2D1663]
//                                group-hover:text-white
//                                transition-all duration-300"
//                                   strokeWidth={2} */}
              

                    <p className="mt-6 text-sm font-bold text-[#2D1663]">
                {category.title}
              </p>
            </div>


                  {/* Heading */}

                  

                  
                  {/* Items */}

                  <ul className="space-y-3">

                    {category.items.map((item) => (

                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-gray-700"
                      >

                        <span
                          className="mt-1.5 flex-shrink-0 w-2 h-2 rounded-full bg-orange-500"
                        />

                        <span className="leading-relaxed">
                          {item}
                        </span>

                      </li>

                    ))}

                  </ul>

                </motion.div>
              );
            })}

          </motion.div>


    
  
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


{/* <div className="w-full bg-[#080B11] py-10">
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

      {techStack.map((item, index) => {
        const Icon = item.icon;

        return (
          <div key={index}>

            <div className="flex items-center gap-2 mb-4">
              <Icon
                className="w-6 h-6 text-cyan-400"
                strokeWidth={2}
              />

              <h3 className="text-white text-lg font-semibold">
                {item.title}
              </h3>
            </div>

            <div className="space-y-2">
              {item.items.map((text, itemIndex) => (
                <div
                  key={itemIndex}
                  className="flex items-start gap-2 text-gray-400 text-sm"
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
        
      

    </div>

  </div>
</div> */}

