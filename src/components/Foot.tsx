import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa"; // Add react-icons for social media

const Foot: React.FC = () => {
  const logo = "/Footer-Logo.png";
  const bottominfo = "© 2024 KPCX. All Rights Reserved.";
  const OperatingTime = "8:00 am - 8:00 pm";

  return (
    <div className="bg-indigo-950">
      <div className="max-w-screen-xl mx-auto py-8 px-4 lg:py-16 lg:px-6">
        <footer className="p-4 rounded-lg drop-shadow-2xl md:px-6 md:py-8">
          <div className="flex flex-col sm:flex-row sm:justify-between items-center">
            <div className="flex items-center mb-4 sm:mb-0">
              <img
                src={logo}
                width={40}
                height={40}
                className="mr-4 h-10"
                alt="KPCX Company"
              />
              <span className="self-center text-2xl font-semibold text-white">
                KPCX
              </span>
            </div>
            <div className="flex flex-col sm:flex-row w-full sm:w-auto sm:justify-between">
              <div className="mb-6 sm:mb-0 sm:mr-8">
                <h3 className="text-lg font-bold text-white mb-2">Contact</h3>
                <p className="text-white text-sm">pongphols@kpc-x.com</p>
                <div className="flex space-x-4 mt-2">
                  <a
                    href="https://facebook.com"
                    aria-label="Facebook"
                    className="text-white hover:text-gray-400"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="https://twitter.com"
                    aria-label="Twitter"
                    className="text-white hover:text-gray-400"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href="https://instagram.com"
                    aria-label="Instagram"
                    className="text-white hover:text-gray-400"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://linkedin.com"
                    aria-label="LinkedIn"
                    className="text-white hover:text-gray-400"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
              <div className="text-white">
                <h3 className="text-lg font-bold mb-2">Operating Hours</h3>
                <p className="text-sm">
                  Mon - Fri: <span>{OperatingTime}</span>
                </p>
              </div>
            </div>
          </div>
          <ul className="flex flex-wrap justify-center items-center mt-8 sm:mt-12">
            <li>
              <a
                href="#About"
                className="mr-4 text-sm text-gray-400 hover:text-white md:mr-6"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#Services"
                className="mr-4 text-sm text-gray-400 hover:text-white md:mr-6"
              >
                Services
              </a>
            </li>
            <li>
              <a href="#Faq" className="text-sm text-gray-400 hover:text-white">
                FAQ
              </a>
            </li>
          </ul>
          <hr className="my-6 border-gray-600 sm:mx-auto lg:my-8" />
          <span className="block text-sm text-gray-400 text-center">
            {bottominfo}
          </span>
        </footer>
      </div>
    </div>
  );
};

export default Foot;
