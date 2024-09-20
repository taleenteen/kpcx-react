import React from "react";
import Image14 from "../../assets/images/WhyKPCX/14.png";
import Image15 from "../../assets/images/WhyKPCX/15.png";
import Image16 from "../../assets/images/WhyKPCX/16.png";
import Image17 from "../../assets/images/WhyKPCX/17.png";

interface BotSectionItem {
  src: string;
  heading: string;
  strong: string;
  content: string;
}

// Define botSectionData array with imported images
const botSectionData: BotSectionItem[] = [
  {
    src: Image14, // Use the imported image as src
    heading: "Comprehensive Solutions",
    strong: "Seamless End-to-End service",
    content: "covering all aspects of online activation",
  },
  {
    src: Image15,
    heading: "Customizable Strategies",
    strong: "Data-driven strategies",
    content:
      "specifically tailored to meet unique goals and challenges for each business",
  },
  {
    src: Image16,
    heading: "Advanced Analytics & Reporting",
    strong: "Leverage cutting-edge technology and real-time reporting",
    content: "to track campaign effectiveness",
  },
  {
    src: Image17,
    heading: "Trusted By Leading Brands",
    strong: "Delivering results and expertise",
    content: "through experience of working with numerous world-class brands",
  },
];

const Info: React.FC = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-8 px-4 lg:py-16 lg:px-6">
      <div className="flex flex-col md:flex-row">
        <div className="container px-2 pb-14 mx-auto">
          <div className="flex justify-center items-center flex-col">
            <div className="flex flex-col md:flex-row">
              {/* Mission Section */}
              <div className="flex justify-center items-center border-dashed lg:border-b-2 lg:border-r-2 border-gray-300 p-8 w-full md:w-1/4">
                <h2 className="text-4xl md:text-6xl font-bold text-blue2">
                  Mission
                </h2>
              </div>
              <div className="flex justify-center items-center border-dashed lg:border-b-2 border-gray-300 p-8 w-full md:w-3/4">
                <p className="text-lg md:text-xl text-gray-800">
                  Empower retailers to unlock their potential and reach new
                  heights of success by
                  <span className="font-bold">
                    {" "}
                    making e-commerce simple &amp; accessible
                  </span>
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row">
              {/* Vision Section */}
              <div className="flex justify-center items-center border-dashed lg:border-r-2 border-gray-300 p-8 w-full md:w-1/4">
                <h2 className="text-4xl md:text-6xl font-bold text-blue2">
                  Vision
                </h2>
              </div>
              <div className="flex justify-center items-center p-8 w-full md:w-3/4">
                <p className="text-lg md:text-xl text-gray-800">
                  We aspire to
                  <span className="font-bold">
                    {" "}
                    enable retailers to fully harness their online market
                    potential
                  </span>
                  &nbsp;through innovative solutions, insightful strategies, and
                  a collaborative approach
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-4xl tracking-tight font-bold text-primary-800 text-start md:mr-8 mb-6 md:mb-0 animate-fadeInLeft">
        Why KPCX?
      </h2>

      <div className="container px-2  mx-auto">
        <div className="flex flex-wrap text-center justify-center">
          {botSectionData.map(({ src, heading, strong, content }, index) => (
            <div
              key={index}
              className="lg:p-4 md:p-4 lg:w-1/4 sm:w-1/2 sm:p-12 animate-fadeInRight"
            >
              <div className="px-4 py-6 drop-shadow-sm transform transition duration-500 hover:scale-110 hover:drop-shadow-2xl">
                <div className="flex justify-center my-6">
                  <img
                    src={src}
                    width={144}
                    height={144}
                    alt={heading}
                    className="w-36"
                  />
                </div>
                <h1 className="font-bold text-start text-2xl my-4">
                  {heading}
                </h1>
                <h2 className="font-regular text-start text-lg ">
                  <strong className="drop-shadow-2xl">{strong}</strong>{" "}
                  {content}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Info);
