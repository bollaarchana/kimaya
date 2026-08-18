// const Team = () => {
//   return (
//     <section className="py-16 md:py-24 bg-white">
//       <div className="max-w-6xl mx-auto px-6">
//         <div className="text-center mb-16">
//           <h className="mt-4 text-3xl lg:text-4xl font-extrabold text-primary-text tracking-tight text-[#2D1663]">
//             THE TEAM
//           </h>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           <div className="h-[520px] [perspective:1200px] cursor-pointer">
//               <div className="absolute inset-0 bg-white rounded-sm overflow-hidden shadow-[0_5px_25px_rgba(0,0,0,0.08)] [backface-visibility:hidden]">
//                 <div className="flex flex-col h-full">
//                   <div className="relative w-full h-[400px]">
//                     <img
//                       alt="Sonali Mohite"
//                       className="object-cover w-full h-full"
//                       src="/src/assets/man.jpg"
//                     />
//                   </div>
//                   <div className="p-6 text-center">
//                     <h3 className="text-[#362A82] font-bold uppercase text-[15px] tracking-wide">
//                       Sonali Mohite
//                     </h3>
//                     <p className="text-[#585858] uppercase text-[11px] font-bold tracking-widest mt-2">
//                       Sr Talent Acquisition
//                     </p>
//                   </div>
//                 </div>
//               </div>
//           </div>
//           <div className="h-[520px] [perspective:1200px] cursor-pointer">
//               <div className="absolute inset-0 bg-white rounded-sm overflow-hidden shadow-[0_5px_25px_rgba(0,0,0,0.08)] [backface-visibility:hidden]">
//                 <div className="flex flex-col h-full">
//                   <div className="relative w-full h-[400px]">
//                     <img
//                       alt="Kiran Kumar"
//                       className="object-cover w-full h-full"
//                       src="/src/assets/man.jpg"
//                     />
//                   </div>
//                   <div className="p-6 text-center">
//                     <h3 className="text-[#362A82] font-bold uppercase text-[15px] tracking-wide">
//                       Kiran Kumar
//                     </h3>
//                     <p className="text-[#585858] uppercase text-[11px] font-bold tracking-widest mt-2">
//                       Talent Acquisition Lead
//                     </p>
//                   </div>
//                 </div>
//               </div>
//           </div>
//           <div className="h-[520px] [perspective:1200px] cursor-pointer">
//               <div className="absolute inset-0 bg-white rounded-sm overflow-hidden shadow-[0_5px_25px_rgba(0,0,0,0.08)] [backface-visibility:hidden]">
//                 <div className="flex flex-col h-full">
//                   <div className="relative w-full h-[400px]">
//                     <img
//                       alt="Srikant Thallapelli"
//                       className="object-cover w-full h-full"
//                       src="/src/assets/man.jpg"
//                     />
//                   </div>
//                   <div className="p-6 text-center">
//                     <h5 className="text-[#362A82] font-bold uppercase tracking-wide">
//                       Srikant Thallapelli
//                     </h5>
//                     <p className="text-[#585858] uppercase text-[11px] font-bold tracking-widest mt-2">
//                       Sr Talent Acquisition
//                     </p>
//                   </div>
//                 </div>
//               </div>
//           </div>
//           <div className="h-[520px] [perspective:1200px] cursor-pointer">
//               <div className="absolute inset-0 bg-white rounded-sm overflow-hidden shadow-[0_5px_25px_rgba(0,0,0,0.08)] [backface-visibility:hidden]">
//                 <div className="flex flex-col h-full">
//                   <div className="relative w-full h-[400px]">
//                     <img
//                       alt="P.k. Hattekar"
//                       className="object-cover w-full h-full"
//                       src="/src/assets/man.jpg"
//                     />
//                   </div>
//                   <div className="p-6 text-center">
//                     <h5 className="text-[#362A82] font-bold uppercase tracking-wide">
//                       P.k. Hattekar
//                     </h5>
//                     <p className="text-[#585858] uppercase text-[11px] font-bold tracking-widest mt-2">
//                       Business Strategy Head & Finanace Advisor
//                     </p>
//                   </div>
//                 </div>
//               </div>
//           </div>
//            <div className="h-[520px] [perspective:1200px] cursor-pointer">
//               <div className="absolute inset-0 bg-white rounded-sm overflow-hidden shadow-[0_5px_25px_rgba(0,0,0,0.08)] [backface-visibility:hidden]">
//                 <div className="flex flex-col h-full">
//                   <div className="relative w-full h-[400px]">
//                     <img
//                       alt="Sundar Rao"
//                       className="object-cover w-full h-full"
//                       src="/src/assets/man.jpg"
//                     />
//                   </div>
//                   <div className="p-6 text-center">
//                     <h5 className="text-[#362A82] font-bold uppercase tracking-wide">
//                       Sundar Rao
//                     </h5>
//                     <p className="text-[#585858] uppercase text-[11px] font-bold tracking-widest mt-2">
//                       HR Head
//                     </p>
//                   </div>
//                 </div>
//               </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Team;

import { Users } from "lucide-react";

const teamMembers = [
  {
    name: "Sonali Mohite",
    role: "Sr Talent Acquisition",
    image: "/src/assets/man.jpg",
  },
  {
    name: "Kiran Kumar",
    role: "Talent Acquisition Lead",
    image: "/src/assets/man.jpg",
  },
  {
    name: "Srikant Thallapelli",
    role: "Sr Talent Acquisition",
    image: "/src/assets/man.jpg",
  },
  {
    name: "P.K. Hattekar",
    role: "Business Strategy Head & Finance Advisor",
    image: "/src/assets/man.jpg",
  },
  {
    name: "Sundar Rao",
    role: "HR Head",
    image: "/src/assets/man.jpg",
  },
];

const Team = () => {
  return (
    <section className="relative py-4 md:py-24 bg-[#F8F7FC] overflow-hidden">

      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#2D1663]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2D1663]/10 mt-4 text-3xl lg:text-4xl font-extrabold text-primary-text tracking-tight text-[#2D1663] font-bold tracking-widest uppercase">
            <Users size={26} />
            Meet Our Team
          </div>

          
          <p className="mt-5 text-gray-600 text-sm md:text-base leading-7">
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
              <div className="relative h-[360px] md:h-[390px] overflow-hidden">

                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className="w-full h-full object-cover
                             transition-transform duration-700
                             group-hover:scale-105"
                />

                {/* Image overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-t
                             from-[#2D1663]/80 via-transparent to-transparent
                             opacity-70"
                />

                {/* Number */}
                <div
                  className="absolute top-4 left-4 w-9 h-9 rounded-full
                             bg-white/90 backdrop-blur-sm
                             flex items-center justify-center
                             text-[#2D1663] text-sm font-bold"
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

              </div>

              {/* Content */}
              <div className="relative text-center px-5 py-6">

                <h3
                  className="text-lg md:text-xl font-bold
                             text-[#2D1663] capitalize"
                >
                  {member.name}
                </h3>


                <p
                  className="text-gray-500 uppercase
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
