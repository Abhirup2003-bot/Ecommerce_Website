import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const { products, loading } = useSelector((state) => state.products);

  const slides = products.slice(0, 10);
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  useEffect(() => {
    if (length === 0) return;

    const slider = setInterval(() => {
      setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    }, 3500);

    return () => clearInterval(slider);
  }, [length]);

  const nextSlide = () => {
    setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
  };

  if (loading || slides.length === 0) {
    return (
      <div className="h-[250px] sm:h-[350px] flex items-center justify-center text-lg">
        Loading Banner...
      </div>
    );
  }

  return (
    <section className="w-full">
      <div className="max-w-screen-2xl mx-auto px-3 sm:px-6">
        <div
          className="relative bg-gray-100  overflow-hidden
                        h-[360px] 
                        sm:h-[390px] 
                        md:h-[520px] 
                        lg:h-[650px]"
        >
          {slides.map((product, index) => (
            <Link
              to={`/productdetails/${product.id}`}
              key={product.id}
              className={`absolute inset-0 transition-opacity duration-700 ${
                index === current ? "opacity-100 z-10" : "opacity-0"
              }`}
            >
              <div
                className="flex flex-col md:flex-row items-center justify-between
                              h-full gap-4 md:gap-8 
                              px-4 sm:px-8 py-6"
              >
                {/* TEXT SECTION */}
                <div className="text-center m-4 md:text-left max-w-md">
                  <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 line-clamp-2">
                    {product.title}
                  </h2>

                  <p className="text-sm sm:text-base mt-2 text-gray-600">
                    Category: {product.category}
                  </p>

                  <p className="text-base sm:text-lg md:text-xl mt-2 font-semibold text-green-600">
                    ${product.price}
                  </p>

                  <button className="mt-4 px-4 sm:px-6 py-2 text-sm sm:text-base bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-lg">
                    Shop Now
                  </button>
                </div>

                {/* IMAGE SECTION */}
                <div className="flex justify-center items-center w-full md:w-auto">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="max-h-[140px] sm:max-h-[200px] md:max-h-[260px] lg:max-h-[320px] object-contain"
                  />
                </div>
              </div>
            </Link>
          ))}

          {/* LEFT ARROW */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-2 sm:left-4 -translate-y-1/2 
                       bg-white/80 hover:bg-white 
                       p-1 sm:p-2 rounded-full shadow text-sm sm:text-lg"
          >
            ❮
          </button>

          {/* RIGHT ARROW */}
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-2 sm:right-4 -translate-y-1/2 
                       bg-white/80 hover:bg-white 
                       p-1 sm:p-2 rounded-full shadow text-sm sm:text-lg"
          >
            ❯
          </button>

          {/* DOTS */}
          <div className="absolute bottom-2 sm:bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full cursor-pointer transition-all ${
                  current === index ? "bg-black scale-110" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
