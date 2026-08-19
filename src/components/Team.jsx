import { Users } from "lucide-react";

const teamMembers = [
  {
    name: "Sonali Mohite",
    role: "Sr Talent Acquisition",
    image: "Supporting strategic hiring by attracting skilled professionals who align with our vision and values.",
  },
  {
    name: "Kiran Kumar",
    role: "Talent Acquisition Lead",
    image: "Helping talented individuals find the right environment to develop their skills and build a rewarding career.",
  },
  {
    name: "Srikant Thallapelli",
    role: "Sr Talent Acquisition",
    image: "Leads kimaya hiring staffing division, connecting skilled professionals to AI and enterprise projects.",
  },
  {
    name: "P.K. Hattekar",
    role: "Business Strategy Head & Finance Advisor",
    image: "Drives business growth through strategic marketing, client relations, and strengthening market presence.",
  },
  {
    name: "Sundar Rao",
    role: "HR Head",
    image: "Building a positive workplace where every team member can learn, contribute, and succeed.",
  },
];

const Team = () => {
  return (
    <section className="relative py-4 bg-[#2D1663] overflow-hidden">

      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#2D1663]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white mt-4 text-xl lg:text-4xl font-extrabold text-primary-text tracking-tight text-[#2D1663] font-bold tracking-widest uppercase">
            <Users size={26} />
            Meet Our Team
          </div>

          
          <p className="mt-5 text-white text-sm md:text-base leading-7">
            A passionate team committed to connecting exceptional talent
            with meaningful opportunities.
          </p>

        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">

          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden
                         border border-gray-100
                         shadow-[0_8px_30px_rgba(45,22,99,0.08)]
                         hover:shadow-[0_15px_40px_rgba(45,22,99,0.15)]
                         transition-all duration-500
                         hover:-translate-y-2"
            >

              {/* Image */}
              <div className="relative h-[135px] text-center overflow-hidden">
              
                <div
                  className="absolute inset-0 bg-gradient-to-t
                             from-[#2D1663]/80 via-transparent to-transparent
                             opacity-70">
                              <p className="text-[#2D1663] text-sm md:text-base leading-relaxed p-3">
                {member.image}</p>

                             </div>

                
              </div>

              {/* Content */}
              <div className="relative text-center px-5 py-6">

                <p
                  className="text-lg md:text-xl font-bold
                             text-[#2D1663] capitalize"
                >
                  {member.name}
                </p>


                <p
                  className="text-gray-500
                             text-[10px] md:text-xs
                             font-semibold tracking-[0.15em]"
                >
                  {member.role}
                </p>

              </div>

              {/* Bottom hover line */}
              <div
                className="absolute bottom-0 left-0 right-0
                           h-1 bg-orange-500
                           scale-x-0 group-hover:scale-x-100
                           origin-left transition-transform duration-500"
              />

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Team;
