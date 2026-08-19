import { motion } from "framer-motion";

import besquare from "../assets/besquare-HRvO1vZ0.webp";
import manutech from "../assets/manutech-logo.png";
import smartSoc from "../assets/SS-Logo-Horizontal-PNG-Final-Nov-12-1-1.png";
import svtek from "../assets/logo.png";
import trunksoft from "../assets/trunksoft_Logo.png";
import manutechBlack from "../assets/logo_black.png";
import ved from '../assets/VedAI-logo.webp'

const clients = [
  {
    name: "Besquare Technologies Pvt Ltd",
    logo: besquare,
  },
  {
    name: "ManuTech",
    logo: manutech,
  },
  {
    name: "Smart SOC",
    logo: smartSoc,
  },
  {
    name: "S & V Tek Systems",
    logo: svtek,
  },
  {
    name: "TrunkSoft",
    logo: trunksoft,
  },
  {
    name: "Techril",
    logo: manutechBlack,
  },
  {
    name: "VED AI TECH PVT LTD",
    logo: ved,
  }
];

const Clients = () => {
  return (
    <section className="bg-[#F7F4FD] min-h-screen py-4 md:py-28 overflow-hidden">
      {/* Heading */}

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h className="mt-4 text-3xl lg:text-4xl font-extrabold text-primary-text tracking-tight text-[#2D1663]">
            Our Clients
          </h>

          <p className="mt-3 leading-tight text-[#2D1663] text-3xl lg:text-3xl font-extrabold text-primary-text tracking-tight mb-6">
            Trusted by Growing Business
          </p>

          <p className="mt-8 leading-9 text-gray-600 text-base">
            Building strong partnerships through the right talent.
          </p>
        </motion.div>

        {/* Client Logos */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {clients.map((client, index) => (
            <motion.div
              key={`${client.name}-${index}`}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 30,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                  },
                },
              }}
              whileHover={{
                y: -6,
              }}
              className="group bg-white rounded-xl border border-gray-100 
                         h-44 md:h-48 flex flex-col items-center 
                         justify-center p-6 shadow-sm 
                         hover:shadow-lg transition-shadow duration-300"
            >
              {/* Logo */}

              <motion.img
                src={client.logo}
                alt={client.name}
                loading="lazy"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.3 }}
                className="h-16 md:h-20 max-w-[190px] w-auto 
                           object-contain opacity-80 
                           group-hover:opacity-100"
              />

              {/* Name */}

              <p
                className="mt-4 text-sm font-medium text-gray-600 
                            group-hover:text-[#2D1663] text-center 
                            transition-colors duration-300"
              >
                {client.name}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Small closing statement */}

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-center text-gray-500 text-sm mt-12 py-12"
        >
          Proud to be a trusted talent partner.
        </motion.p>
      </div>
    </section>
  );
};

export default Clients;
