import React from "react";

const About = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center bg-gray-200">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <div className="flex flex-col md:flex-row justify-around w-full md:w-3/4">
          <div className="flex flex-col w-full md:w-1/2 p-4 md:p-10">
            <p className="mb-4 bg-purple-200 text-justify rounded-lg">
              At Morishsoftech, we develop distinct intelligible, robust and
              secure digital solutions and software applications as per specific
              needs of your enterprise. Our team of expert developers and web
              designers are adept in creating world-class creative solutions
              customized to address the specific priorities of businesses.
            </p>
            <p className="mb-4 text-justify">
              We strive to provide profound value-addition to your business
              through our competent and efficient web solutions. Our aim is to
              help you put forth a better portrayal of your products and
              services to facilitate greater customer engagement. Getting
              professional web solutions can help your business attain a
              professional demeanour.
            </p>
            <p className="mb-4 text-justify">
              Our software applications are designed to work efficiently with
              advanced devices and latest technologies to provide our clients
              with a distinguished experience.
            </p>
          </div>
          <div className="flex flex-col w-full md:w-1/2 p-4 md:p-10">
            <h2 className="text-2xl font-bold text-purple-500 mb-4">
              We believe that powerful design is an extension of brand building.
            </h2>
            <p className="mb-4 text-justify">
              We help you in creating a compelling visual identity for your
              brand or business. In all our endeavors, we aim to help brands and
              enterprises create a lasting impression on potential clients and
              end-consumers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
