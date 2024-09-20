import React from "react";
import OperationImage from "../../assets/images/ServiceMap/Operation.jpeg";
import WarehouseImage from "../../assets/images/ServiceMap/Warehouse.jpg";
import CampaignImage from "../../assets/images/ServiceMap/Campaign.jpeg";
import DataImage from "../../assets/images/ServiceMap/Data.jpeg";
import InvestmentImage from "../../assets/images/ServiceMap/Investment.jpeg";
import ProductImage from "../../assets/images/ServiceMap/Product.jpg";
import ManagingImage from "../../assets/images/ServiceMap/Managing.jpeg";

const ServiceMap = () => {
  const items = [
    { title: "Operation", img: OperationImage },
    { title: "Warehouse & Distribution", img: WarehouseImage },
    { title: "Campaign Planning", img: CampaignImage },
    { title: "Data Analysis", img: DataImage },
    { title: "Investment", img: InvestmentImage },
    { title: "Product Owner", img: ProductImage },
    { title: "Managing Content", img: ManagingImage },
  ];
  const serviceContent =
    "Blue underglow highlight the remaining process when use our service :";

  return (
    <div className="max-w-screen-xl mx-auto mt-14 px-4 lg:px-6">
      <div className="max-w-screen-xl mx-auto mt-14 px-4 lg:px-6 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold text-start">
          Benefits To Clients From Using Our Service
        </h1>
        <h1 className="text-xl md:text-2xl mt-8 border-t-2 border-black pt-9 text-start">
          {serviceContent}
        </h1>
      </div>
      <div className="relative grid-cols-1 hidden sm:grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 lg:gap-1 xl:gap-4 h-full p-4 md:h-96 my-12">
        {items.map((item, index) => (
          <div
            key={index}
            className={`relative group rounded-xl transition duration-500 ease-in-out transform hover:scale-105 ${
              index < 4
                ? "shadow-bottom-only shadow-blue2"
                : "shadow-bottom-only shadow-gray-900"
            } flex items-center justify-center`}
          >
            <img
              src={item.img}
              alt={item.title}
              width={500}
              height={500}
              className="rounded-xl w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black bg-opacity-20 rounded-lg"></div>

            <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4 text-white text-left font-bold text-lg sm:text-lg">
              <h1 className="drop-shadow-2xl shadow-white">{item.title}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceMap;
