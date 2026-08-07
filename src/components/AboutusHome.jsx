import { Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const AboutusHome = () => {
  return (
    <>
      <section className="container relative items-center overflow-hidden bg-[#F8F6FD] py-3">
        <div className="container text-center mb-2 max-w-3xl mx-auto">
          <h className="mt-4 text-xl lg:text-2xl font-bold tracking-tight text-[#2D1663]">
            ABOUT US
          </h>
        </div>
            <Row className="align-items-center bg-[#F8F6FD] rounded-4 py-2 shadow-sm">
              <Col>
                <p className="font-bold leading-tight !text-[#2D1663]">
                  <span className="block text-[21px]">
                    Building Strong Teams.
                  </span>

                  <span className="text-[#F47C20] block mt-2 text-[21px]">
                    Creating Lasting Success
                  </span>
                </p>
                <p className="mt-8 text-sm leading-8 text-gray-600">
                  Every organization has a vision. Behind every vision are the
                  people who bring it to life.
                </p>

                <p className="mt-2 text-sm leading-8 text-gray-600">
                  Kimaya Hiring Solutions was founded on a powerful belief:
                  <strong className="text-[#2D1663]">
                    {" "}
                    the right talent has the power to transform businesses,
                    careers, and communities.
                  </strong>
                </p>
              </Col>
              <Col lg={6} className="mt-5 mt-lg-0">
                <div>
                  <p className="font-bold leading-tight !text-[#F47C20]">
                    <span className="block text-[21px]">
                      A Message From Our Founder
                    </span>
                  </p>
                <p className="mt-8 text-sm leading-8 text-gray-600">
                    Whether you are a startup building your first engineering
                    team or an enterprise expanding globally, we become your
                    trusted talent partner — understanding your culture,
                    business objectives, and long-term vision to deliver hiring
                    solutions that create lasting value.
                  </p>
                  <div className="flex justify-content-start">
                    <span className="mt-2 text-sm font-semibold text-[#2D1663]">
                      Warm Regards,
                      <br />
                      <span className="text-[#F47C20] font-bold mt-2">
                        Sindhuja Hattekar
                        <br />
                      </span>
                      <span className="text-gray-500">
                        Founder & CEO
                        <br />
                        Kimaya Hiring Solutions Pvt. Ltd.
                      </span>
                    </span>
                  </div>
                </div>
              </Col>
          <div className="text-center py-10">
            <h className="mt-4 text-xl lg:text-2xl font-bold tracking-tight text-[#2D1663]">
              WHO WE ARE
            </h>

          <p className="mx-auto text-sm leading-8 mt-2 text-gray-600 max-w-5xl">
            Kimaya Hiring Solutions Pvt. Ltd. is a strategic talent acquisition
            and workforce consulting company committed to helping organizations
            build high-performing teams. Our expertise spans recruitment,
            executive search, workforce planning, HR consulting, and corporate
            learning solutions. We work as an extension of our clients'
            businesses, ensuring every hiring decision contributes to
            sustainable organizational growth. Our consultative approach,
            industry understanding, and commitment to excellence enable us to
            deliver quality talent solutions with speed, precision, and
            integrity.
          </p>
                        </div>
      {/* </Container>

        </section> */}
        <div className="flex justify-content-end">
          <NavLink
            to={"/aboutus"}
            className="hover:text-white !text-[#2D1663] px-8 py-2 
                        flex items-center gap-3 font-semibold"
          >
            Read More
            <FaArrowRight />
          </NavLink>
        </div>
        </Row>
      </section>
    </>
  );
};

export default AboutusHome;
