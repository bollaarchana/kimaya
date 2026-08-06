const ContactUs = () => {
  return (
    <main className="flex-grow">
      <div className="bg-gray-50 min-h-screen">
        <section className="relative overflow-hidden bg-[#081A46] py-24">
  {/* Plus Pattern */}
  <div
    className="absolute inset-0 opacity-30"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg stroke='%237A8CA8' stroke-width='1'%3E%3Cpath d='M12 9v6M9 12h6'/%3E%3C/g%3E%3C/svg%3E")`,
      backgroundSize: "20px 20px",
    }}
  />

  {/* Blue Glow */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-blue-600/20 blur-[120px] rounded-full" />

  <div className="relative z-10 text-center">
    <h2 className="text-5xl font-bold text-white">
      <span className="px-3 py-1">Get In Touch</span> 
    </h2>

    <p className="mt-6 text-gray-300 max-w-3xl mx-auto">
      Have a query? We are here to help. Reach out to us via phone,
      WhatsApp, email or visit our office.
    </p>
  </div>
</section>
        
        {/* <section className="py-12 bg-white relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
    backgroundImage:
      "radial-gradient(circle, rgb(30, 41, 59) 1px, transparent 1px)",
    backgroundSize: "28px 28px",
  }}
          ></div>
          
        </section> */}
        <section
          className="py-16 md:py-24 bg-cover bg-center bg-no-repeat relative"
          style={{
    backgroundImage: 'url("/assets/contact-bg-BUzSl1Dv.avif")',
    backgroundColor: "rgb(10, 17, 40)",
  }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/80 to-black/90"></div>
          <div className="container mx-auto px-6 max-w-7xl relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
              <a
                href="tel:+919908122284"
                className="flex items-center md:items-start gap-4 
                                          group bg-white/5 p-5 rounded-2xl border border-white/5 md:bg-transparent 
                                          md:border-none md:p-0 transition-all duration-300 hover:bg-white/10"
                target="_self"
                rel="noreferrer"
              >
                <div
                  className="flex-shrink-0 w-8 h-8 rounded-full border border-white/20 
                                            flex items-center justify-center text-white group-hover:bg-brand-secondary 
                                            group-hover:text-brand-primary group-hover:border-brand-secondary 
                                            transition-all duration-300 shadow-lg"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-phone"
                    aria-hidden="true"
                  >
                    <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-[0.15em] text-brand-secondary font-bold mb-1">
                    Call / WhatsApp
                  </span>
                  <h6 className="text-[12px] md:text-lg font-bold text-white leading-tight mb-0.5">
                    +91 9908122284
                  </h6>
                  <p className="text-gray-400 text-xs font-medium">
                    Mon–Sat · 9am to 6pm
                  </p>
                </div>
              </a>
              <a
                href=""
                className="flex items-center md:items-start 
                                                      gap-4 group bg-white/5 p-5 rounded-2xl border border-white/5 md:bg-transparent md:border-none md:p-0 
                                                      transition-all duration-300 hover:bg-white/10"
                target="_self"
                rel="noreferrer"
              >
                <div
                  className="flex-shrink-0 w-8 h-8 rounded-full border border-white/20 flex items-center 
                                                        justify-center text-white group-hover:bg-brand-secondary group-hover:text-brand-primary 
                                                        group-hover:border-brand-secondary transition-all duration-300 shadow-lg"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-mail"
                    aria-hidden="true"
                  >
                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-[0.15em] text-brand-secondary font-bold mb-1">
                    Email Support
                  </span>
                  <h6 className="text-[12px] md:text-lg font-bold text-white leading-tight mb-0.5">
                    kimayahiring@gmail.com
                  </h6>
                  <p className="text-gray-400 text-xs font-medium">Fast Response</p>
                </div>
              </a>
              <a
                href=""
                className="flex items-center md:items-start gap-4 group bg-white/5 p-5 rounded-2xl 
                                                                  border border-white/5 md:bg-transparent md:border-none md:p-0 transition-all 
                                                                  duration-300 hover:bg-white/10"
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className="flex-shrink-0 w-8 h-8 rounded-full border border-white/20 flex items-center 
                                                                    justify-center text-white group-hover:bg-brand-secondary group-hover:text-brand-primary 
                                                                    group-hover:border-brand-secondary transition-all duration-300 shadow-lg"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-map-pin"
                    aria-hidden="true"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-[0.15em] text-brand-secondary font-bold mb-1">
                    Visit Office
                  </span>
                  <h6 className="text-[12px] md:text-lg font-bold text-white leading-tight mb-0.5">
                    Uppal, Hyderabad
                  </h6>
                  <p className="text-gray-400 text-xs font-medium">
                    Telangana, India
                  </p>
                </div>
              </a>
            </div>
            {/* <div className="mb-20 md:mb-24">
              <div
                className="bg-white rounded-3xl md:rounded-[2.5rem] shadow-2xl overflow-hidden border 
                                                                                border-white/30"
              >
                <div className="w-full h-[400px] md:h-[450px]">
                  <iframe
                    title="Office Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!
                                                                                  1d15225.90693636656!2d78.357567!3d17.4425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f1
                                                                                  3.1!3m3!1m2!1s0x3bcb93dc8c5d69df%3A0x19688eb5c550c0!2sGachibowli%2C%20
                                                                                  Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    allowFullScreen=""
                    loading="lazy"
                    className="w-full h-full object-cover"
                    style={{border: "0px"}}
                  ></iframe>
                </div>
                <div
                  className="p-6 md:p-8 bg-white flex flex-col md:flex-row items-center 
                                                                                  justify-between gap-4"
                >
                  <div>
                    <h3
                      className="text-xl font-bold font-serif 
                                                                                  text-brand-primary mb-1"
                    >
                      Visit Our Office
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Walk-ins welcome Mon-Sat. We are happy to guide you
                      personally.
                    </p>
                  </div>
                  <a
                    href="https://maps.app.goo.gl/g74W6BfGBTvtEprT6?g_st=awb"
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-2 bg-brand-light text-brand-primary font-bold rounded-lg 
                                                                                  hover:bg-blue-100 transition-colors text-sm"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </div> */}
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">
                Join Our Community
              </h3>
              <p className="text-gray-300 mb-10 max-w-2xl mx-auto text-sm md:text-base">
                Stay connected with us for education tips, tutor opportunities,
                and success stories.
              </p>
              <div
                className="grid grid-cols-2 lg:grid-cols-4 gap-4 
                                                                                        md:gap-8 max-w-5xl mx-auto"
              >
                <a
                  href="https://www.instagram.com/kimayahiring?igsh=czZ3eTRqYzJjMmNx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white/10 backdrop-blur-md rounded-2xl 
                                                                                          md:rounded-3xl p-6 md:p-8 flex flex-col items-center gap-3 transition-all duration-300 shadow-xl 
                                                                                          hover:-translate-y-2 border border-white/5 hover:bg-pink-600 hover:text-white"
                >
                  <div className="p-3 bg-white/10 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-instagram text-white transition-transform"
                      aria-hidden="true"
                    >
                      <rect
                        width="20"
                        height="20"
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                    </svg>
                  </div>
                  <span className="text-white font-bold text-sm md:text-lg">
                    Instagram
                  </span>
                </a>
                <a
                  href="https://www.facebook.com/people/KimayaHiring/61593091495829/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white/10 backdrop-blur-md 
                                                                                              rounded-2xl md:rounded-3xl p-6 md:p-8 flex flex-col items-center gap-3 
                                                                                              transition-all duration-300 shadow-xl hover:-translate-y-2 border 
                                                                                              border-white/5 hover:bg-[#0866FF] hover:text-white"
                >
                  <div className="p-3 bg-white/10 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-facebook text-white 
                                                                                                transition-transform"
                      aria-hidden="true"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </div>
                  <span className="text-white font-bold text-sm md:text-lg">
                    Facebook
                  </span>
                </a>
                <a
                  href="https://www.facebook.com/people/KimayaHiring/61593091495829/"
                  target="_blank"
                  rel="noopener 
                                                                                                    noreferrer"
                  className="group bg-white/10 backdrop-blur-md rounded-2xl 
                                                                                                    md:rounded-3xl p-6 md:p-8 flex flex-col items-center gap-3 
                                                                                                    transition-all duration-300 shadow-xl hover:-translate-y-2 border 
                                                                                                    border-white/5 hover:bg-[#0A66C2] hover:text-white"
                >
                  <div className="p-3 bg-white/10 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-linkedin 
                                                                                                      text-white transition-transform"
                      aria-hidden="true"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </div>
                  <span className="text-white font-bold text-sm md:text-lg">
                    LinkedIn
                  </span>
                </a>
                <a
                  href="+91-9908122284"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white/10 backdrop-blur-md rounded-2xl md:rounded-3xl p-6 
                                                                                                         md:p-8 flex flex-col items-center gap-3 transition-all duration-300 
                                                                                                         shadow-xl hover:-translate-y-2 border border-white/5 hover:bg-green-600 
                                                                                                         hover:text-white"
                >
                  <div className="p-3 bg-white/10 rounded-full">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 448 512"
                      className="text-white transition-transform"
                      height="28"
                      width="28"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 
                                                                                                            111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 
                                                                                                            224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 
                                                                                                            18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 
                                                                                                            184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 
                                                                                                            101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 
                                                                                                            2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 
                                                                                                            5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 
                                                                                                            0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 
                                                                                                            94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 
                                                                                                            3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-white font-bold text-sm md:text-lg">
                    WhatsApp
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>
        <div
          className="w-full opacity-10"
          style={{backgroundImage: "radial-gradient(rgb(30, 41, 59) 1px, transparent 1px", backgroundSize: "20px 20px"}}
        ></div>
      </div>
    </main>
  );
};

export default ContactUs;
