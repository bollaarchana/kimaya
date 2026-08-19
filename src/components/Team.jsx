import { useState } from "react";
import { Users } from "lucide-react";
const teamMembers = [
  {
    name: "Sonali Mohite",
    role: "Sr Talent Acquisition",
    image:
      "Supporting strategic hiring by attracting skilled professionals who align with our vision and values.",
  },
  {
    name: "Kiran Kumar",
    role: "Talent Acquisition Lead",
    image:
      "Helping talented individuals find the right environment to develop their skills and build a rewarding career.",
  },
  {
    name: "Srikant Thallapelli",
    role: "Sr Talent Acquisition",
    image:
      "Leads kimaya hiring staffing division, connecting skilled professionals to AI and enterprise projects.",
  },
  {
    name: "P.K. Hattekar",
    role: "Business Strategy Head & Finance Advisor",
    image:
      "Drives business growth through strategic marketing and strengthening market presence.",
  },
  {
    name: "Sundar Rao",
    role: "HR Head",
    image:
      "Building a positive workplace where every team member can learn, contribute and succeed.",
  },
];

const Team = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="relative py-4 bg-[#2D1663] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white mt-4 text-xl lg:text-4xl font-extrabold text-[#2D1663] tracking-widest uppercase">
            <Users size={26} />
            Meet Our Team
          </div>

          <p className="mt-5 text-white text-sm md:text-base leading-7">
            A passionate team committed to connecting exceptional talent with
            meaningful opportunities.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {teamMembers.map((member, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="
        relative
        w-[280px] h-[280px]
        rounded-full
        bg-white
        border-4 border-white
        shadow-lg
        hover:-translate-y-2
        transition-all duration-500
        flex items-center justify-center
        overflow-hidden
      "
              >
                {/* Inner hover background */}
                <div
                  className={`
          absolute
          inset-0
          rounded-full
          transition-all
          duration-500
          ${isHovered ? "bg-[#2D1663]" : "bg-white"}
        `}
                />

                {/* CONTENT */}
                <div
                  className="
          relative
          z-10
          flex
          flex-col
          items-center
          justify-center
          text-center
          w-full
          px-8
        "
                >
                  {/* ICON */}
                  <div
                    className={`
            w-14 h-14
            rounded-full
            flex items-center justify-center
            mb-3
            transition-all duration-500
            ${isHovered ? "bg-white" : "bg-[#2D1663]"}
          `}
                  >
                    <Users
                      size={26}
                      className={isHovered ? "text-[#2D1663]" : "text-white"}
                    />
                  </div>

                  {/* NAME */}
                  <p
                    className={`
            text-lg
            font-bold
            transition-colors duration-500
            ${isHovered ? "text-white" : "text-[#2D1663]"}
          `}
                  >
                    {member.name}
                  </p>

                  {/* ROLE */}
                  <p
                    className={`
            text-[10px]
            md:text-xs
            font-semibold
            tracking-[0.12em]
            uppercase
            transition-colors duration-500
            ${isHovered ? "text-white" : "text-gray-500"}
          `}
                  >
                    {member.role}
                  </p>

                  {/* DESCRIPTION */}
                  <p
                    className={`
            text-xs
            leading-5
            max-w-[210px]
            transition-colors duration-500
            ${isHovered ? "text-white" : "text-gray-600"}
          `}
                  >
                    {member.image}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
