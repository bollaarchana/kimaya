import { Container, Row, Col } from "react-bootstrap";
import industryMap from "../assets/industries.png";
import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Industries = () => {
  return (
    <>
      {/* <section className="relative items-center overflow-hidden bg-[#F47C20] pb-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="mt-4 text-4xl lg:text-5xl !font-bold tracking-tight !text-[#2D1663]">
            OUR SERVICES
          </h2>


          <p className="mt-2 text-white font-semibold px-1 text-lg max-w-3xl mx-auto leading-relaxed">
            We provide comprehensive recruitment, staffing, consulting, and
            training solutions to help organizations attract, develop, and
            retain exceptional talent.
          </p>
        </div> */}

      <section className="relative items-center overflow-hidden bg-[#FEF2EF] py-4">
        <div className="text-center mb-6 max-w-3xl mx-auto">
          <h className="mt-4 text-xl lg:text-2xl font-bold tracking-tight text-[#2D1663]">
            INDUSTRIES
          </h>

          {/* <h1 className="font-bold leading-tight !text-[#2D1663] mt-2">

                <span className="block text-[21px] md:text-[30px] xl:text-[41px]">
            Industry Expertise That
                  <span className="text-[#F47C20]">
                    {" "}Drives Better Hiring
                  </span>
                
                </span>

                
              </h1>
           */}
        </div>

        <Container fluid="xxl">
          <Row className="">
            <Col lg={6}>
              <p className="text-xl font-bold !text-[#2D1663] mb-3">
                <span className="block">
            Industry Expertise That
                  <span className="text-[#F47C20]">
                    {" "}Drives Better Hiring
                  </span>
                
                </span>
                Specialized Recruitment{" "}
                <span className="text-[#F47C20]">Across Industries</span>
              </p>

              <p className="mt-8 leading-9 text-gray-600">
                KimayaHiring brings deep domain expertise across a diverse range
                of industries — from high-growth technology startups to
                regulated healthcare and life sciences organizations. Our
                specialized talent networks and industry knowledge enable us to
                deliver precise, high-quality candidates who understand the
                nuances of your sector. As we continue to expand, Global
                Capability Centers represent our next frontier, bringing
                world-class talent solutions to international markets.
              </p> 
            </Col>

            <Col lg={6}>
              <img src={industryMap} className="img-fluid" />
            </Col>
          </Row>
          <div className="flex justify-content-end">
          <NavLink
            to={"/industries"}
            className="hover:text-white !no-underline !text-[#2D1663] px-8 py-2 
                        flex items-center gap-3 font-semibold"
          >
            Read More
            <FaArrowRight />
          </NavLink>
        </div>
        </Container>
        
      </section>
    </>
  );
};

export default Industries;
