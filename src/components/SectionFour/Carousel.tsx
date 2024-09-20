import React, { MutableRefObject } from "react";
import {
  useKeenSlider,
  KeenSliderPlugin,
  KeenSliderInstance,
} from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { FaAngleRight } from "react-icons/fa";
import OperationImage from "../../assets/images/ServiceMap/Operation.jpeg";
import WarehouseImage from "../../assets/images/ServiceMap/Warehouse.jpg";
import CampaignImage from "../../assets/images/ServiceMap/Campaign.jpeg";
import DataImage from "../../assets/images/ServiceMap/Data.jpeg";
import InvestmentImage from "../../assets/images/ServiceMap/Investment.jpeg";
import ProductImage from "../../assets/images/ServiceMap/Product.jpg";
import ManagingImage from "../../assets/images/ServiceMap/Managing.jpeg";

const items = [
  { title: "Operation", img: OperationImage },
  { title: "Warehouse & Distribution", img: WarehouseImage },
  { title: "Campaign Planning", img: CampaignImage },
  { title: "Data Analysis", img: DataImage },
  { title: "Investment", img: InvestmentImage },
  { title: "Product Owner", img: ProductImage },
  { title: "Managing Content", img: ManagingImage },
];

function ThumbnailPlugin(
  mainRef: MutableRefObject<KeenSliderInstance | null>
): KeenSliderPlugin {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("active");
      });
    }
    function addActive(idx: number) {
      slider.slides[idx].classList.add("active");
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx);
        });
      });
    }

    slider.on("created", () => {
      if (!mainRef.current) return;
      addActive(slider.track.details.rel);
      addClickEvents();
      mainRef.current.on("animationStarted", (main) => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
      });
    });
  };
}

export default function App() {
  const [instanceRef] = React.useState<
    MutableRefObject<KeenSliderInstance | null>
  >(React.createRef());
  const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      slides: {
        perView: 2,
        spacing: 10,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  );

  return (
    <>
      <div className="max-w-screen-xl mx-auto mt-14 px-4 lg:px-6">
        <div className="flex justify-end">
          <h1 className="text-3xl">
            <FaAngleRight />
          </h1>
        </div>
        <div ref={thumbnailRef} className="keen-slider thumbnail">
          <div className="keen-slider__slide-container my-12">
            {items.map((item, index) => (
              <div
                key={index}
                className={`keen-slider__slide flex items-end justify-start relative rounded-xl ${
                  index < 4
                    ? "shadow-bottom-only-mobile shadow-blue2"
                    : "shadow-bottom-only-mobile shadow-gray-900"
                }
              }`}
                style={{
                  backgroundImage: `url(${item.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <h1 className="text-white ml-4 font-bold text-2xl mb-4 z-10">
                  {item.title}
                </h1>
                <div className="bg-black absolute w-full h-full z-0 opacity-30"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
