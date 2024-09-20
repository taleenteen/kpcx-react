import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 transition-transform duration-300 z-20">
      <div className="flex justify-center">
        <div className="flex align-middle flex-row gap-[24px] py-6 px-14 w-full max-w-[1450px]">
          <div className="flex flex-grow items-center justify-between bg-whitebg rounded-full">
            <div className="h-[80px] w-[150px] flex items-center justify-center">
              <Link to="/">
                <img
                  src="/Logo.png"
                  alt="Logo"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </Link>
            </div>
            <div className="hidden lg:flex pr-14 gap-6 md:gap-9 lg:gap-14 items-center">
              {["#About", "#Services", "#Faq"].map((item) => (
                <a
                  key={item}
                  href={item}
                  className="text-gray-800 group font-medium hover:text-blue2 transition-all duration-300 ease-in-out hover:drop-shadow-2xl"
                >
                  {item.slice(1).toUpperCase()}
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue2"></span>
                </a>
              ))}
            </div>
            <Link
              to="/contact"
              className="block lg:hidden relative mr-6 group font-medium text-gray-800 hover:text-blue2 transition-all duration-300 ease-in-out hover:drop-shadow-2xl"
            >
              CONTACT
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue2"></span>
            </Link>
          </div>
          <div className="hidden lg:flex h-20 items-center justify-center min-w-[133px] rounded-full duration-500 bg-gradient-to-tl from-blue2 via-indigo-500 to-blue1 bg-size-200 bg-pos-0 hover:bg-pos-100">
            <Link to="/contact">
              <button className="text-white font-medium text-center">
                Contact Us
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
