import React from "react";
import logo from "../asset/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-teal-600 text-white p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col space-y-4">
          <a
            className="navbar-brand"
            href="index.php"
            title="Web Designing and Development"
          >
            <img
              src={logo}
              alt="Web Designing and Development Company"
              style={{ maxWidth: "200px" }}
            />
          </a>
          <p>
            SCF 45, Vyapar Sadan, Sector 14
            <br />
            Gurgaon, Haryana 122001.
          </p>
          <a href="#!" className="text-teal-200 hover:text-white">
            Talk to an expert
          </a>
          <p>+91-124-4118270</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2 border-b-2 border-teal-700 pb-1">
            Useful Links
          </h3>
          <ul className="grid grid-cols-2 gap-4">
            <li>
              <a href="#!" className="hover:text-teal-200">
                Home
              </a>
            </li>
            <li>
              <a href="#!" className="hover:text-teal-200">
                About Us
              </a>
            </li>
            <li>
              <a href="#!" className="hover:text-teal-200">
                Reach Us
              </a>
            </li>
            <li>
              <a href="#!" className="hover:text-teal-200">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#!" className="hover:text-teal-200">
                Term & Conditions
              </a>
            </li>
            <li>
              <a href="#!" className="hover:text-teal-200">
                Web Development
              </a>
            </li>
            <li>
              <a href="#!" className="hover:text-teal-200">
                CRM Development
              </a>
            </li>
            <li>
              <a href="#!" className="hover:text-teal-200">
                School Management
              </a>
            </li>
            <li>
              <a href="#!" className="hover:text-teal-200">
                Ecommerce Solution
              </a>
            </li>
            <li>
              <a href="#!" className="hover:text-teal-200">
                Hospital Management
              </a>
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
              className="bg-teal-700 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded"
            >
              Subscribe
            </button>
          </form>
          <div className="flex justify-start space-x-4 mt-4">
            {/* Replace with actual social media icons */}
            <a href="#!" className="hover:text-teal-200">
              Facebook
            </a>
            <a href="#!" className="hover:text-teal-200">
              LinkedIn
            </a>
            <a href="#!" className="hover:text-teal-200">
              Twitter
            </a>
            <a href="#!" className="hover:text-teal-200">
              Google+
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-sm mt-8">
        © Copyright Endive Media 2024. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
