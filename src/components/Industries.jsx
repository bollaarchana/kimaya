import { Container, Row, Col } from "react-bootstrap";
import industryMap from "../assets/industries.png";

const features = [
  {
    title: "Domain Specialists",
    description:
      "Recruiters with deep industry knowledge and specialized talent networks.",
  },
  {
    title: "Faster Hiring",
    description:
      "Reduced hiring time through targeted sourcing and market expertise.",
  },
  {
    title: "Quality Candidates",
    description:
      "Professionals who match your technical, cultural, and business needs.",
  },
  {
    title: "Global Reach",
    description:
      "Supporting enterprises and GCCs with international hiring capabilities.",
  },
];

const industries = [
  {
    title: "Technology & Innovation",
    color: "#3B82F6",
    items: ["Technology", "Startups", "Engineering"],
  },
  {
    title: "Healthcare & Life Sciences",
    color: "#EC4899",
    items: ["Healthcare", "Life Sciences", "Pharmaceuticals"],
  },
  {
    title: "Business & Finance",
    color: "#84CC16",
    items: ["Banking & Financial Services", "Retail", "Manufacturing"],
  },
  {
    title: "Education & Emerging",
    color: "#F59E0B",
    items: ["Education", "MSMEs", "Global Capability Centers"],
  },
];

const Industries = () => {
  return (
    <>
      <section className="bg-[#F8F6FD] pt-4">
        <Container fluid="xxl">
          <div className="text-center max-w-4xl mx-auto">
            
          <h className="mt-4 text-xl lg:text-2xl font-bold tracking-tight text-[#2D1663]">
            INDUSTRIES
          </h>
            <p className="mt-8 text-sm leading-8 text-gray-600">
              Kimaya Hiring brings deep domain expertise across a diverse range
              of industries—from high-growth technology startups to regulated
              healthcare, finance, manufacturing, education, and Global
              Capability Centers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-5">
            {industries.map((item, index) => (
              <div
                key={index}
                className="rounded-3xl border-2 p-10 bg-white transition hover:shadow-xl"
                style={{ borderColor: item.color }}
              >
                <h className="text-lg font-bold text-[#2D1663] mb-8">
                  {item.title}
                </h>

                <ul className="space-y-5">
                  {item.items.map((x, i) => (
                    <li key={i} className="flex items-center mt-4 gap-3 text-sm">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ background: item.color }}
                      ></div>

                      {x}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          </Container>
          <div className="py-20 bg-[#2D1663]">
            <div className="text-center text-white max-w-3xl mx-auto">
              <h className="text-2xl font-bold">
                Let's Build Your Winning Team
              </h>

              <p className="!my-8 text-sm opacity-90 leading-8">
                Looking for industry-specific talent? Partner with Kimaya Hiring
                to find professionals who make an immediate impact.
              </p>
              <a
                  href="tel:+919908122284"
              className="bg-orange-500 px-10 py-4 rounded-xl text-white font-semibold hover:bg-orange-600 transition">
                Request Consultation
                </a>

              {/* <button 
              className="mt-10 bg-orange-500 px-10 py-4 rounded-xl text-white font-semibold hover:bg-orange-600 transition">
                
                Request Consultation
              </button> */}
            </div>
          </div>
        
      </section>
    </>
  );
};

export default Industries;
