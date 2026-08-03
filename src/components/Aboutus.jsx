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
icon:<FaBullseye />,
title:"Our Mission",
text:"To connect organizations with exceptional talent while creating meaningful career opportunities."
},

{
icon:<FaEye />,
title:"Our Vision",
text:"To become one of India's most trusted strategic talent acquisition partners."
},

{
icon:<FaHandshake />,
title:"Our Values",
text:"Integrity, Partnership, Excellence, Innovation, Trust and Long-term Relationships."
}

];

const Aboutus = () => {
  return(
    <>
    <section className="py-24 bg-[#F8F6FD]">

    <Container fluid="xxl">

        <Row className="align-items-center">

            <Col lg={6}>

                <span className="uppercase tracking-[4px] text-[#F47C20] font-semibold">
                    About Us
                </span>

                <h1 className="mt-4 text-5xl lg:text-6xl font-bold text-[#2D1663] leading-tight">

                    Building Strong Teams.

                    <span className="text-[#F47C20]">
                        Creating Lasting Success.
                    </span>

                </h1>

                <div className="w-20 h-1 bg-[#F47C20] mt-6 rounded-full"></div>

                <p className="mt-8 text-lg leading-8 text-gray-600">

                    Every organization has a vision. Behind every vision are the
                    people who bring it to life.

                </p>

                <p className="mt-5 text-lg leading-8 text-gray-600">

                    KimayaHiring Solutions was founded on a powerful belief:
                    <strong className="text-[#2D1663]">
                        {" "}the right talent has the power to transform businesses,
                        careers, and communities.
                    </strong>

                </p>

            </Col>

            <Col lg={6} className="mt-5 mt-lg-0">

                <img
                    src={""}
                    className="rounded-4 shadow-lg w-100"
                    alt="Founder"
                />

            </Col>

        </Row>

    </Container>

</section>

<section className="py-20 bg-white">

<Container fluid="xxl">

<div className="bg-[#F8F6FD] rounded-4 p-5 p-lg-6 shadow-sm">

<h2 className="text-4xl font-bold text-[#2D1663]">
A Message From Our Founder
</h2>

<div className="w-16 h-1 bg-[#F47C20] mt-4 mb-5"></div>

<p className="text-gray-600 leading-8">

Whether you are a startup building your first engineering team or an enterprise
expanding globally, we become your trusted talent partner — understanding your
culture, business objectives, and long-term vision to deliver hiring solutions
that create lasting value.

</p>

<p className="mt-5 text-lg font-semibold text-[#2D1663]">

Warm Regards,

</p>

<h4 className="text-[#F47C20] font-bold mt-2">

Sindhuja Hattekar

</h4>

<p className="text-gray-500">

Founder & CEO

<br />

KimayaHiring Solutions Pvt. Ltd.

</p>

</div>

</Container>

</section>
<section className="py-20">

<Container fluid="xxl">

<div className="text-center mb-5">

<h2 className="text-5xl font-bold text-[#2D1663]">

Who We Are

</h2>

<div className="w-20 h-1 bg-[#F47C20] mx-auto mt-4"></div>

</div>

<p className="text-center mx-auto text-lg leading-9 text-gray-600 max-w-5xl">

KimayaHiring Solutions Pvt. Ltd. is a strategic talent acquisition and workforce
consulting company committed to helping organizations build high-performing
teams.

Our expertise spans recruitment, executive search, workforce planning,
HR consulting, and corporate learning solutions.

We work as an extension of our clients' businesses, ensuring every hiring
decision contributes to sustainable organizational growth.

Our consultative approach, industry understanding, and commitment to excellence
enable us to deliver quality talent solutions with speed, precision, and
integrity.

</p>

</Container>

</section>
    </>
  )
}

export default Aboutus
