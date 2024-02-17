import React from "react";
import website from "../asset/website-development.png";
import web from "../asset/web-application.png";
import ecommerce from "../asset/ecommerce-solution.png";
import app from "../asset/app-development.png";
import seo from "../asset/seo-service.png";
import smo from "../asset/smo-service.png";

const services = [
  { name: "Website Development", icon: website },
  { name: "Web Application", icon: web },
  { name: "Ecommerce Solution", icon: ecommerce },
  { name: "App Development", icon: app },
  { name: "SEO Services", icon: seo },
  { name: "SMO Services", icon: smo },
];

const ServiceCard = ({ name, icon }) => {
  return (
    <div className="text-center p-4 transition duration-300 transform hover:scale-105 hover:shadow-lg bg-white rounded-md">
      <img src={icon} alt={name} className="mx-auto mb-4" />
      <div className="text-sm md:text-base lg:text-lg">{name}</div>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <div className="bg-white py-8 md:py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-orange-600 text-center">
          Our Services
        </h2>
        <p className="mt-4 text-sm md:text-base lg:text-lg text-white-600 text-center">
          We delve deep into understanding your business goals to create a
          custom web solution that sets you apart from the competition.
        </p>
        <div className="flex flex-wrap justify-center mt-6 -mx-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 px-4 mb-8"
            >
              <ServiceCard name={service.name} icon={service.icon} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
