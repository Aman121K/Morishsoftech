import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

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
      className={`bg-teal-500 p-4 flex flex-col md:flex-row justify-between items-center ${
        isScrolled ? "fixed top-0 w-full z-50" : "static"
      }`}
    >
      <div className="text-white mb-4 md:mb-0 md:mr-4 ml-10">
        Need any help? Chat to expert: +91-124-411 8270
      </div>
      <div className="text-white space-x-4 mr-10">
        <NavLink to="/blog">BLOG</NavLink>
        <span className="hidden md:inline">|</span>
        <NavLink to="/contact">CONTACT US</NavLink>
        <span className="hidden md:inline">|</span>
        <NavLink to="#">CAREER</NavLink>
      </div>
    </div>
  );
};

export default Top;
