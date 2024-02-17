import React, { useState, useEffect, useCallback } from "react";

const Testimonial = () => {
  const testimonials = [
    "Working with Buslala Technologies was an absolute pleasure. Their web application development skills helped streamline our business processes, saving us time and resources. Their commitment to delivering on time and within budget was impressive. We look forward to collaborating with them on future projects. - Shashi Ranjan, MD of Ride Poolings Technologies Pvt Ltd INDIA.",
    "Another Working with Buslala Technologies was an absolute pleasure. Their web application development skills helped streamline our business processes, saving us time and resources. Their commitment to delivering on time and within budget was impressive. We look forward to collaborating with them on future projects. - Shashi Ranjan, MD of  Ride Poolings Technologies Pvt Ltd INDIA.",
    "Yet another Working with Buslala Technologies was an absolute pleasure. Their web application development skills helped streamline our business processes, saving us time and resources. Their commitment to delivering on time and within budget was impressive. We look forward to collaborating with them on future projects. - Shashi Ranjan, MD of  Ride Poolings Technologies Pvt Ltd INDIA.",
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const showNextTestimonial = useCallback(() => {
    setCurrentTestimonial((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, [testimonials.length]);

  const showPrevTestimonial = useCallback(() => {
    setCurrentTestimonial(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  }, [testimonials.length]);

  useEffect(() => {
    const intervalId = setInterval(showNextTestimonial, 4000);

    return () => clearInterval(intervalId);
  }, [showNextTestimonial]);

  return (
    <div className="bg-orange-400 text-white p-4 md:p-10 relative">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <button
          className="text-white mb-4 md:mb-0"
          onClick={showPrevTestimonial}
        >
          <span className="text-2xl">&#60;</span>
        </button>
        <div className="text-center md:px-6">
          <h2 className="text-lg md:text-2xl font-semibold mb-4">
            What our Client Says
          </h2>
          <div className="flex items-center justify-center mb-4">
            <div className="bg-white rounded-full p-2 md:p-3 inline-block">
              <span className="text-orange-400 text-lg md:text-2xl">
                &#128100;
              </span>
            </div>
          </div>
          <p className="text-sm md:text-lg">
            {testimonials[currentTestimonial]}
          </p>
        </div>
        <button
          className="text-white mb-4 md:mb-0"
          onClick={showNextTestimonial}
        >
          <span className="text-2xl">&#62;</span>
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
