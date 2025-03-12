import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#E3D2C3] text-[rgb(17,31,32)] py-8 px-6">
      <div className="container mx-auto flex justify-between text-left">
        {/* Contact Information */}
        <div>
          <h2 className="text-lg font-bold mb-2">Contact Us</h2>
          <p className="flex items-center mb-1">
            <span className="mr-2">📞</span> +8801772694038
          </p>
          <p className="flex items-center mb-1">
            <span className="mr-2">💬</span> +8801772694038
          </p>
          <p className="flex items-center">
            <span className="mr-2">✉️</span> monon@support.com
          </p>
        </div>

        {/* Social Media Icons */}
        <div>
          <h2 className="text-lg font-bold mb-2">Socials</h2>
          <div className="flex space-x-4">
            <a href="#" className="text-2xl">📘</a>
            <a href="#" className="text-2xl">📸</a>
            <a href="#" className="text-2xl">▶️</a>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h2 className="text-lg font-bold mb-2">Our Newsletter</h2>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-l bg-gray-200 text-black"
            />
            <button
              type="submit"
              className="p-2 bg-teal-500 text-white rounded-r"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
