import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  FaUserTie,
  FaIndustry,
  FaCheckCircle,
  FaBolt,
  FaHandshake,
} from "react-icons/fa";

const features = [
  {
    icon: <FaUserTie />,
    title: "Consultative Approach",
    description:
      "We take the time to understand your business, culture and hiring goals to deliver talent that truly fits your organization.",
  },
  {
    icon: <FaIndustry />,
    title: "Industry Expertise",
    description:
      "Our recruiters specialize across Technology, Healthcare, Manufacturing, Finance, Education and Global Capability Centers.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Quality Talent",
    description:
      "Every candidate is carefully screened for technical skills, experience and cultural alignment before presentation.",
  },
  {
    icon: <FaBolt />,
    title: "Fast Turnaround",
    description:
      "Efficient hiring processes and an extensive talent network help us reduce time-to-hire without compromising quality.",
  },
  {
    icon: <FaHandshake />,
    title: "Long-Term Partnership",
    description:
      "We believe in building lasting client relationships by becoming a trusted extension of your recruitment team.",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white">
      <Container fluid="xxl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h className="text-xl lg:text-2xl font-bold tracking-tight text-[#2D1663]">
            Why Choose Us
          </h>
          <p className="font-bold leading-tight !text-[#2D1663] mt-2">
            <span className="text-[21px]">Why Partner With </span>

            <span className="text-orange-500 text-[21px]">Kimaya Hiring?</span>
          </p>
          <p className="text-gray-600 leading-8 mt-6 text-sm">
            We combine industry expertise, strategic recruitment and a
            consultative approach to help organizations build exceptional teams
            that drive long-term business success.
          </p>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Row className="g-4">
            {features.map((item, index) => (
              <Col md={4} key={index}>
                <motion.div
                  variants={cardVariants}
                  whileHover={{ y: -8, scale: 1.01 }}
                  className="group h-100 bg-[#F8F6FD] rounded-4 p-3 border border-transparent hover:border-orange-500 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex flex-col justify-center items-center text-center">
                    <div className="flex-shrink-0">
                      <motion.div
                        whileHover={{ rotate: 6, scale: 1.08 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="w-16 h-16 rounded-full bg-[#2D1663] text-white flex items-center justify-center text-2xl group-hover:bg-orange-500 transition-colors duration-300"
                      >
                        {item.icon}
                      </motion.div>
                    </div>

                    <div className="ms-4 mt-6">
                      <h className="text-lg font-bold text-[#2D1663]">
                        {item.title}
                      </h>

                      <p className="text-gray-600 mt-3 leading-8 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
