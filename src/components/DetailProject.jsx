import React, { useState } from "react";

const DetailProject = ({ title, url, images, techs, description }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-col py-8">
      {/* Carousel */}
      <div className="relative w-full">
        <div className="relative h-[20rem] md:h-[35rem] rounded-lg bg-gray-200 overflow-hidden">
          {images.map((img, index) => (
            <div
              key={index}
              className={`duration-700 ease-in-out ${
                index === activeIndex ? "" : "hidden"
              }`}
            >
              <img
                src={img}
                alt={`${title} ${index}`}
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Controls */}
        <button
          type="button"
          onClick={prevSlide}
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
            <svg
              className="w-4 h-4 text-white rtl:rotate-180"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>

        <button
          type="button"
          onClick={nextSlide}
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 6 10">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>

      {/* Title */}
      <h2 className="text-center mx-auto mt-8 font-bold text-4xl">{title}</h2>

      {/* Link */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="mx-auto text-blue-500"
      >
        link website
      </a>

      {/* Tech Stack */}
      <div className="flex mt-4 justify-center flex-wrap">
        {techs.map((tech, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-800 text-sm font-medium me-2 mb-2 px-2.5 py-0.5 rounded-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Description */}
      <p className="mt-4 text-center">{description}</p>
    </div>
  );
};

export default DetailProject;
