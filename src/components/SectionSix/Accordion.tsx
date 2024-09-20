import React, { useState } from "react";

const Accordion: React.FC = () => {
  const [accordionOpen, setAccordionOpen] = useState<number | null>(null);

  const faqItems = [
    {
      title: "What is KPCX?",
      answer:
        "KPCX offers a comprehensive channel management solution, enabling brands to efficiently manage and grow their online business across various platforms.",
    },
    {
      title: "Which platform does KPCX cover?",
      answer: `KPCX currently supports integration with the following e-commerce platforms:
        • Shopee
        • Lazada
        • TikTok Shop
        • Line Shop`,
    },
    {
      title: "Can our service be customized?",
      answer:
        "Yes, our services can be customized to a certain extent.\nTo fully understand your specific customization needs, we encourage you to reach out to our team for a detailed discussion.",
    },
    {
      title: "How do we contact KPCX?",
      answer:
        "You can get in touch with us by emailing the following email: pongphols@kpc-x.com",
    },
  ];

  const toggleAccordion = (index: number) => {
    setAccordionOpen(accordionOpen === index ? null : index);
  };

  return (
    <div>
      <div className="max-w-screen-xl mx-auto py-8 px-4 lg:py-16 lg:px-6">
        <div className="flex justify-center">
          <h1 className="text-3xl text-white font-bold mb-8">
            Frequently Asked Questions
          </h1>
        </div>
        {faqItems.map((item, index) => (
          <div key={index} className="py-4 border-b border-white">
            <button
              onClick={() => toggleAccordion(index)}
              className="flex justify-start items-center w-full"
            >
              <span className=" text-2xl font-bold flex-1 text-left text-white transition-all duration-300">
                {item.title}
              </span>

              <svg
                className="fill-white shrink-0 ml-4"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="7"
                  width="16"
                  height="2"
                  rx="1"
                  className={`transform origin-center transition duration-200 ease-out ${
                    accordionOpen === index && "!rotate-180"
                  }`}
                />
                <rect
                  y="7"
                  width="16"
                  height="2"
                  rx="1"
                  className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                    accordionOpen === index && "!rotate-180"
                  }`}
                />
              </svg>
            </button>
            <div
              className={`grid overflow-hidden transition-all duration-300 ease-in-out  text-sm ${
                accordionOpen === index
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden whitespace-pre-line">
                <span className="font-light text-white text-lg">
                  {item.answer}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
