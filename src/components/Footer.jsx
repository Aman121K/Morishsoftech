import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../asset/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-orange-600 text-white p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col space-y-4">
          <NavLink
            className="navbar-brand"
            to="/"
            title="Web Designing and Development"
          >
            <img
              src={logo}
              alt="Web Designing and Development Company"
              style={{ maxWidth: "80px" }}
            />
            <h4>Buslala Technologies</h4>
          </NavLink>
          <p>
            RZF 535, Rajnagar-2,

            <br />
            South West Delhi,
            Delhi-110077
          </p>
          <NavLink to="#!" className="text-teal-200 hover:text-white">
            {/* Talk to an expert */}
          </NavLink>
          {/* <p>+91-124-4118270</p> */}
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2 border-b-2 border-teal-700 pb-1">
            Useful Links
          </h3>
          <ul className="grid grid-cols-2 gap-4">
            <li>
              <NavLink to="/" className="hover:text-teal-200">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:text-teal-200">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:text-teal-200">
                Reach Us
              </NavLink>
            </li>
            <li>
              <NavLink to="#!" className="hover:text-teal-200">
                Privacy Policy
              </NavLink>
            </li>
            <li>
              <NavLink to="#!" className="hover:text-teal-200">
                Term & Conditions
              </NavLink>
            </li>
            <li>
              <NavLink to="/web-development" className="hover:text-teal-200">
                Web Development
              </NavLink>
            </li>
            <li>
              <NavLink to="#!" className="hover:text-teal-200">
                CRM Development
              </NavLink>
            </li>
            <li>
              <NavLink to="/school" className="hover:text-teal-200">
                School Management
              </NavLink>
            </li>
            <li>
              <NavLink to="/ecommerce" className="hover:text-teal-200">
                Ecommerce Solution
              </NavLink>
            </li>
            <li>
              <NavLink to="#!" className="hover:text-teal-200">
                Hospital Management
              </NavLink>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2 border-b-2 border-teal-700 pb-1">
            Newsletter
          </h3>
          <form className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-4 py-2 text-teal-900"
            />
            <button
              type="submit"
              className="bg-orange-700 hover:bg-orange-800 text-white font-bold py-2 px-4 rounded"
            >
              Subscribe
            </button>
          </form>
          <div className="flex justify-start space-x-4 mt-4">
            {/* Replace with actual social media icons */}
            <NavLink to="#!" className="hover:text-teal-200">
              Facebook
            </NavLink>
            <NavLink to="#!" className="hover:text-teal-200">
              LinkedIn
            </NavLink>
            <NavLink to="#!" className="hover:text-teal-200">
              Twitter
            </NavLink>
            <NavLink to="#!" className="hover:text-teal-200">
              Google+
            </NavLink>
          </div>
        </div>
      </div>
      <div className="text-center text-sm mt-8">
        © Copyright  Buslala Technologies 2024. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
