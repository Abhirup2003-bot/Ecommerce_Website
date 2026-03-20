import React from "react";
import { useSelector } from "react-redux";
import Cards from "../components/Cards";
import { selectCartTotal } from "../feature/cart/cartSelectors";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalPrice = useSelector(selectCartTotal);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100">
      <div className="text-2xl text-center py-6 font-bold">My Cart</div>

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 px-4">
        {cartItems.length === 0 ? (
          <h2 className="text-center col-span-full text-gray-500 dark:text-gray-400">
            Your cart is empty
          </h2>
        ) : (
          cartItems.map((item) => (
            <Cards
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
              category={item.category}
              quantity={item.quantity}
              isCartPage={true}
            />
          ))
        )}
      </div>

      {/* TOTAL PRICE */}

      {cartItems.length > 0 && (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white dark:bg-gray-800 shadow rounded-xl">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            Cart Summary
          </h2>

          <div className="flex justify-between mb-2 text-gray-700 dark:text-gray-300">
            <span>Total Items</span>
            <span>{cartItems.length}</span>
          </div>

          <div className="flex justify-between text-lg font-bold text-gray-900 dark:text-white">
            <span>Total Price</span>
            <span>₹{totalPrice.toFixed(2)}</span>
          </div>

          <button className="w-full mt-4 bg-green-600 text-white py-2 rounded-lg">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
