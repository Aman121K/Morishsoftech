import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Top = () => {
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
      className={`bg-orange-500 p-4 flex flex-col md:flex-row justify-between items-center ${
        isScrolled ? "fixed top-0 w-full z-50" : "static"
      }`}
    >
      <div className="text-white mb-4 md:mb-0 md:mr-4 ml-10">
        Need any help? Email to expert: support@buslalatechnologies.ltd
      </div>
      <div className="text-white space-x-4 mr-10">
        <Link to="/blog">Digital Dairy</Link>
        <span className="hidden md:inline">|</span>
        <NavLink to="/contact">CONTACT US</NavLink>
        <span className="hidden md:inline">|</span>
        <NavLink to="#">CAREER</NavLink>
      </div>
    </div>
  );
};

export default Top;
