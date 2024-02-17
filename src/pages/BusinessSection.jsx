import React from "react";
import logo1 from "../asset/AirPets-Relocation-Services.png";
import logo2 from "../asset/big-leap-consultancy.png";
import logo3 from "../asset/dickey-asset-management.png";
import logo4 from "../asset/ecommerce-development-company.webp";
import logo5 from "../asset/harshyam-consultancy-service.png";
import logo6 from "../asset/intage-india.png";
import logo7 from "../asset/greenwave.png";

const LogoSlider = () => {
  return (
    <div className="flex flex-wrap justify-center space-x-4 overflow-x-auto py-4">
      <img src={logo1} alt="Client Logo 1" className="h-12 mb-4" />
      <img src={logo2} alt="Client Logo 2" className="h-12 mb-4" />
      <img src={logo3} alt="Client Logo 3" className="h-12 mb-4" />
      <img src={logo4} alt="Client Logo 4" className="h-12 mb-4" />
      <img src={logo5} alt="Client Logo 5" className="h-12 mb-4" />
      <img src={logo6} alt="Client Logo 6" className="h-12 mb-4" />
      <img src={logo7} alt="Client Logo 7" className="h-12 mb-4" />
    </div>
  );
};

const TrustedClients = () => {
  return (
    <></>
    // <div className="bg-white p-8 text-center">
    //   <h2 className="text-2xl font-bold mb-4">Trusted Clients</h2>
    //   <p className="mb-6">
    //     Leverage agile frameworks to provide a robust synopsis for high-level
    //     overviews. Iterative approaches to corporate strategy foster
    //   </p>
    //   <div className="flex justify-center items-center mt-4">
    //     {/* <LogoSlider /> */}
    //   </div>
    // </div>
  );
};

const BusinessPanel = ({ title, text, buttonText }) => {
  return (
    <div className="bg-orange-100 p-8 text-center">
      <h2 className="text-4xl font-bold mb-4">{title}</h2>
      <p className="mb-6">{text}</p>
      <button className="bg-orange-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 transition duration-300">
        {buttonText}
      </button>
    </div>
  );
};

const BusinessSection = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="md:flex md:justify-center md:items-center">
        <TrustedClients />
      </div>
      <div className="md:flex md:justify-center md:items-center md:space-x-8 mt-8">
        <BusinessPanel
          title="How can we build your business?"
          text="We work with you to transform your organization, driving bold ideas and pragmatic solutions."
          buttonText="LET'S WORK TOGETHER"
        />
        <BusinessPanel
          title="Our people are our greatest assets"
          text="We work with you to transform your organization, driving bold ideas and pragmatic solutions."
          buttonText="COME WORK WITH US"
        />
      </div>
    </div>
  );
};

export default BusinessSection;
