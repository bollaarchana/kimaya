import { Link, useLocation } from "react-router-dom";
import logo from "../../public/images/kimaya.logo.jpeg"; // change path

const Footer = () => {
  const location = useLocation();

  const handleHomeClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();

      // Remove #industries
      window.history.replaceState(null, "", "/");

      // Go to top
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <footer className="relative bg-[#080B11] text-gray-300 pt-16 pb-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/10 via-transparent to-black/70 pointer-events-none"></div>
        <div className="relative container mx-auto px-6 md:px-12 z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
            <div className="flex flex-col items-center text-center md:text-left space-y-4">
              <img
                alt="Company Logo"
                className="w-58 h-auto mb-2 drop-shadow-lg bg-white"
                src={logo}
              />
              <p className="text-gray-400 text-center leading-relaxed max-w-xs text-sm">
                When the right people meet the right opportunities,
                extraordinary things happen
              </p>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-4 relative after:content-[''] after:block after:w-10 after:h-1 after:bg-cyan-500 after:mt-2">
                Our Services
              </h3>
              <div className="grid grid-cols-1 gap-y-3 text-gray-400 text-sm">
                <div className="flex items-center gap-2 hover:text-cyan-400 transition-all duration-300">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-cyan-400 w-5 h-5"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="8.5" cy="7" r="4"></circle>
                    <polyline points="17 11 19 13 23 9"></polyline>
                  </svg>
                  <span>IT Recruitment</span>
                </div>
                <div className="flex items-center gap-2 hover:text-cyan-400 transition-all duration-300">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 640 512"
                    className="text-cyan-400 w-5 h-5"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M32,224H64V416H32A31.96166,31.96166,0,0,1,0,384V256A31.96166,31.96166,0,0,1,32,224Zm512-48V448a64.06328,64.06328,0,0,1-64,64H160a64.06328,64.06328,0,0,1-64-64V176a79.974,79.974,0,0,1,80-80H288V32a32,32,0,0,1,64,0V96H464A79.974,79.974,0,0,1,544,176ZM264,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,264,256Zm-8,128H192v32h64Zm96,0H288v32h64ZM456,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,456,256Zm-8,128H384v32h64ZM640,256V384a31.96166,31.96166,0,0,1-32,32H576V224h32A31.96166,31.96166,0,0,1,640,256Z"></path>
                  </svg>
                  <span>Executive Search</span>
                </div>
                <div className="flex items-center gap-2 hover:text-cyan-400 transition-all duration-300">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-cyan-400 w-5 h-5"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                  </svg>
                  <span>Contract Staffing</span>
                </div>
                <div className="flex items-center gap-2 hover:text-cyan-400 transition-all duration-300">
                  {/* <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-cyan-400 w-5 h-5"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                    <polyline points="17 6 23 6 23 12"></polyline>
                  </svg>  */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 20 20"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-cyan-400 w-5 h-5"
                    height="1em"
                    width="1em"
                  >
                    <path d="M8 9.05a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                    <path d="M1 1a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h.5a.5.5 0 0 0 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5h.5a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H6.707L6 1.293A1 1 0 0 0 5.293 1zm0 1h4.293L6 2.707A1 1 0 0 0 6.707 3H15v10h-.085a1.5 1.5 0 0 0-2.4-.63C11.885 11.223 10.554 10 8 10c-2.555 0-3.886 1.224-4.514 2.37a1.5 1.5 0 0 0-2.4.63H1z" />
                  </svg>
                  <span>HR Consulting</span>
                </div>
                <div className="flex items-center gap-2 hover:text-cyan-400 transition-all duration-300">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-cyan-400 w-5 h-5"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                    <polyline points="2 17 12 22 22 17"></polyline>
                    <polyline points="2 12 12 17 22 12"></polyline>
                  </svg>

                  <span>Corporate Training</span>
                </div>
                <div className="flex items-center gap-2 hover:text-cyan-400 transition-all duration-300">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-cyan-400 w-5 h-5"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9 18h6" />
                    <path d="M10 21h4" />
                    <path d="M8 9a4 4 0 1 1 8 0c0 1.7-.8 2.8-1.8 3.8-.6.6-1.2 1.3-1.2 2.2h-2c0-.9-.6-1.6-1.2-2.2C8.8 11.8 8 10.7 8 9z" />
                    <path d="M12 2v2" />
                    <path d="M4 9H2" />
                    <path d="M22 9h-2" />
                    <path d="M6.2 4.2 7.6 5.6" />
                    <path d="M17.8 4.2 16.4 5.6" />
                    <path d="M12 12.2l1 1.8 2 .3-1.4 1.4.3 2-1.9-1-1.9 1 .3-2-1.4-1.4 2-.3z" />
                  </svg>
                  <span>Talent Acquisition Outsourcing</span>
                </div>
                <div className="flex items-center gap-2 hover:text-cyan-400 transition-all duration-300">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-cyan-400 w-5 h-5"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M4 7h16" />
                    <path d="M6 7v10" />
                    <path d="M10 7v10" />
                    <path d="M14 7v10" />
                    <path d="M18 7v10" />
                    <path d="M4 17h16" />
                    <path d="M8 3l4 4 4-4" />
                    <path d="M12 11v6" />
                  </svg>
                  <span>Training & Coaching</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-4 relative after:content-[''] after:block after:w-10 after:h-1 after:bg-cyan-500 after:mt-2">
                Quick Links
              </h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <Link
                    to={"/"}
                    onClick={handleHomeClick}
                    className="hover:text-white transition-colors"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    to={"/aboutus"}
                    className="hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/service"
                    className="hover:text-white transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/#industries"}
                    className="hover:text-white transition-colors"
                  >
                    Industries
                  </Link>
                </li>
                {/* <li>
                  <Link to={"/insights"} className="hover:text-white transition-colors">
                    Insights
                  </Link>
                </li>
                <li>
                  <Link to={"/careers"} className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li> */}
                <li>
                  <Link
                    to={"/contact"}
                    className="hover:text-white transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-4 relative after:content-[''] after:block after:w-10 after:h-1 after:bg-cyan-500 after:mt-2">
                Contact Us
              </h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-start gap-2">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=Kimaya+Hiring+Solutions+Pvt+Ltd,+Unit+No+203,+2nd+Floor+Suite+No+441,+SBR+CV+Towers,+Sector-I,+Sy+No+64,+HUDA+Techno+Enclave,+Madhapur,+Hyderabad+500081"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Hyderabad, Telangana, India
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 text-cyan-400 flex-shrink-0"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <a
                    href="tel:+919908122284"
                    className="hover:text-white transition-colors"
                  >
                    +91-9908122284
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 text-cyan-400 flex-shrink-0"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=hr@kimayahiring.com&su=Job%20Enquiry"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    hr@kimayahiring.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr className="my-10 border-gray-700" />
          <div className="flex flex-col md:flex-row justify-center items-center text-center md:text-left gap-4">
            <p className="text-gray-500 text-sm">
              © 2026{" "}
              <span className="text-white font-semibold">
                Kimaya Hiring Solutions Pvt. Ltd.
              </span>{" "}
              — All Rights Reserved.
            </p>
            {/* <p className="text-gray-500 text-sm">
              Designed &amp; Developed by{" "}
              <a
                href="https://www.linkedin.com/in/vineeth-madishetti-4a7285150/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 font-semibold hover:text-cyan-300 underline transition-colors"
              >
                Vineeth Madishetti
              </a>
            </p> */}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
