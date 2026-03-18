import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Hero Section */}
      <section className="bg-white dark:bg-gray-800 py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              We Make Online Shopping Simple & Affordable
            </h1>

            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Discover high-quality products at unbeatable prices. Trusted by
              thousands of happy customers across India.
            </p>

            <Link to="/product">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
                Shop Now
              </button>
            </Link>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a"
              alt="Ecommerce"
              className="rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-gray-100 dark:bg-gray-800 py-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 text-center px-6">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              🚚 Fast Delivery
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
              Quick & reliable shipping nationwide.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              🔄 Easy Returns
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
              7-day hassle-free return policy.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              💳 Secure Payment
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
              100% safe & encrypted checkout.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              ⭐ Trusted Quality
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
              Carefully selected premium products.
            </p>
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            Our Journey
          </h2>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Founded with a vision to simplify online shopping, our platform
            connects customers with top-quality brands and trending products. We
            believe shopping should be convenient, affordable, and enjoyable.
            Our team works daily to bring you the best deals and fastest
            delivery.
          </p>
        </div>
      </section>

      {/* Why Shop With Us */}
      <section className="bg-white dark:bg-gray-800 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="p-8 border dark:border-gray-700 rounded-2xl hover:shadow-lg transition bg-white dark:bg-gray-900">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
              Wide Product Range
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              From electronics to fashion, find everything in one place.
            </p>
          </div>

          <div className="p-8 border dark:border-gray-700 rounded-2xl hover:shadow-lg transition bg-white dark:bg-gray-900">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
              Affordable Pricing
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Competitive prices with exclusive discounts and offers.
            </p>
          </div>

          <div className="p-8 border dark:border-gray-700 rounded-2xl hover:shadow-lg transition bg-white dark:bg-gray-900">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
              Customer First Approach
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Dedicated support team ready to help anytime.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Join Thousands of Happy Shoppers
        </h2>

        <Link to="/product">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-200 transition">
            Start Shopping
          </button>
        </Link>
      </section>
    </div>
  );
};

export default About;
