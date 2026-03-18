import React from "react";
import { useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../feature/cart/cartSlice";

const Cards = ({
  id,
  title,
  image,
  price,
  rating,
  category,
  quantity,
  isCartPage = false,
}) => {
  const dispatch = useDispatch();

  const handleAddToCart = (e) => {
    e.preventDefault();

    const product = {
      id,
      title,
      image,
      price,
      rating,
      category,
    };

    dispatch(addToCart(product));
  };

  const handleRemove = (e) => {
    e.preventDefault();
    dispatch(removeFromCart(id));
  };

  const increase = () => {
    dispatch(increaseQuantity(id));
  };

  const decrease = () => {
    dispatch(decreaseQuantity(id));
  };

  const totalStars = 5;
  const filledStars = Math.round(rating);
  const emptyStars = totalStars - filledStars;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md dark:shadow-lg mx-4 hover:shadow-xl dark:hover:shadow-2xl transition duration-300 p-4 group cursor-pointer">
      {/* Image */}
      <div className="relative overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-700">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-52 object-contain"
        />

        <span className="absolute top-2 left-2 bg-orange-400 text-white text-xs px-2 py-1 rounded-md">
          {category}
        </span>
      </div>

      {/* Info */}
      <div className="mt-3 space-y-2">
        <h2 className="text-sm font-medium text-gray-800 dark:text-gray-200 line-clamp-2">
          {title}
        </h2>

        {/* Rating */}
        <div className="flex items-center gap-1 text-sm">
          {[...Array(filledStars)].map((_, index) => (
            <span key={index} className="text-yellow-500">
              ★
            </span>
          ))}

          {[...Array(emptyStars)].map((_, index) => (
            <span key={index} className="text-gray-300 dark:text-gray-500">
              ★
            </span>
          ))}

          <span className="text-gray-500 dark:text-gray-400 text-xs ml-1">
            ({rating})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold text-gray-900 dark:text-white">
            ₹{price}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400 line-through">
            ₹{price + 300}
          </span>
        </div>

        {/* PRODUCT PAGE BUTTON */}
        {!isCartPage && (
          <button
            onClick={handleAddToCart}
            className="w-full mt-2 bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 rounded-lg"
          >
            Add to Cart
          </button>
        )}

        {/* CART PAGE CONTROLS */}
        {isCartPage && (
          <>
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center gap-3">
                <button
                  onClick={decrease}
                  className="px-3 py-1 bg-gray-200 dark:bg-gray-700 dark:text-white rounded"
                >
                  -
                </button>

                <span className="dark:text-white">{quantity}</span>

                <button
                  onClick={increase}
                  className="px-3 py-1 bg-gray-200 dark:bg-gray-700 dark:text-white rounded"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleRemove}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Remove
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cards;
