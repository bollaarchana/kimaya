import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import {
  FaLaptopCode,
  FaUserTie,
  FaUsers,
  FaHandshake,
  FaGraduationCap,
  FaUserFriends,
  FaChalkboardTeacher,
} from "react-icons/fa";


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const services = [
  {
    icon: <FaLaptopCode />,
    title: "IT Recruitment",
    description:
      "Find highly skilled IT professionals across software development, cloud, AI, cybersecurity, DevOps, and emerging technologies.",
    color: "text-[#2D1663]",
    bg: "bg-[#F5F1FD]",
  },
  {
    icon: <FaUserTie />,
    title: "Executive Search",
    description:
      "Identify and recruit experienced leaders and senior executives who drive business growth and strategic transformation.",
    color: "text-[#F47C20]",
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
      "Strategic HR consulting services covering workforce planning, employee engagement, performance management, and compliance.",
    color: "text-[#F47C20]",
    bg: "bg-[#FFF5EE]",
  },
  {
    icon: <FaGraduationCap />,
    title: "Corporate Training",
    description:
      "Customized learning and development programs to improve employee skills, leadership capabilities, and organizational performance.",
    color: "text-[#2D1663]",
    bg: "bg-[#F5F1FD]",
  },
  {
    icon: <FaUserFriends />,
    title: "Talent Acquisition Outsourcing (RPO)",
    description:
      "End-to-end recruitment process outsourcing to streamline hiring, reduce recruitment costs, and improve hiring quality.",
    color: "text-[#F47C20]",
    bg: "bg-[#FFF5EE]",
  },
  {
    icon: <FaChalkboardTeacher />,
    title: "Training & Coaching",
    description:
      "Professional coaching and practical training programs that enhance leadership, communication, productivity, and career growth.",
    color: "text-[#2D1663]",
    bg: "bg-[#F5F1FD]",
  },
];
const Carousel  = () => {
    return(
        <Carousel
  responsive={responsive}
  autoPlay
  infinite
  swipeable
  draggable
  showDots
  arrows
  keyBoardControl
  containerClass="carousel-container"
  itemClass="px-2"
>
  {services.map((service, index) => (
    <div
      key={index}
      className={`rounded-2xl p-6 shadow-md ${service.bg} ${service.color}`}
    >
      <div className="mb-4 text-4xl">{service.icon}</div>
      <h3 className="mb-3 text-xl font-semibold">{service.title}</h3>
      <p className="text-sm leading-6">{service.description}</p>
    </div>
  ))}
</Carousel>
    )
}

export default Carousel 

