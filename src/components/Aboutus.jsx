import { Container, Row, Col } from "react-bootstrap";
import {
  FaBullseye,
  FaEye,
  FaHandshake,
  FaAward,
  FaUsers,
  FaRocket,
} from "react-icons/fa";
//import founderImg from "../assets/founder.jpg";
const cards = [
  {
    icon: <FaBullseye />,
    title: "Our Mission",
    text: "To connect organizations with exceptional talent while creating meaningful career opportunities.",
  },

  {
    icon: <FaEye />,
    title: "Our Vision",
    text: "To become one of India's most trusted strategic talent acquisition partners.",
  },

  {
    icon: <FaHandshake />,
    title: "Our Values",
    text: "Integrity, Partnership, Excellence, Innovation, Trust and Long-term Relationships.",
  },
];

const Aboutus = () => {
  return (
    <>
      <section className="relative items-center overflow-hidden bg-[#F8F6FD] py-3">
        <div className="container text-center mb-2 max-w-3xl mx-auto">
          <h2 className="mt-4 text-4xl lg:text-5xl !font-bold tracking-tight !text-[#2D1663]">
            ABOUT US
          </h2>
        </div>
        <section className="pb-4 bg-[#F8F6FD]">
          <Container fluid="xxl">
            <Row className="align-items-center bg-[#F8F6FD] rounded-4 p-5 p-lg-6 shadow-sm">
              <Col>
                <h1 className="font-bold leading-tight !text-[#2D1663]">
                  <span className="block text-[21px] md:text-[30px] xl:text-[41px]">
                    Building Strong Teams.
                  </span>

                  <span className="text-[#F47C20] block mt-2 text-[21px] md:text-[30px] xl:text-[41px]">
                    Creating Lasting Success
                  </span>
                </h1>
                <p className="mt-8 text-lg leading-8 text-gray-600">
                  Every organization has a vision. Behind every vision are the
                  people who bring it to life.
                </p>

                <p className="mt-2 text-lg leading-8 text-gray-600">
                  KimayaHiring Solutions was founded on a powerful belief:
                  <strong className="text-[#2D1663]">
                    {" "}
                    the right talent has the power to transform businesses,
                    careers, and communities.
                  </strong>
                </p>
              </Col>
              <Col lg={6} className="mt-5 mt-lg-0">
                <div>
                  <h1 className="font-bold leading-tight !text-[#2D1663]">
                    <span className="block text-[21px] md:text-[30px] xl:text-[41px]">
                      A Message From Our Founder
                    </span>
                  </h1>
                  <p className="text-gray-600 leading-8">
                    Whether you are a startup building your first engineering
                    team or an enterprise expanding globally, we become your
                    trusted talent partner — understanding your culture,
                    business objectives, and long-term vision to deliver hiring
                    solutions that create lasting value.
                  </p>
                  <div className="flex justify-content-end">
                    <span className="mt-2 text-lg font-semibold text-[#2D1663]">
                      Warm Regards,<br />
                      <span className="text-[#F47C20] font-bold mt-2">
                      Sindhuja Hattekar<br />
                    </span>

                    <span className="text-gray-500">
                      Founder & CEO
                      <br />
                      KimayaHiring Solutions Pvt. Ltd.
                    </span>
                    </span>

                    
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="py-10">
          <Container fluid="xxl">
            <div className="text-center mb-5">
                <h2 className="mt-4 text-4xl lg:text-5xl !font-bold tracking-tight !text-[#2D1663]">
            WHO WE ARE
          </h2>
            </div>

            <p className="text-center mx-auto text-lg leading-9 text-gray-600 max-w-5xl">
              KimayaHiring Solutions Pvt. Ltd. is a strategic talent acquisition
              and workforce consulting company committed to helping
              organizations build high-performing teams. Our expertise spans
              recruitment, executive search, workforce planning, HR consulting,
              and corporate learning solutions. We work as an extension of our
              clients' businesses, ensuring every hiring decision contributes to
              sustainable organizational growth. Our consultative approach,
              industry understanding, and commitment to excellence enable us to
              deliver quality talent solutions with speed, precision, and
              integrity.
            </p>
          </Container>
        </section>
      </section>
    </>
  );
};

export default Aboutus;
