import React from "react";
import Marquee from "react-fast-marquee";

// Import images
import AlpenLogo from "../assets/images/BrandLogo/Alpen.png";
import BrookLogo from "../assets/images/BrandLogo/Brook.png";
import DuncanHinesLogo from "../assets/images/BrandLogo/Duncan-Hines.png";
import FragataLogo from "../assets/images/BrandLogo/Fragata.png";
import HahneLogo from "../assets/images/BrandLogo/HAHNE.png";
import HouseLogo from "../assets/images/BrandLogo/House.png";
import MakotoEnLogo from "../assets/images/BrandLogo/Makoto-en.png";
import McGarrettLogo from "../assets/images/BrandLogo/McGarrett.png";
import MICALogo from "../assets/images/BrandLogo/MICA.png";
import MikoBrandLogo from "../assets/images/BrandLogo/Miko-Brand.png";
import PostLogo from "../assets/images/BrandLogo/Post.png";
import SWLogo from "../assets/images/BrandLogo/S&W.png";
import ShimayaLogo from "../assets/images/BrandLogo/Shimaya.png";
import RemiaLogo from "../assets/images/BrandLogo/Remia.png";
import TakanoFoodLogo from "../assets/images/BrandLogo/TakanoFood.png";
import TulipLogo from "../assets/images/BrandLogo/Tulip.png";

// Image data array
const imageList = [
  { src: AlpenLogo, alt: "Alpen" },
  { src: BrookLogo, alt: "Brook" },
  { src: DuncanHinesLogo, alt: "Duncan Hines Wilderness" },
  { src: FragataLogo, alt: "Fragata" },
  { src: HahneLogo, alt: "Hahne" },
  { src: HouseLogo, alt: "House" },
  { src: MakotoEnLogo, alt: "Makoto EN" },
  { src: McGarrettLogo, alt: "McGarrett" },
  { src: MICALogo, alt: "MICA" },
  { src: MikoBrandLogo, alt: "Miko Brand" },
  { src: PostLogo, alt: "POST" },
  { src: SWLogo, alt: "S&W" },
  { src: ShimayaLogo, alt: "Shimaya" },
  { src: RemiaLogo, alt: "Remia" },
  { src: TakanoFoodLogo, alt: "TakanoFood Okame" },
  { src: TulipLogo, alt: "Tulip" },
];

// Render logo component
const LogoItem: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
  <div className="flex pr-10 flex-col justify-center items-center h-[100px] mx-5">
    <img src={src} alt={alt} width={150} height={150} className="w-[100px]" />
  </div>
);

const InfiniteScrollLogos: React.FC = () => {
  return (
    <section className="max-w-screen-2xl mx-auto mt-14 px-4 lg:px-6">
      <div className="h-[150px] w-full">
        <Marquee
          gradient
          gradientWidth={40}
          gradientColor="rgba(246, 246, 246, 1)"
          pauseOnHover={true}
          className="overflow-hidden w-full"
        >
          {imageList.map((image, index) => (
            <LogoItem key={index} src={image.src} alt={image.alt} />
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default InfiniteScrollLogos;
