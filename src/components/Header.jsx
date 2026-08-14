import { useState } from "react";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import logo from "../../public/images/kimaya.logo.jpeg"; // change path

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/aboutus" },
  { name: "Services", path: "/service" },
  // { name: "Industries", path: "/industries" },
  // { name: "Insights", path: "/insights" },
  // { name: "Careers", path: "/careers" },
  { name: "Contact Us", path: "/contact" },
];
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 w-full z-50 bg-white shadow-sm">
      <Container fluid="xxl">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}

          <a href="/" className="flex-shrink-0">
            <img
              src={logo}
              alt="Logo"
              className="h-24 w-auto object-contain"
            />
          </a>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-8">
            {navLinks.map((item,i) => (
              <NavLink
              key={i}
                to={item.path}
                className={({ isActive }) =>
                  `relative pb-2 text-[15px] xl:text-lg font-medium ${
                    isActive
                      ? "!text-orange-500"
                      : "!text-gray-700 hover:text-orange-500"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.name}
                    {isActive && (
                      <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-orange-500 rounded-full"></span>
                    )}
                  </>
                )}
              </NavLink>
            
            ))}
            <div className="hidden lg:block">
              <a
                href="https://wa.me/+919908122284" // Replace with your WhatsApp number
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#1ebe5d] text-white flex items-center justify-center shadow-lg transition duration-300 hover:scale-110"
              >
                <FaWhatsapp size={28} />
              </a>
            </div>
          </nav>

          
          {/* Desktop Button */}

          {/* <div className="hidden lg:block">
            <button className="bg-[#2C1563] hover:bg-[#3b2080] text-white px-6 py-3 rounded-lg flex items-center gap-2 font-medium transition">
              Book a Consultation
              <FiCalendar size={18} />
            </button>
          </div> */}

          {/* Mobile Icon */}

          <button
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

      {/* Mobile Menu */}

      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="bg-white border-t px-6 pb-6">
          {navLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block py-4 border-b ${
                  isActive ? "!text-orange-500 font-semibold" :
                   "!text-gray-700 hover:text-orange-500"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
        <a
          href="https://wa.me/+919908122284"
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

// import {Container, Navbar, Nav} from 'react-bootstrap'

// const Header = () => {
//   return (
//     <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
//     <Container>
//       <Navbar.Brand href="/">
//         <img src='/images/logo-kimaya.png' viewBox="0 0 24 24" alt='logo' />
//       </Navbar.Brand>
//       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//       <Navbar.Collapse id="responsive-navbar-nav">
//         <Nav className="me-auto">
//           <Nav.Link href="#features">Home</Nav.Link>
//           <Nav.Link href="#pricing">About Us</Nav.Link>
//           <Nav.Link href="#features">Services</Nav.Link>
//           <Nav.Link href="#pricing">Industries</Nav.Link>
//           <Nav.Link href="#features">Insights</Nav.Link>
//           <Nav.Link href="#pricing">Careers</Nav.Link>

//           {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
//             <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//             <NavDropdown.Item href="#action/3.2">
//               Another action
//             </NavDropdown.Item>
//             <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//             <NavDropdown.Divider />
//             <NavDropdown.Item href="#action/3.4">
//               Separated link
//             </NavDropdown.Item>
//           </NavDropdown> */}
//         </Nav>

//           <Nav.Link href="#deets">Contact Us</Nav.Link>
//                     <Nav.Link href="#deets">Contact Us</Nav.Link>

//           {/* <Nav.Link eventKey={2} href="#memes">
//             Dank memes
//           </Nav.Link> */}

//       </Navbar.Collapse>
//     </Container>
//   </Navbar>
//   )
// }

// export default Header
