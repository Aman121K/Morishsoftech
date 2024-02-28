import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../asset/logo.jpg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div
      className={`header_menu bg-white border-b${
        isScrolled ? " fixed top-12 md:top-14 w-full z-50" : " static"
      }`}
    >
      <div className="container mx-auto">
        <nav className="flex items-center justify-between p-4">
          
            <img
              className="w-10 md:w-20"
              src={logo}
              alt="Web Designing and Development Company"
              style={{ maxWidth: "80px" }}
            />
          
          
          <div className="lg:hidden">
            {isMobileMenuOpen ? (
              <FaTimes
                className="text-2xl cursor-pointer"
                onClick={closeMobileMenu}
              />
            ) : (
              <FaBars
                className="text-2xl cursor-pointer"
                onClick={toggleMobileMenu}
              />
            )}
          </div>
          
          {isMobileMenuOpen && (
             <div className="lg:hidden absolute top-16 left-0 w-full bg-white ">
             <ul className="flex flex-col space-y-4 mt-4 p-4 font-bold">
               <li>
                 <NavLink
                   to="/"
                   onClick={closeMobileMenu}
                   className="text-gray-800 hover:text-gray-600 transition duration-300"
                 >
                   Home
                 </NavLink>
               </li>
               <li>
                 <NavLink
                   to="/web-development"
                   onClick={closeMobileMenu}
                   className="text-gray-800 hover:text-gray-600 transition duration-300"
                 >
                   Web Development
                 </NavLink>
               </li>
               <li>
                 <NavLink
                   to="/digital-marketing"
                   onClick={closeMobileMenu}
                   className="text-gray-800 hover:text-gray-600 transition duration-300"
                 >
                   Digital Marketing
                 </NavLink>
               </li>
               <li>
                 <NavLink
                   to="/products"
                   onClick={closeMobileMenu}
                   className="text-gray-800 hover:text-gray-600 transition duration-300"
                 >
                   Products
                 </NavLink>
               </li>
               <li>
                 <NavLink
                   to="/company"
                   onClick={closeMobileMenu}
                   className="text-gray-800 hover:text-gray-600 transition duration-300"
                 >
                   Company
                 </NavLink>
               </li>
             </ul>
           </div>
         )}
          
          <div
            className="hidden lg:flex flex-grow items-center"
            id="navbarSupportedContent"
          >
              <ul
                className={`font-bold flex space-x-4 ml-[50%] ${
                  isScrolled ? "mt-4" : ""
                }`}
              >
                <li title="Home">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="dropdown submenu relative group">
                <NavLink
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                 to="/"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                  title="Web Development Company"
                >
                  Web Development
                </NavLink>
                <ul className="dropdown-menu absolute hidden group-hover:block z-50 bg-white p-4 border rounded">
                  <li title="Web Designing and Development Company">
                    <NavLink to="/web-development">Web Design & Development</NavLink>
                  </li>
                  <li title="Ecommerce Website Development">
                    <NavLink to="/ecommerce">E-commerce Solution</NavLink>
                  </li>
                  <li title="App Development Company">
                    <NavLink to="/appdevelopment">App Development</NavLink>
                  </li>
                  <li title="Web Application Portal Development">
                    <NavLink to="/webapplication">Web Application</NavLink>
                  </li>
                </ul>
              </li>
              <li className="dropdown submenu relative group">
                <NavLink
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                 to="ser/"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                  title="Digital Marketing Agency"
                >
                  Digital Marketing
                </NavLink>
                <ul className="dropdown-menu absolute hidden group-hover:block z-50 bg-white p-4 border rounded">
                  <li title="Search Engine Optimization SEO Service">
                    <NavLink to="/seo">
                      Search Engine Optimization (SEO)
                    </NavLink>
                  </li>
                  <li title="Social Media Optimization SMO Service">
                    <NavLink to="/smm">
                      Social Media Marketing (SMM)
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="dropdown submenu relative group">
                <NavLink
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                 to="pro/"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Products
                </NavLink>
                <ul className="dropdown-menu absolute hidden group-hover:block z-50 bg-white p-4 border rounded">
                  <li title="School Management Software">
                    <NavLink to="/school-management">School Management Application</NavLink>
                  </li>
                  <li title="Customer Relationship Management">
                    <NavLink to="crm-develo/">CRM Development</NavLink>
                  </li>
                  <li title="Billing and Invoicing Solution">
                    <NavLink to="invoicing-sol/">Invoicing Solution</NavLink>
                  </li>
                  <li title="Hospital Management Software">
                    <NavLink to="hospital-manag/">Hospital Management Software</NavLink>
                  </li>
                </ul>
              </li>
              <li className="dropdown submenu relative group">
                <NavLink
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                 to="co/"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Company
                </NavLink>
                <ul className="dropdown-menu absolute hidden group-hover:block z-50 bg-white p-4 border rounded">
                  <li title="Bus Technologies - A Web Development Company">
                    <NavLink to="/about">About Us</NavLink>
                  </li>
                  <li title="Web Development Mission and Vision">
                    <NavLink to="/mission-values">Mission & Values</NavLink>
                  </li>
                  <li title="Why Choose Bus Technologies">
                    <NavLink to="/choose-us">Why Choose Us</NavLink>
                  </li>
                </ul>
              </li>
              {/* Add other menu items similar to the above structure */}
            </ul>
            <ul className="flex ml-auto space-x-4">
              <li>
                <NavLink className="popup-with-zoom-anim" to="#test-search">
                  <i className="icon icon-Search"></i>
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
