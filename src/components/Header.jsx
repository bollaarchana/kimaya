import { useState } from "react";
import { Container } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";

import logo from "../../public/images/kimaya.logo.jpeg";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/aboutus" },
  { name: "Services", path: "/service" },
  { name: "Industries", path: "/#industries" },
  { name: "Contact Us", path: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // ONE active function
  const isLinkActive = (item) => {
    if (item.name === "Home") {
      return location.pathname === "/" && location.hash === "";
    }

    if (item.name === "Industries") {
      return location.pathname === "/" && location.hash === "#industries";
    }

    return location.pathname === item.path;
  };

  return (
    <header className="sticky top-0 left-0 w-full z-50 bg-white shadow-sm">
      <Container fluid="xxl">
        <div className="flex items-center justify-between h-24">
          {/* LOGO */}

          <NavLink
            to="/"
            onClick={(e) => {
              if (location.pathname === "/") {
                e.preventDefault();

                window.history.replaceState(null, "", "/");

                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }

              setMenuOpen(false);
            }}
            className="flex-shrink-0"
          >
            <img
              src={logo}
              alt="Kimaya Hiring Solutions"
              className="h-24 w-auto object-contain"
            />
          </NavLink>

          {/* DESKTOP MENU */}

          <nav className="hidden lg:flex items-center gap-8 xl:gap-8">
            {navLinks.map((item) => {
              const active = isLinkActive(item);

              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={(e) => {
                    // HOME
                    if (item.name === "Home") {
                      if (location.pathname === "/") {
                        e.preventDefault();

                        window.history.replaceState(null, "", "/");

                        window.scrollTo({
                          top: 0,
                          behavior: "smooth",
                        });
                      }
                    }

                    setMenuOpen(false);
                  }}
                  className={`relative pb-2 text-[15px] xl:text-lg font-medium transition-colors ${
                    active
                      ? "!text-orange-500"
                      : "!text-gray-700 hover:!text-orange-500"
                  }`}
                >
                  {item.name}

                  {active && (
                    <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-orange-500 rounded-full" />
                  )}
                </NavLink>
              );
            })}

            {/* WHATSAPP */}

            <a
              href="https://wa.me/919908122284"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#1ebe5d] text-white flex items-center justify-center shadow-lg transition duration-300 hover:scale-110"
            >
              <FaWhatsapp size={28} />
            </a>
          </nav>

          {/* MOBILE BUTTON */}

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-[#2C1563]"
          >
            {menuOpen ? (
              <HiOutlineX size={34} />
            ) : (
              <HiOutlineMenuAlt3 size={34} />
            )}
          </button>
        </div>
      </Container>

      {/* MOBILE MENU */}

      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="bg-white border-t px-6 pb-6">
          {navLinks.map((item) => {
            const active = isLinkActive(item);

            return (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={(e) => {
                  // HOME
                  if (item.name === "Home") {
                    if (location.pathname === "/") {
                      e.preventDefault();

                      window.history.replaceState(null, "", "/");

                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      });
                    }
                  }

                  setMenuOpen(false);
                }}
                className={`block py-4 border-b ${
                  active
                    ? "!text-orange-500 font-semibold"
                    : "!text-gray-700 hover:!text-orange-500"
                }`}
              >
                {item.name}
              </NavLink>
            );
          })}
        </div>

        {/* MOBILE WHATSAPP */}

        <a
          href="https://wa.me/919908122284"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-xl hover:scale-110 transition duration-300"
        >
          <FaWhatsapp size={32} />
        </a>
      </div>
    </header>
  );
}
