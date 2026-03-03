import React from "react";

const Contact = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-700 text-white py-20 text-center px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10">
          Contact Our Support Team
        </h1>
        <p className="text-lg opacity-90 relative z-10">
          Fast responses. Reliable support. We're always here for you.
        </p>
      </section>

      {/* Main Section */}
      <section className="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="backdrop-blur-lg bg-white/70 p-10 rounded-3xl shadow-xl border border-gray-200">
          <h2 className="text-2xl font-bold mb-8 text-gray-800">
            Send Us a Message
          </h2>

          <form className="space-y-6">
            <div>
              <label className="block mb-2 text-sm font-medium">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">
                Order ID (Optional)
              </label>
              <input
                type="text"
                placeholder="Order ID"
                className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">Message</label>
              <textarea
                rows="4"
                placeholder="Type your message..."
                className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 hover:scale-[1.02] transition duration-300"
            >
              Submit Request
            </button>
          </form>
        </div>

        {/* Support Info Cards */}
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 border">
            <h3 className="text-lg font-semibold mb-3">
              📞 24/7 Customer Support
            </h3>
            <p className="text-gray-600">+91 98765 43210</p>
            <p className="text-gray-500 text-sm mt-1">
              Available 24 hours, 7 days a week
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 border">
            <h3 className="text-lg font-semibold mb-3">📧 Email Assistance</h3>
            <p className="text-gray-600">support@yourstore.com</p>
            <p className="text-gray-500 text-sm mt-1">
              We reply within 12–24 hours
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 border">
            <h3 className="text-lg font-semibold mb-3">🏢 Our Office</h3>
            <p className="text-gray-600">123 Business Street, Mumbai, India</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="p-6 border rounded-2xl hover:bg-gray-50 transition">
              <h3 className="font-semibold text-lg">
                How can I track my order?
              </h3>
              <p className="text-gray-600 mt-2">
                You can track your order from your account dashboard under "My
                Orders".
              </p>
            </div>

            <div className="p-6 border rounded-2xl hover:bg-gray-50 transition">
              <h3 className="font-semibold text-lg">
                What is your return policy?
              </h3>
              <p className="text-gray-600 mt-2">
                We offer a 7-day easy return on eligible products.
              </p>
            </div>

            <div className="p-6 border rounded-2xl hover:bg-gray-50 transition">
              <h3 className="font-semibold text-lg">
                How long does shipping take?
              </h3>
              <p className="text-gray-600 mt-2">
                Standard delivery usually takes 3–5 business days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Need Immediate Help?</h2>
        <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 hover:scale-105 transition duration-300">
          Start Live Chat
        </button>
      </section>

      {/* Floating Chat Button */}
      <button className="fixed bottom-6 right-6 bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:bg-indigo-700 hover:scale-110 transition duration-300">
        💬
      </button>
    </div>
  );
};

export default Contact;
