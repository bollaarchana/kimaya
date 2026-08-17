import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";

import {
  FaLaptopCode,
  FaUserTie,
  FaUsers,
  FaHandshake,
  FaGraduationCap,
  FaUserFriends,
  FaChalkboardTeacher,
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
  {
    icon: <FaGraduationCap />,
    title: "Corporate Training",
    description:
      "Customized learning and development programs to improve employee skills, leadership capabilities and organizational performance.",
    color: "text-[#2D1663]",
    bg: "bg-[#F5F1FD]",
  },
  {
    icon: <FaUserFriends />,
    title: "Talent Acquisition Outsourcing",
    description:
      "End-to-end recruitment process outsourcing to streamline hiring, reduce recruitment costs and improve hiring quality.",
    color: "text-orange-500",
    bg: "bg-[#FFF5EE]",
  },
  {
    icon: <FaChalkboardTeacher />,
    title: "Training & Coaching",
    description:
      "Professional coaching and practical training programs that enhance leadership, communication, productivity and career growth.",
    color: "text-[#2D1663]",
    bg: "bg-[#F5F1FD]",
  },
];


const Service = () => {
  const swiperRef = useRef(null);


  return (
    <>
      <section className="relative items-center overflow-hidden bg-orange-500 py-3">
        <div className="container text-center mb-16 max-w-3xl mx-auto">
          <h className="mt-4 text-xl lg:text-2xl font-bold tracking-tight text-[#2D1663]">
            OUR SERVICES
          </h>
          <p className="mt-2 text-white font-semibold px-1 text-sm max-w-3xl mx-auto leading-relaxed">
            We provide comprehensive recruitment, staffing, consulting and
            training solutions to help organizations attract, develop and
            retain exceptional talent.
          </p>

          <Swiper
 modules={[Autoplay, Navigation]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}              slidesPerView={3}
            spaceBetween={10}
            
    
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <div className="mt-2">
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
              </SwiperSlide>
            ))}
          </Swiper>
         <button
            type="button"
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label="Previous service"
            className="
              absolute
              left-0
              top-1/2
              -translate-y-1/2
              z-20
              w-10 h-10
              rounded-full
              text-[#2D1663]
              flex items-center justify-center
              shadow-lg
              hover:bg-[#2D1663]
              hover:text-white
              transition-all duration-300
            "
          >
            <ChevronLeft size={24} strokeWidth={2.5} />
          </button>


          {/* RIGHT ARROW */}

          <button
            type="button"
            onClick={() => swiperRef.current?.slideNext()}
            aria-label="Next service"
            className="
              absolute
              right-0
              top-1/2
              -translate-y-1/2
              z-20
              w-10 h-10
              rounded-full
              text-#2D1663
              flex items-center justify-center
              shadow-lg
              hover:bg-[#2D1663]
              hover:text-white
              transition-all duration-300
            "
          >
            <ChevronRight size={24} strokeWidth={2.5} />
          </button>

        


        </div>
      </section>
    </>
  );
};

export default Service;

