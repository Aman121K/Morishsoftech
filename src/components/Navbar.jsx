import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo1 from "../asset/newLogo.jpeg";

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
      className={`header_menu z-50 bg-white border-b${
        isScrolled ? " fixed top-0 lg:top-14 w-full z-50" : "static"
      }`}
    >
      <div className="container mx-auto top-12">
        <nav className="flex items-center justify-between p-4 z-50">
          
            <img
              className="w-10 md:w-20 "
              src={logo1}
              alt="Web Designing and Development Company"
              style={{ maxWidth: "100px", width: "100px" }}
            />
          
          
          <div className="lg:hidden">
            {isMobileMenuOpen ? (
              <FaTimes
                className="text-2xl cursor-pointer z-50"
                onClick={closeMobileMenu}
              />
            ) : (
              <FaBars
                className="text-2xl cursor-pointer z-50"
                onClick={toggleMobileMenu}
              />
            )}
          </div>
          
          {isMobileMenuOpen && (
             <div className="lg:hidden absolute top-16 left-0 w-full h-screen bg-white z-50">
             <ul className="flex flex-col space-y-4 mt-4 p-4 font-bold">
               <li>
                 <NavLink
                   to="/"
                   onClick={closeMobileMenu}
                   className="text-gray-800 "
                 >
                   Home
                 </NavLink>
               </li>
               <li className="dropdown submenu relative group">
                  <NavLink
                  
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Web Development
                  </NavLink>
                  <ul className="dropdown-menu relative hidden group-hover:block bg-purple-400 p-4 border rounded text-sm">
                    <li title="Web Designing and Development Company">
                      <NavLink to="/web-development"
                      onClick={closeMobileMenu}>
                        Web Design & Development
                      </NavLink>
                    </li>
                    <li title="Ecommerce Website Development">
                      <NavLink to="/ecommerce"
                      onClick={closeMobileMenu}>
                        E-commerce Solution</NavLink>
                    </li>
                    <li title="App Development Company"
                    onClick={closeMobileMenu}>
                      <NavLink to="/appdevelopment"
                      onClick={closeMobileMenu}>
                        App Development</NavLink>
                    </li>
                    <li title="Web Application Portal Development">
                      <NavLink to="/webapplication"
                      onClick={closeMobileMenu}>
                        Web Application</NavLink>
                    </li>
                  </ul>
                </li>
                <li className="dropdown submenu relative group">
                  <NavLink
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Digital Marketing
                  </NavLink>
                  <ul className="dropdown-menu relative hidden group-hover:block z-50 bg-purple-400 p-4 border rounded text-sm">
                    <li title="Search Engine Optimization SEO Service">
                      <NavLink to="/seo" onClick={closeMobileMenu}>
                        Search Engine Optimization (SEO)
                      </NavLink>
                    </li>
                    <li title="Social Media Optimization SMO Service">
                      <NavLink to="/smm" onClick={closeMobileMenu}>Social Media Marketing (SMM)</NavLink>
                    </li>
                  </ul>
                </li>
               <li>
               <li className="dropdown submenu relative group">
                  <NavLink
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Products
                  </NavLink>
                  <ul className="dropdown-menu relative hidden group-hover:block z-50 bg-purple-400 p-4 border rounded text-sm">
                    <li title="School Management Software">
                      <NavLink to="/school-management" onClick={closeMobileMenu}>
                        School Management Application
                      </NavLink>
                    </li>
                    <li title="Customer Relationship Management">
                      <NavLink to="/" onClick={closeMobileMenu}>CRM Development</NavLink>
                    </li>
                    <li title="Billing and Invoicing Solution">
                      <NavLink to="/" onClick={closeMobileMenu}>Invoicing Solution</NavLink>
                    </li>
                    <li title="Hospital Management Software">
                      <NavLink to="/" onClick={closeMobileMenu}>
                        Hospital Management Software
                      </NavLink>
                    </li>
                  </ul>
                </li>
               </li>
               <li>
               <li className="dropdown submenu relative group">
                  <li
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Company
                  </li>
                  <ul className="dropdown-menu relative hidden group-hover:block z-50 bg-purple-400 p-4 border rounded text-sm">
                    <li title="Morish Softech - A Web Development Company">
                      <NavLink to="/about" onClick={closeMobileMenu}>About Us</NavLink>
                    </li>
                    <li title="Web Development Mission and Vision">
                      <NavLink to="/mission-values" onClick={closeMobileMenu}>Mission & Values</NavLink>
                    </li>
                    <li title="Why Choose Morish Softech">
                      <NavLink to="/choose-us" onClick={closeMobileMenu}>Why Choose Us</NavLink>
                    </li>
                  </ul>
                </li>
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
                  isScrolled ? "mt-2" : ""
                }`}
              >
                <li title="Home">
                <NavLink to="/">Home</NavLink>
              </li>
                <li className="dropdown submenu relative group">
                  <NavLink
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                    title="Web Development Company"
                  >
                    Web Development
                  </NavLink>
                  <ul className="dropdown-menu fixed hidden group-hover:block z-50 bg-purple-400 p-4 border rounded">
                    <li title="Web Designing and Development Company">
                      <NavLink to="/web-development">
                        Web Design & Development
                      </NavLink>
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
                    
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                    title="Digital Marketing Agency"
                  >
                    Digital Marketing
                  </NavLink>
                  <ul className="dropdown-menu fixed hidden group-hover:block z-50 bg-purple-400 p-4 border rounded">
                    <li title="Search Engine Optimization SEO Service">
                      <NavLink to="/seo">
                        Search Engine Optimization (SEO)
                      </NavLink>
                    </li>
                    <li title="Social Media Optimization SMO Service">
                      <NavLink to="/smm">Social Media Marketing (SMM)</NavLink>
                    </li>
                  </ul>
                </li>
                <li className="dropdown submenu relative group">
                  <NavLink
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Products
                  </NavLink>
                  <ul className="dropdown-menu fixed hidden group-hover:block z-50 bg-purple-400 p-4 border rounded">
                    <li title="School Management Software">
                      <NavLink to="/school-management">
                        School Management Application
                      </NavLink>
                    </li>
                    <li title="Customer Relationship Management">
                      <NavLink to="crm-develo/">CRM Development</NavLink>
                    </li>
                    <li title="Billing and Invoicing Solution">
                      <NavLink to="invoicing-sol/">Invoicing Solution</NavLink>
                    </li>
                    <li title="Hospital Management Software">
                      <NavLink to="hospital-manag/">
                        Hospital Management Software
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="dropdown submenu relative group">
                  <NavLink
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Company
                  </NavLink>
                  <ul className="dropdown-menu fixed hidden group-hover:block z-50 bg-purple-400 p-4 border rounded">
                    <li title="Morish Softech - A Web Development Company">
                      <NavLink to="/about">About Us</NavLink>
                    </li>
                    <li title="Web Development Mission and Vision">
                      <NavLink to="/mission-values">Mission & Values</NavLink>
                    </li>
                    <li title="Why Choose Morish softech">
                      <NavLink to="/choose-us">Why Choose Us</NavLink>
                    </li>
                  </ul>
                </li>
        
              </ul>
            
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
