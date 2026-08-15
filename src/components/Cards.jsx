import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaBullseye, FaEye, FaHandshake } from "react-icons/fa";

const cards = [
  {
    icon: <FaBullseye />,
    title: "Our Mission",
    text: "To connect organizations with exceptional talent while creating meaningful career opportunities through strategic recruitment, workforce consulting and long-term partnerships.",
    color: "from-[#2D1663] to-[#4A2B8C]",
  },
  {
    icon: <FaEye />,
    title: "Our Vision",
    text: "To become one of India's most trusted strategic talent acquisition partners by delivering innovative hiring solutions that empower businesses and professionals.",
    color: "from-orange-500 to-[#FF9B4A]",
  },
  {
    icon: <FaHandshake />,
    title: "Our Values",
    text: "Integrity, Partnership, Excellence, Innovation, Trust and Long-term Relationships guide every decision we make and every client we serve.",
    color: "from-[#2D1663] to-orange-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
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

const Cards = () => {
  return (
    <section className="py-5 bg-[#F8F6FD]">
      <Container fluid="xxl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h className="text-xl lg:text-2xl font-bold tracking-tight text-[#2D1663]">
            Our Foundation
          </h>
          <p className="font-bold leading-tight !text-[#2D1663] mt-2">
            <span className="text-[21px]">Mission, Vision</span>

            <span className="text-orange-500 text-[21px]"> & Values</span>
          </p>
          <p className="text-gray-600 leading-8 text-sm mt-6">
            Everything we do is driven by our commitment to connecting the right
            talent with the right opportunities while building lasting
            partnerships with our clients.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Row className="g-4">
            {cards.map((card, index) => (
              <Col md={4} sm={12} key={index}>
                <motion.div
                  variants={cardVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="flex flex-col group items-center text-center bg-white rounded-4 p-3 h-100 border border-gray-200 shadow-sm hover:shadow-2xl transition-all duration-500"
                >
                  <div
                    className={`w-20 h-20 mb-4 rounded-full bg-gradient-to-r ${card.color} flex items-center justify-center text-white text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    {card.icon}
                  </div>

                  <h className="text-sm font-bold text-[#2D1663] mt-1">
                    {card.title}
                  </h>
                  <p className="text-gray-600 leading-8 text-sm">{card.text}</p>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default Cards;
