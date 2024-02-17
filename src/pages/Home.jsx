import React, { useState, useEffect, useCallback } from "react";
import slider4 from "../asset/slider-4.webp";
import slider5 from "../asset/slider-5.jpg";
import slider6 from "../asset/slider-6.jpg";

const Home = () => {
  const sliders = [slider5, slider6];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const showNextSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % sliders.length);
  }, [sliders.length]);

  const showPrevSlide = useCallback(() => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + sliders.length) % sliders.length
    );
  }, [sliders.length]);

  const handleNextClick = () => {
    showNextSlide();
    setAutoplay(false);
  };

  const handlePrevClick = () => {
    showPrevSlide();
    setAutoplay(false);
  };

  useEffect(() => {
    if (autoplay) {
      const intervalId = setInterval(showNextSlide, 3000);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [showNextSlide, autoplay]);

  return (
    <section className="main_slider_area relative">
      <div className="video_boxes relative">
        <div className="container relative">
          <div
            className="video_boxs relative bg-cover bg-center h-screen flex items-center justify-center"
            style={{ backgroundImage: `url(${sliders[currentSlide]})` }}
            onClick={() => setAutoplay(!autoplay)}
          >
            <button
              onClick={handlePrevClick}
              className="text-2xl slider-button previous-button absolute left-2 transform -translate-y-1/2 translate-x-1/2 top-1/2 hover:scale-120 hover:shadow-md transition-transform duration-300"
            >
              {"<"}
            </button>
            <div className="absolute bottom-0 ml-2 md:ml-20 left-2 md:left-12 right-2 md:right-15 p-4 text-center bg-opacity-30 backdrop-blur-md">
              <h1 className="md:text-6xl text-4xl font-bold text-white">
                Making <br /> Business <br /> Easy
              </h1>
            </div>
            <div className="md:p-12 text-gray-800 md:mr-11 ">
              <h1 className="text-2xl md:text-4xl font-bold ml-56">
                Reinventing Companies for{" "}
                <span className="text-white">a digital future</span>
              </h1>
              <p className="text-lg md:text-xl mt-4 ">
                Buslala Technologies is one of the world’s top business consulting
                firms. We help global leaders with their organization's most
                critical issues & opportunities.
              </p>
            </div>
            <button
              onClick={handleNextClick}
              className="text-2xl slider-button next-button absolute right-2 transform -translate-y-1/2 translate-x-1/2 top-1/2 hover:scale-120 hover:shadow-md transition-transform duration-300"
            >
              {">"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
