import React from "react";
import { Link } from "react-router-dom"; // import Link จาก react-router-dom

const Contact = () => {
  const img =
    "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="max-w-screen-xl mx-auto py-8 px-4 lg:py-16 lg:px-6">
      <div
        className="relative bg-cover bg-center h-72 rounded-3xl overflow-hidden bg-fixed"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="text-center text-white p-4">
            <h1 className="text-4xl font-bold mb-4">
              Ready To Elevate Your Business?
            </h1>
            <Link to="/contact">
              <button className="bg-gray-200 text-black font-bold py-2 px-4 rounded-3xl hover:bg-white transition-all ease-in-out duration-300 hover:scale-110">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
