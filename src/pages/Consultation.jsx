import React from "react";

const Consultation = () => {
  return (
    <div className="flex flex-wrap bg-white">
      <div className="p-6 text-white mb-10 mx-auto md:ml-16 lg:ml-32 xl:ml-[124px] bg-orange-400 md:w-1/3 lg:w-1/4">
        <h1 className="text-2xl font-bold">Need Consultation</h1>
        <p className="text-lg mt-4">
          Contact our customer support team if you have any further questions.
          We are here to help you out
        </p>
        <p className="text-2xl font-semibold mt-8">support@buslalatechnologies.ltd</p>
      </div>
      <div className="p-6 bg-white mx-auto md:w-2/3 lg:w-1/2">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          Crafting Digital Experiences
        </h1>
        <p className="text-md md:text-lg mt-4">
          Our team of talented developers, designers, and strategists bring a
          diverse blend of experience and expertise, creating websites that not
          only look stunning but function seamlessly. We delve deep into
          understanding your business goals to create a custom web solution that
          sets you apart from the competition.
        </p>
      </div>
    </div>
  );
};

export default Consultation;
