import { Container, Row, Col } from "react-bootstrap";
import industryMap from "../assets/industries1.png";

const Industries = () => {
  return (
    <>
      
      <section className="relative items-center overflow-hidden bg-[#FEF2EF] py-4">
        <div className="text-center mb-6 max-w-3xl mx-auto">
          <h className="mt-4 text-3xl lg:text-4xl font-extrabold text-primary-text tracking-tight text-[#2D1663]">
            INDUSTRIES
          </h>

          </div>

        <Container fluid="xxl">
          <Row>
            <Col lg={6}>
            <p className="mt-3 leading-tight text-[#2D1663] text-3xl lg:text-3xl font-extrabold text-primary-text tracking-tight mb-6">
                <span className="block">
            Industry Expertise That
                  <span className="text-orange-500">{" "}Drives Better Hiring
</span>
                </span>

                <span className="block mt-2">
                Specialized Recruitment{" "}
                  <span className="text-orange-500"> Across Industries.</span>
                </span>
              </p>
             
              <p className="mt-8 leading-9 text-gray-600 text-sm">
                Kimaya Hiring brings deep domain expertise across a diverse range
                of industries — from high-growth technology startups to
                regulated healthcare and life sciences organizations. Our
                specialized talent networks and industry knowledge enable us to
                deliver precise, high-quality candidates who understand the
                nuances of your sector. As we continue to expand, Global
                Capability Centers represent our next frontier, bringing
                world-class talent solutions to international markets.
              </p> 
            </Col>

            <Col lg={6} className="flex justify-center">
              <img src={industryMap} className="w-auto h-auto md:h-3/4" />
              
            </Col>
            {/* <div className="flex justify-content-end mb-3">
          <NavLink
            to={"/industries"}
            className="hover:text-white !text-[#2D1663] px-8 py-2 
                        flex items-center gap-3 font-semibold"
          >
            Read More
            <FaArrowRight />
          </NavLink>
        </div> */}
          </Row>
          
        </Container>
        
      </section>
    </>
  );
};

export default Industries;
