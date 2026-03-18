import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../feature/cart/cartSlice";

const ProductDetailsView = ({
  id,
  image,
  title,
  price,
  description,
  rating,
  category,
  images,
  returnPolicy,
}) => {
  const dispatch = useDispatch();

  const [selectedImage, setSelectedImage] = useState(image);

  useEffect(() => {
    setSelectedImage(image);
  }, [image]);

  const originalPrice = price + 50;
  const discount = Math.round(((originalPrice - price) / originalPrice) * 100);

  const handleAddToCart = () => {
    const product = {
      id,
      image: selectedImage,
      title,
      price,
      rating,
      category,
    };

    dispatch(addToCart(product));
  };

  return (
    <>
      <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-10 px-4">
        <div className="max-w-7xl mx-auto bg-white dark:bg-gray-800 p-8 grid grid-cols-1 md:grid-cols-2 gap-12 rounded-2xl shadow-lg">
          {/* LEFT - IMAGE SECTION */}
          <div className="flex flex-col items-center">
            {/* MAIN IMAGE */}
            <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-xl p-6 flex items-center justify-center hover:shadow-md transition duration-300">
              <img
                src={selectedImage}
                alt={title}
                loading="lazy"
                className="w-full max-h-[420px] object-contain transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* THUMBNAILS */}
            <div className="flex gap-3 mt-4 overflow-x-auto">
              {images?.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="product"
                  onClick={() => setSelectedImage(img)}
                  className={`w-16 h-16 object-contain border rounded-lg cursor-pointer p-1 transition
                  ${
                    selectedImage === img
                      ? "border-blue-500"
                      : "border-gray-200 dark:border-gray-600"
                  }`}
                />
              ))}
            </div>

            {/* BUTTONS */}
            <div className="flex gap-4 mt-8 w-full">
              <button
                onClick={handleAddToCart}
                className="w-1/2 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                🛒 Add to Cart
              </button>

              <button className="w-1/2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                ⚡ Buy Now
              </button>
            </div>
          </div>

          {/* RIGHT - DETAILS */}
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white leading-snug">
              {title}
            </h1>

            <div className="flex items-center gap-3 mt-4">
              <span className="bg-green-600 text-white text-sm px-3 py-1 rounded-full font-medium shadow">
                {rating} ★
              </span>

              <span className="text-gray-500 dark:text-gray-400 text-sm">
                1,245 Ratings & 230 Reviews
              </span>
            </div>

            <div className="mt-6 flex items-center flex-wrap gap-3">
              <span className="text-4xl font-bold text-gray-900 dark:text-white">
                ₹{price}
              </span>

              <span className="text-gray-500 dark:text-gray-400 line-through text-lg">
                ₹{originalPrice}
              </span>

              <span className="text-green-600 font-semibold text-lg">
                {discount}% off
              </span>
            </div>

            <p className="text-green-600 text-sm mt-2 font-medium">
              {returnPolicy}
            </p>

            <div className="border-t dark:border-gray-700 my-6"></div>

            {/* OFFERS */}
            <div className="border dark:border-gray-700 rounded-xl p-5 bg-gray-50 dark:bg-gray-900 shadow-sm hover:shadow-md transition duration-300">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-3 text-lg">
                🎁 Available Offers
              </h3>

              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✔</span>
                  Bank Offer 10% off on ICICI Bank Cards
                </li>

                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✔</span>
                  Special Price Get extra ₹2000 off
                </li>

                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✔</span>
                  No Cost EMI starting from ₹2,500/month
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <h3 className="font-semibold text-xl mb-3 capitalize text-gray-800 dark:text-white">
                {category}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-[15px]">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsView;
