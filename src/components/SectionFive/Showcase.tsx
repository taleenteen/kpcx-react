import { useState } from "react";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

// Import images
import McGarrettImage from "../../assets/images/ShowCaseClient/McGarrett.png";
import BrookImage from "../../assets/images/ShowCaseClient/Brook.png";
import MICAImage from "../../assets/images/ShowCaseClient/MICA.png";

const Showcase = () => {
  // Define slider data
  const sliderData = [
    {
      id: 1,
      title: "McGarrett",
      content:
        "Through KPCX's expertise, we've successfully expanded our McGarrett brand's online presence. Their comprehensive ecommerce solutions have not only boosted our digital sales but have also provided valuable insights into consumer behavior. This data-driven approach has allowed us to make informed decisions and enhance our overall business performance.",
      image: McGarrettImage,
    },
    {
      id: 2,
      title: "BROOK",
      content:
        "KPCX has been instrumental in propelling our Brooks brand to new heights. Their data-driven strategies and deep understanding of the FMCG market have enabled us to identify untapped opportunities, optimize our product mix, and significantly increase our market share. Their tailored campaigns have resonated strongly with our target audience, driving substantial sales growth and brand loyalty.",
      image: BrookImage,
    },
    {
      id: 3,
      title: "MICA",
      content:
        "KPCX's ability to extract meaningful insight from complex data has been a game-changer for our Mica's brand. Their data-driven approach has helped us uncover hidden trends, optimize pricing strategies, and improve product assortment. By leveraging their analytics, we've been able to make data-informed decisions that have directly impacted our bottom line.",
      image: MICAImage,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = sliderData.length;

  // Handle buttons
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="max-w-screen-xl mx-auto py-8 px-4 lg:py-16 lg:px-6">
      <div className="relative w-full">
        <h1 className="font-bold text-4xl my-4 text-left">
          What Our Client Say
        </h1>

        <div className="relative w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {sliderData.map((slide) => (
              <div
                key={slide.id}
                className="flex-shrink-0 w-full flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between bg-whitebg p-8 lg:p-16"
              >
                <div className="lg:w-1/3 flex flex-col items-center lg:items-start mb-4 lg:mb-0">
                  <div className="w-32 h-32 overflow-hidden rounded-full">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h2 className="text-2xl font-bold mt-4 text-center lg:text-left">
                    {slide.title}
                  </h2>
                </div>

                <div className="relative lg:w-2/3 flex-grow text-center lg:text-left">
                  <RiDoubleQuotesL className="absolute -top-9 -left-5 text-3xl" />
                  <p className="text-lg">{slide.content}</p>
                  <RiDoubleQuotesR className="absolute -bottom-9 -right-5 text-3xl" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end mt-4 gap-4">
          <button
            onClick={handlePrev}
            className="p-4 bg-blue2 text-white text-xl rounded-full transition-transform hover:opacity-85 active:scale-95"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={handleNext}
            className="p-4 bg-blue2 text-white text-xl rounded-full transition-transform hover:opacity-85 active:scale-95"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
