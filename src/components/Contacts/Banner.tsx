import React from "react";

function Banner() {
  const img =
    "https://plus.unsplash.com/premium_photo-1661274209157-118069b926f3?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const info = {
    title: "Contact us",
    content: `Fill in this form or send us an email with your inquiry, 
      we'will have our team get in touch as soon as possible.`,
  };

  return (
    <div className="max-w-screen-xl mx-auto mb-2 px-4 lg:mb-12 lg:px-6">
      <div
        className="relative bg-cover bg-center h-96 w-full flex items-center justify-center rounded-3xl overflow-hidden bg-fixed"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="bg-blue2 bg-opacity-90 p-8 rounded-3xl text-center text-white">
          <h1 className="text-4xl font-bold mb-4">{info.title}</h1>
          <p className="whitespace-pre-line">{info.content}</p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
