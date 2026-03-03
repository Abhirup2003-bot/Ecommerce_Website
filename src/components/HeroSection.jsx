import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const slides = [
  "https://images.unsplash.com/photo-1607082349566-187342175e2f",
  "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a",
  "https://images.unsplash.com/photo-1580910051074-3eb694886505",
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  // Auto Slide
  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(slider);
  }, [length]);

  const nextSlide = () => {
    setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
  };

  return (
    <section className="w-full">
      <div className="max-w-screen-2xl mx-auto relative">
        {/* Slider */}
        <div
          className="relative w-full 
                        h-[250px] 
                        sm:h-[350px] 
                        md:h-[450px] 
                        lg:h-[550px] 
                        xl:h-[650px] 
                        overflow-hidden"
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${
                index === current ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <img
                src={slide}
                alt="banner"
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          ))}

          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-3 md:left-5 -translate-y-1/2 
                       bg-white/60 hover:bg-white 
                       p-2 md:p-3 
                       rounded-full shadow-md 
                       text-sm md:text-lg"
          >
            ❮
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-3 md:right-5 -translate-y-1/2 
                       bg-white/60 hover:bg-white 
                       p-2 md:p-3 
                       rounded-full shadow-md 
                       text-sm md:text-lg"
          >
            ❯
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 md:gap-3">
            {slides.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full cursor-pointer transition-all ${
                  current === index ? "bg-white scale-125" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row justify-center items-center 
                        gap-4 
                        py-6 md:py-10 px-4"
        >
          <Link
            to="/product"
            className="w-full sm:w-auto text-center 
                       px-6 py-3 
                       bg-green-600 hover:bg-green-700 
                       text-white font-semibold 
                       rounded-lg shadow-md 
                       transition duration-300"
          >
            Get Started
          </Link>

          <Link
            to="/about"
            className="w-full sm:w-auto text-center 
                       px-6 py-3 
                       bg-amber-400 hover:bg-amber-500 
                       text-gray-900 font-semibold 
                       rounded-lg shadow-md 
                       transition duration-300"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
