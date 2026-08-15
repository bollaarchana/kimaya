// import { Row, Col } from "react-bootstrap";
// import { NavLink } from "react-router-dom";
// import { FaArrowRight } from "react-icons/fa";

// const AboutusHome = () => {
//   return (
//     <>
//       <section className="container relative items-center overflow-hidden bg-[#F8F6FD] py-3">
//         <div className="container text-center mb-2 max-w-3xl mx-auto">
//           <h className="mt-4 text-3xl lg:text-4xl font-extrabold text-primary-text tracking-tight text-[#2D1663]">
//             ABOUT US
//           </h>
//         </div>
//             <Row className="align-items-center bg-[#F8F6FD] rounded-4 py-2 shadow-sm">
//               <Col>
//                 <p className="font-bold leading-tight !text-[#2D1663]">
//                   <span className="block text-[21px]">
//                     Building Strong Teams.
//                   </span>

//                   <span className="text-orange-500 block mt-2 text-[21px]">
//                     Creating Lasting Success
//                   </span>
//                 </p>
//                 <p className="mt-8 text-sm leading-8 text-gray-600">
//                   Every organization has a vision. Behind every vision are the
//                   people who bring it to life.
//                 </p>

//                 <p className="mt-2 text-sm leading-8 text-gray-600">
//                   Kimaya Hiring Solutions was founded on a powerful belief:
//                   <strong className="text-[#2D1663]">
//                     {" "}
//                     the right talent has the power to transform businesses,
//                     careers, and communities.
//                   </strong>
//                 </p>
//               </Col>
//               <Col lg={6} className="mt-5 mt-lg-0">
//                 <div>
//                   <p className="font-bold leading-tight text-orange-500">
//                     <span className="block text-[21px]">
//                       A Message From Our Founder
//                     </span>
//                   </p>
//                 <p className="mt-8 text-sm leading-8 text-gray-600">
//                     Whether you are a startup building your first engineering
//                     team or an enterprise expanding globally, we become your
//                     trusted talent partner — understanding your culture,
//                     business objectives, and long-term vision to deliver hiring
//                     solutions that create lasting value.
//                   </p>
//                   <div className="flex justify-content-start">
//                     <span className="mt-2 text-sm font-semibold text-[#2D1663]">
//                       Warm Regards,
//                       <br />
//                       <span className="text-orange-500 font-bold mt-2">
//                         Sindhuja Hattekar
//                         <br />
//                       </span>
//                       <span className="text-gray-500">
//                         Founder & CEO
//                         <br />
//                         Kimaya Hiring Solutions Pvt. Ltd.
//                       </span>
//                     </span>
//                   </div>
//                 </div>
//               </Col>
//           <div className="text-center py-10">
//             <h className="mt-4 text-3xl lg:text-4xl font-extrabold text-primary-text tracking-tight text-[#2D1663]">
//               WHO WE ARE
//             </h>

//           <p className="mx-auto text-sm leading-8 mt-2 text-gray-600 max-w-5xl">
//             Kimaya Hiring Solutions Pvt. Ltd. is a strategic talent acquisition
//             and workforce consulting company committed to helping organizations
//             build high-performing teams. Our expertise spans recruitment,
//             executive search, workforce planning, HR consulting, and corporate
//             learning solutions. We work as an extension of our clients'
//             businesses, ensuring every hiring decision contributes to
//             sustainable organizational growth. Our consultative approach,
//             industry understanding, and commitment to excellence enable us to
//             deliver quality talent solutions with speed, precision, and
//             integrity.
//           </p>
//                         </div>
//       {/* </Container>

//         </section> */}
//         <div className="flex justify-content-end">
//           <NavLink
//             to={"/aboutus"}
//             className="hover:text-white !text-[#2D1663] px-8 py-2 
//                         flex items-center gap-3 font-semibold"
//           >
//             Read More
//             <FaArrowRight />
//           </NavLink>
//         </div>
//         </Row>
//       </section>
//     </>
//   );
// };

// export default AboutusHome;


import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

import aboutImage from "../assets/about.png";

const AboutusHome = () => {
  return (
    <section className="relative overflow-hidden bg-white py-4">

      {/* Decorative background */}
      <div className="absolute top-20 -left-32 w-72 h-72 rounded-full bg-[#F5F1FD] opacity-70 blur-3xl pointer-events-none" />

      <div className="absolute bottom-10 -right-32 w-80 h-80 rounded-full bg-[#FFF5EE] opacity-70 blur-3xl pointer-events-none" />

      <Container fluid="xxl" className="relative z-10">
        <div className="container text-center max-w-3xl mx-auto mb-10">
           <h className="mt-4 text-3xl lg:text-4xl font-extrabold text-primary-text tracking-tight text-[#2D1663]">
             ABOUT US
           </h>
         </div>
        {/* ================= ABOUT + FOUNDER ================= */}

        <Row className="align-items-center g-4">

          {/* IMAGE */}
          <Col lg={6}>

            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >

              {/* Orange decorative box */}
              <div className="absolute -left-4 -bottom-4 w-32 h-32 bg-[#F47C20] rounded-3xl opacity-20" />

              <div className="relative overflow-hidden rounded-[30px] shadow-2xl">

                <img
                  src={aboutImage}
                  alt="KimayaHiring team"
                  loading="lazy"
                  className="w-full mt-0 object-contain transition-transform duration-700 hover:scale-105"
                />

              </div>

              {/* Experience badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -bottom-16 -right-2 bg-[#2D1663] text-white rounded-2xl px-3 py-1 shadow-xl"
              >
                <p className="text-lg font-bold text-[#F47C20]">
                  100%
                </p>

                <p className="text-xs">
                  Talent Focused
                </p>
              </motion.div>

            </motion.div>

          </Col>

          {/* CONTENT */}
          <Col lg={6}>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >

             
              <p className="mt-5 text-base lg:text-lg leading-8 text-gray-600">
                Kimaya Hiring Solutions was founded on a powerful belief:
                <strong className="text-[#2D1663]">
                  {" "}the right talent has the power to transform businesses,
                  careers, and communities.
                </strong>
              </p>

              {/* Founder card */}
              <div className="mt-2 p-6 rounded-2xl bg-[#F8F6FD] border-l-4 border-[#F47C20]">

                <p className="text-[#F47C20] font-semibold text-lg">
                  A Message From Our Founder
                </p>

      <p className="mx-auto text-sm leading-8 mt-2 text-gray-600 max-w-5xl">
                  Whether you are a startup building your first engineering
                  team or an enterprise expanding globally, we become your
                  trusted talent partner — understanding your culture,
                  business objectives, and long-term vision to deliver hiring
                  solutions that create lasting value.
                </p>

                <div className="mt-3">

                  <p className="font-semibold text-[#2D1663]">
                    Warm Regards,
                  </p>

                  <p className="mt-1 font-bold text-[#F47C20]">
                    Sindhuja Hattekar
                  </p>

                  <p className="text-gray-500 text-sm">
                    Founder & CEO
                    <br />
                    Kimaya Hiring Solutions Pvt. Ltd.
                  </p>

                </div>

              </div>

            </motion.div>

          </Col>

        </Row>


        {/* ================= WHO WE ARE ================= */}

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mt-6 pt-4"
        >

          <Row className="justify-content-center">

            <Col lg={10}>

              <div className="text-center">

                
             <h className="mt-6 text-3xl lg:text-4xl font-extrabold text-primary-text tracking-tight text-[#2D1663]">
               WHO WE ARE
             </h>


                <p className="mt-3 leading-tight text-[#2D1663] text-3xl lg:text-3xl font-extrabold text-primary-text tracking-tight mb-6">
                <span className="block">
                  Strategic Talent.
                  <span className="text-orange-500"> Exceptional</span> Teams.
                </span>

                <span className="block mt-2">
                    {" "}Meaningful Impact.
                  <span className="text-orange-500"> Partnerships.</span>
                </span>
              </p>


        <p className="mx-auto text-sm leading-8 mt-2 text-gray-600 max-w-5xl">
                  Kimaya Hiring Solutions Pvt. Ltd. is a strategic talent
                  acquisition and workforce consulting company committed to
                  helping organizations build high-performing teams. Our
                  expertise spans recruitment, executive search, workforce
                  planning, HR consulting, and corporate learning solutions.
                  We work as an extension of our clients' businesses, ensuring
                  every hiring decision contributes to sustainable
                  organizational growth.
                </p>

          <p className="mx-auto text-sm leading-8 mt-2 text-gray-600 max-w-5xl">
                  Our consultative approach, industry understanding, and
                  commitment to excellence enable us to deliver quality talent
                  solutions with speed, precision, and integrity.
                </p>

              </div>

            </Col>

          </Row>


          {/* Small feature points */}

          {/* <Row className="justify-content-center mt-10 g-4">

            {[
              "Industry Expertise",
              "Quality Talent",
              "Strategic Hiring",
              "Long-Term Partnerships",
            ].map((item, index) => (

              <Col sm={6} lg={3} key={index}>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="flex items-center justify-center gap-2 p-4 rounded-xl bg-[#F8F6FD] hover:bg-[#2D1663] hover:text-white transition-all duration-300"
                >

                  <FaCheckCircle className="text-[#F47C20] flex-shrink-0" />

                  <span className="font-semibold text-sm">
                    {item}
                  </span>

                </motion.div>

              </Col>

            ))}

          </Row> */}


          {/* Read More */}

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
      
        </motion.div>

      </Container>

    </section>
  );
};

export default AboutusHome;