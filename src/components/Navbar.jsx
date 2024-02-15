import React, { useEffect, useState } from "react";
import logo from "../asset/logo.svg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <div
      className={`header_menu bg-white border-b${
        isScrolled ? " fixed top-12 w-full z-50" : " static"
      }`}
    >
      <div className="container mx-auto">
        <nav className="flex items-center justify-between p-4">
          <a
            className="navbar-brand ml-10"
            href="/"
            title="Web Designing and Development"
          >
            <img
              src={logo}
              alt="Web Designing and Development Company"
              style={{ maxWidth: "200px" }}
            />
          </a>
          <div
            className="hidden lg:flex flex-grow items-center"
            id="navbarSupportedContent"
          >
            <ul
              className={` font-bold flex space-x-4 ml-[50%] ${isScrolled ? "mt-4" : ""}`}
            >
              <li title="Home">
                <a href="/">Home</a>
              </li>
              <li className="dropdown submenu relative group">
                <a
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  href="/"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                  title="Web Development Company"
                >
                  Web Development
                </a>
                <ul className="dropdown-menu absolute hidden group-hover:block z-50 bg-white p-4 border rounded">
                  <li title="Web Designing and Development Company">
                    <a href="web-develo/">Web Design & Development</a>
                  </li>
                  <li title="Ecommerce Website Development">
                    <a href="ecommerce-sol/">E-commerce Solution</a>
                  </li>
                  <li title="App Development Company">
                    <a href="app-develo/">App Development</a>
                  </li>
                  <li title="Web Application Portal Development">
                    <a href="web-applic/">Web Application</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown submenu relative group">
                <a
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  href="ser/"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                  title="Digital Marketing Agency"
                >
                  Digital Marketing
                </a>
                <ul className="dropdown-menu absolute hidden group-hover:block z-50 bg-white p-4 border rounded">
                  <li title="Search Engine Optimization SEO Service">
                    <a href="search-engine-optimiz/">
                      Search Engine Optimization (SEO)
                    </a>
                  </li>
                  <li title="Social Media Optimization SMO Service">
                    <a href="social-media-mark/">
                      Social Media Marketing (SMM)
                    </a>
                  </li>
                </ul>
              </li>
              <li className="dropdown submenu relative group">
                <a
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  href="pro/"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Products
                </a>
                <ul className="dropdown-menu absolute hidden group-hover:block z-50 bg-white p-4 border rounded">
                  <li title="School Management Software">
                    <a href="school-manag/">School Management Application</a>
                  </li>
                  <li title="Customer Relationship Management">
                    <a href="crm-develo/">CRM Development</a>
                  </li>
                  <li title="Billing and Invoicing Solution">
                    <a href="invoicing-sol/">Invoicing Solution</a>
                  </li>
                  <li title="Hospital Management Software">
                    <a href="hospital-manag/">Hospital Management Software</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown submenu relative group">
                <a
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  href="co/"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Company
                </a>
                <ul className="dropdown-menu absolute hidden group-hover:block z-50 bg-white p-4 border rounded">
                  <li title="Endive Media - A Web Development Company">
                    <a href="abo/">About Us</a>
                  </li>
                  <li title="Web Development Mission and Vision">
                    <a href="mission-and-v/">Mission & Values</a>
                  </li>
                  <li title="Why Choose Endive Media">
                    <a href="why-choo/">Why Choose Us</a>
                  </li>
                </ul>
              </li>
              {/* Add other menu items similar to the above structure */}
            </ul>
            <ul className="flex ml-auto space-x-4">
              <li>
                <a className="popup-with-zoom-anim" href="#test-search">
                  <i className="icon icon-Search"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
