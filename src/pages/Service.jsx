import React from "react";
import { NavLink } from "react-router-dom";

const Service = () => {
  return (
    <div className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl font-bold mb-4">Our Company</h1>
            <p>
              With our services, we diligently aim to add to the value
              proposition of your brand.
            </p>
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <span className="text-white-400 leading-loose">
              We begin by listening to you, understanding your industry, and
              analyzing your needs. From there, we craft a personalized strategy
              that aligns with your brand's values and goals. Our tailored
              solutions are not one-size-fits-all but created specifically to
              resonate with your target audience. We leverage cutting-edge
              technology and an agile development process to deliver results
              that not only meet but exceed your expectations.
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-16">
          <div className="text-center bg-gray-800 p-6 rounded-md">
            <h3 className="text-2xl font-bold mb-2">Mission & Values</h3>
            <p className="text-white-400">
              Our mission is to help our clients achieve their business goals by
              providing them with the highest quality digital marketing
              services.
            </p>
            <NavLink to='/mission-values' className="btn btn-secondary mt-4">Read More</NavLink>
          </div>
          <div className="text-center bg-gray-800 p-6 rounded-md">
            <h3 className="text-2xl font-bold mb-2">Why Choose Us</h3>
            <p className="text-white-400">
              We have a team of experienced professionals who are passionate
              about what they do.
            </p>
            <NavLink to='/choose-us' className="btn btn-secondary mt-4">Read More</NavLink>
          </div>
          <div className="text-center bg-gray-800 p-6 rounded-md">
            <h3 className="text-2xl font-bold mb-2">Our Commitment</h3>
            <p className="text-white-400">
              We are committed to providing our clients with the best possible
              service.
            </p>
            <NavLink to='' className="btn btn-secondary mt-4">Read More</NavLink>
          </div>
          <div className="text-center bg-gray-800 p-6 rounded-md">
            <h3 className="text-2xl font-bold mb-2">Our Expertise</h3>
            <p className="text-white-400">
              We have a wide range of expertise in all areas of digital
              marketing.
            </p>
            <NavLink to='' className="btn btn-secondary mt-4">Read More</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
