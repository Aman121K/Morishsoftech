import React from "react";
import core from "../asset/core-img.jpg";

const CoreValuesSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white p-8">
      <div className="md:w-1/2 md:ml-20">
        <img src={core} alt="Core Values" className="rounded-lg shadow-lg" />
      </div>
      <div className="md:w-1/2 mt-6 md:mt-0 md:pl-8">
        <h2 className="text-4xl font-bold text-teal-600 mb-4">
          Our Core Values & Expertises
        </h2>
        <p className="text-gray-600 mb-6">
          With integrity as a core value, we wish to provide all our customers
          with a matchless experience in terms of service and value addition. We
          understand that creating effective web solutions for a brand requires
          us to forge strong and long terms relations with our customers.
        </p>
        <div className="flex justify-start space-x-8">
          <div className="text-center">
            <p className="text-3xl font-semibold text-teal-600">6+</p>
            <p className="text-gray-600">Countries Serve</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-semibold text-teal-600">110+</p>
            <p className="text-gray-600">Clients Serve</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-semibold text-teal-600">340+</p>
            <p className="text-gray-600">Projects Completed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreValuesSection;
