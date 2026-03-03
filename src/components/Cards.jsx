import React from "react";

const Cards = ({ id, title, image, price, rating, category }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md mx-4 hover:shadow-xl transition duration-300 p-4 group cursor-pointer">
      {/* Image Section */}
      <div className="relative overflow-hidden rounded-xl bg-gray-100">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-52 object-contain group-hover:scale-105 transition duration-300"
        />

        {/* Discount Badge */}
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-md">
          {category}
        </span>
      </div>

      {/* Product Info */}
      <div className="mt-3 space-y-2">
        {/* Title */}
        <h2 className="text-sm font-medium text-gray-800 line-clamp-2 hover:text-blue-600 transition">
          {title}
        </h2>

        {/* Ratings */}
        <div className="flex items-center gap-1 text-yellow-500 text-sm">
          ★★★★☆
          <span className="text-gray-500 text-xs">{rating}</span>
        </div>

        {/* Price Section */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold text-gray-900">₹{price}</span>
          <span className="text-sm text-gray-500 line-through">
            ₹{price + 300}
          </span>
        </div>

        {/* Add to Cart Button */}
        <button className="w-full mt-2 bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 rounded-lg transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Cards;
