import { Container } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import heroImage from "../assets/hero-webp2.png";
import pattern from "../assets/bg-pattern.png";
import curve from "../assets/curve.svg";
import users from "../assets/users.svg";
import { NavLink } from "react-router-dom";

export default function Hero() {
  return (
    
    <section className="relative overflow-hidden bg-white">

      {/* Left Pattern */}
      <img
        src={pattern}
        alt=""
        className="absolute left-0 top-0 h-full w-[45%] object-cover opacity-20 
        pointer-events-none"
      />

      <Container fluid="xxl">

        <div className="relative flex flex-col lg:flex-row min-h-[580px]">

          {/* LEFT */}

          <div className="w-full lg:w-[45%] flex items-center py-12 lg:py-0 z-10">

            <div>

              <h1 className="font-bold leading-tight !text-[#2D1663]">

                <span className="block text-[21px] md:text-[30px] xl:text-[41px]">
                  Building
                  <span className="text-[#F47C20]">
                    {" "}Exceptional
                  </span>
                  {" "}Teams.
                </span>

                <span className="block mt-2 text-[21px] md:text-[30px] xl:text-[41px]">
                  Creating Lasting
                  <span className="text-[#F47C20]">
                    {" "}Partnerships.
                  </span>
                </span>

              </h1>
              <p className="text-base md:text-xl leading-10 text-[#2D1663] max-w-lg">
                Strategic Talent Acquisition &
                <br />
                Workforce Consulting
              </p>

              <div className="flex flex-wrap gap-6 md:mt-5">

                <button className="bg-[#F47C20] hover:bg-orange-600 transition
                 text-white px-8 py-2 !rounded-sm flex items-center gap-3 
                 font-semibold">
                  Let's Build Your Team
                  <FaArrowRight />
                </button>
                <NavLink
            to={"/service"}
className="border !border-[#2D1663] hover:bg-[#2D1663] !no-underline
                hover:text-white transition !text-[#2D1663] px-8 py-2 !rounded-sm 
                flex items-center gap-3 font-semibold"          >
            Explore Services
            <FaArrowRight />
          </NavLink>

                {/* <button className="border !border-[#2D1663] hover:bg-[#2D1663] 
                hover:text-white transition text-[#2D1663] px-8 py-2 !rounded-sm 
                flex items-center gap-3 font-semibold">
                  Explore Services
                  <FaArrowRight />
                </button> */}

              </div>

              <div className="flex flex-wrap text-[#2D1663] items-center gap-2 mt-3 md:mt-10">

                <img
                  src={users}
                  alt=""
                  className="w-6 md:w-12"
                />

                <span className="">
                  Trusted by Startups
                </span>

                <span className="text-orange-500">|</span>

                <span>MSMEs</span>

                <span className="text-orange-500">|</span>

                <span>Growing Enterprises</span>

              </div>

            </div>

          </div>

          {/* RIGHT IMAGE */}

          <div className="relative w-full lg:w-[55%]">

            <img
              src={heroImage}
              alt=""
              className="w-full h-full object-contain"
            />

            {/* White Fade */}

            <div className="absolute left-0 top-0 md:w-7 h-full bg-gradient-to-r from-white to-transparent"></div>

          </div>

        </div>

      </Container>

      {/* Bottom Curve */}

      <img
        src={curve}
        alt=""
  className="absolute bottom-0 left-0 w-full h-13 md:h-30"
      />

    </section>
    
    
    );
}