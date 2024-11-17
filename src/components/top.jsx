import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { IoCall } from "react-icons/io5";

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
      className={`hidden :block bg-purple-500 p-4 md:flex flex-col md:flex-row justify-between  ${
        isScrolled ? "fixed top-0 w-full z-50" : "static"
      }`}
    >
      <div className="flex items-center justify-center text-white text-xs md:text-xl mb-4 md:mb-0 md:mr-4 md:ml-10 ml-5">
  <IoCall className="mr-2" /> 
  Need any help? Email to expert: info@Morishsoftech.com
</div>
      <div className="text-white space-x-4 mr-10 ">
        <NavLink to="/blog">Digital Dairy</NavLink>
        <span className="hidden md:inline">|</span>
        <NavLink to="/contact">CONTACT US</NavLink>
        <span className="hidden md:inline">|</span>
        <NavLink to="#">CAREER</NavLink>
      </div>
    </div>
  );
};

export default Top;
