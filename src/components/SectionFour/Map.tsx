import React, { useState } from "react";

const Accordion: React.FC = () => {
  const [accordionOpen, setAccordionOpen] = useState<number | null>(null);

  const faqItems = [
    {
      rank: "01",
      title: "Streamline Operation",
      answer:
        "We help our clients save costs and resources so they can focus on their core business activities, while we focus on helping them grow online.",
    },
    {
      rank: "02",
      title: "Enhance E-Commerce Performance",
      answer: `Leverage industry insights and data-driven marketing techniques to craft strategy that will boost store performance.`,
    },
    {
      rank: "03",
      title: "Optimize Return on Ad Spending (ROAS)",
      answer:
        "Optimize ads spending for maximum impact. We make sure that your content is reaching the right audience, at the right place, and at the right time.",
    },
    {
      rank: "04",
      title: "Exposures to Millions of Potential Customers",
      answer:
        "Raise brand awareness through Co-Campaigns, features in multiple Merchant Pages (MCPs), and etc.",
    },
  ];

  const handleMouseEnter = (index: number) => {
    setAccordionOpen(index);
  };

  const handleMouseLeave = () => {
    setAccordionOpen(null);
  };

  return (
    <div>
      <div className="max-w-screen-xl mx-auto py-8 px-4 lg:py-16 lg:px-6">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className="py-4 border-b p-12 border-black transition-all duration-300 ease-in-out"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex justify-start items-center w-full">
              <span className="text-lg md:text-2xl font-bold flex items-end transition-all duration-300">
                <span className="text-4xl md:text-8xl font-bold flex top-0 md:top-2 items-center md:items-end relative">
                  {item.rank}
                </span>

                <span className="mx-4 text-xl md:text-4xl font-thin transform rotate-12">
                  /
                </span>
                <span className="flex items-end">{item.title}</span>
              </span>
            </div>
            <div
              className={`grid overflow-hidden transition-all duration-300 ease-in-out text-sm mt-4 ${
                accordionOpen === index
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden whitespace-pre-line">
                <span className="font-light text-lg">{item.answer}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
