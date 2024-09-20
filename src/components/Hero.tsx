import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import HeroImage from "../assets/images/hero/Hero.jpg"; // Path to your image

export default function Hero() {
  const [isInView, setIsInView] = useState(false);
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (textRef.current) {
        const rect = textRef.current.getBoundingClientRect();
        const isInViewport = rect.top >= 0 && rect.bottom <= window.innerHeight;
        setIsInView(isInViewport);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run initially in case the element is already in view

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative w-full max-w-[1300px] h-screen xs:h-[450px] md:h-[600px] xl:h-[700px] mx-auto rounded-[30px] bg-white">
      <div
        className="absolute inset-0 bg-cover bg-center rounded-[30px]"
        style={{
          backgroundImage: `url(${HeroImage})`, // Use the image here
        }}
      >
        <div className="absolute inset-0 bg-black rounded-[30px] bg-opacity-25"></div>

        <div className="flex flex-col items-start justify-center h-full p-8 drop-shadow-2xl">
          <div ref={textRef}>
            <h1
              className={`text-5xl font-bold text-white transition-all duration-500 ${
                isInView
                  ? "opacity-100 transform translate-x-0"
                  : "opacity-0 transform -translate-x-10"
              }`}
            >
              Make E-commerce <br /> simple and accesible
            </h1>
            <p
              className={`mt-4 text-xl font-medium text-white transition-all duration-500 ${
                isInView
                  ? "opacity-100 transform translate-x-0"
                  : "opacity-0 transform translate-x-10"
              }`}
            >
              Unlock your E-commerce potential with KPCX&#44; a one-stop <br />
              service solution to all things E-commerce.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute w-[60px] h-[60px] bg-transparent bottom-0 right-[215px] rounded-[30px] z-3 shadow-[30px_30px_0px_rgba(246,246,246,1)]"></div>
      <div className="absolute w-[60px] h-[60px] bg-transparent bottom-24 right-0 rounded-[30px] z-3 shadow-[30px_30px_0px_rgba(246,246,246,1)]"></div>

      <div className="absolute bottom-0 right-0 h-[96px] w-[215px] z-2 bg-whitebg rounded-tl-[50px]">
        <div className="flex justify-center items-center h-full">
          <Link to="/contact">
            <button className="group lg:flex w-48 text-white font-bold h-20 items-center justify-center rounded-full duration-500 bg-gradient-to-tl from-blue2 via-indigo-500 to-blue1 bg-size-200 bg-pos-0 hover:bg-pos-100">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
