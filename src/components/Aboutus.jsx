import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";
import Cards from './Cards'
import WhyChooseUs from './WhyChooseUs'

import { FaUsers } from "react-icons/fa";
import { FaBuilding, FaUserCheck, FaSmileBeam } from "react-icons/fa";



const statistics = [
  {
    icon: <FaUsers />,
    number: "18+",
    title: "Years of Experience",
    description:
      "Delivering trusted recruitment and workforce consulting solutions.",
  },
  {
    icon: <FaBuilding />,
    number: "200+",
    title: "Clients Served",
    description:
      "Partnering with startups, SMEs, and enterprise organizations.",
  },
  {
    icon: <FaUserCheck />,
    number: "10K+",
    title: "Successful Placements",
    description: "Connecting exceptional talent with leading organizations.",
  },
  {
    icon: <FaSmileBeam />,
    number: "98%",
    title: "Client Satisfaction",
    description: "Building long-term partnerships through quality and trust.",
  },
];

const Aboutus = () => {
  return (
    <>
      <section className="relative items-center overflow-hidden bg-[#F8F6FD] pt-3">
            
            <Cards />
            <WhyChooseUs />

           
        
        
        <section className="py-20 bg-gradient-to-r from-[#2D1663] to-[#4A2B8C]">
          <Container fluid="xxl">
            {/* Heading */}

            <div className="text-center text-white mb-16">
              <span className="uppercase tracking-[4px] text-[#F47C20] font-semibold">
                Our Achievements
              </span>

              <h2 className="text-4xl lg:text-5xl font-bold mt-3">
                Numbers That Reflect
                <span className="text-[#F47C20]"> Our Success</span>
              </h2>


              <p className="mt-6 text-gray-600 text-sm max-w-3xl mx-auto leading-8">
                Our commitment to excellence and client satisfaction is
                reflected in the milestones we've achieved over the years.
              </p>
            </div>

            {/* Statistics Cards */}

            <Row className="g-4">
              {statistics.map((item, index) => (
                <Col lg={3} md={6} key={index}>
                  <div className="group text-center bg-white/10 backdrop-blur-sm rounded-4 p-5 h-100 border border-white/10 hover:border-[#F47C20] hover:-translate-y-2 transition-all duration-300">
                    <div className="mx-auto w-20 h-20 rounded-full bg-[#F47C20] text-white flex items-center justify-center text-4xl group-hover:scale-110 transition">
                      {item.icon}
                    </div>

                    <h2 className="text-5xl font-bold text-white mt-5">
                      {item.number}
                    </h2>


                    <h5 className="text-xl font-semibold text-white">
                      {item.title}
                    </h5>

                    <p className="text-gray-600 text-sm mt-3 leading-8">
                      {item.description}
                    </p>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
        <section className="relative overflow-hidden py-24 bg-gradient-to-r from-[#2D1663] via-[#3B1E75] to-[#2D1663]">
          {/* Decorative Background */}
          <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-white/5"></div>
          <div className="absolute -bottom-28 -right-28 w-96 h-96 rounded-full bg-[#F47C20]/10"></div>

          <Container fluid="xxl">
            <div className="relative z-10 max-w-4xl mx-auto text-center">
              <span className="uppercase tracking-[4px] text-[#F47C20] font-semibold">
                Let's Work Together
              </span>

              <h2 className="mt-4 text-4xl lg:text-6xl font-bold text-white leading-tight">
                Ready to Build Your
                <span className="text-[#F47C20]"> Winning Team?</span>
              </h2>


              <p className="mt-8 text-sm text-gray-600 leading-8">
                Whether you're hiring your first employee or scaling a global
                workforce, Kimaya Hiring Solutions is here to help you attract,
                hire, and retain exceptional talent.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-3 bg-[#F47C20] text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-600 transition-all duration-300 hover:shadow-lg"
                >
                  Request Consultation
                  <FaArrowRight />
                </Link>

               
              </div>
            </div>
          </Container>
        </section>
      </section>
    </>
  );
};

export default Aboutus;
