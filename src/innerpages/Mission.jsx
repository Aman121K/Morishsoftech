import React from "react";

const Mission = () => {
  return (
    <>
      <div className="bg-white shadow-lg rounded-lg p-8 mb-10">
        <h1 className="text-4xl font-bold text-left text-orange-600">
          Mission & Values
        </h1>
      </div>
      <div className="flex flex-wrap bg-gray-100">
        <div className="w-full lg:w-1/4 bg-orange-600 text-white p-8">
          <ul className="space-y-4">
            <li className="py-2 font-medium">About Us</li>
            <li className="py-2 font-medium">Mission & Values</li>
            <li className="py-2 font-medium">Why Chooes Us</li>
            <li className="py-2 font-medium">Reach Us</li>
            
          </ul>
        </div>

        <div className="w-full lg:w-3/4 bg-white p-8">
          <h1 className="text-3xl font-bold text-orange-600 mb-6">
            Our Mission & Values Statement
          </h1>
          <p className="text-gray-600 leading-relaxed mb-8">
            Our approach integrates modern design with the latest technology,
            ensuring our clients stay at the forefront of the digital world.
            With a team of skilled professionals, Morishsoftech is committed to
            driving success and delivering exceptional value through our
            distinctive web solutions.
          </p>

          <h1 className="mt-10 text-3xl font-bold text-orange-600 mb-6">
            Our Values
          </h1>
          <p className="text-gray-600 leading-relaxed mb-8">
            With integrity as a core value, we wish to provide all our customers
            with a matchless experience in terms of service and value addition.
            We understand that creating effective web solutions for a brand
            requires us to forge strong and long terms relations with our
            customers. We value their inputs and strive towards serving them by
            optimizing all our resources. It is an established fact that
            nowadays, websites play a huge part in influencing the purchase
            decisions of customers.
          </p>
        </div>
      </div>
    </>
  );
};

export default Mission;
