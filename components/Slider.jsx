'use client';

import { useState, useEffect } from 'react';

const images = [
    '/airbp.png',
    '/airbp.png',
    '/chevron.png',
    '/chevron.png',
    '/sats.png',
    '/sats.png',
    '/singlubes.png',
    '/singlubes.png',
    '/totalenergies.png',
    '/totalenergies.png',
  ];
const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsToShow(1);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(3);
      } else {
        setItemsToShow(5);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - itemsToShow : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= images.length - itemsToShow ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
    <div className="relative w-full flex items-center overflow-hidden mt-10 px-4">
      <button
        aria-label="previous slide"
        className="absolute left-0 bg-[#04393F] text-white p-3 rounded-full px-[17px] py-[7px] z-10"
        onClick={prevSlide}
      >
        ‹
      </button>
      <div className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${(100 / itemsToShow) * currentIndex}%)` }}>
        {images.concat(images.slice(0, itemsToShow)).map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-[100px] h-[100px] object-contain p-2"
            style={{ flex: `0 0 calc(100% / ${itemsToShow})` }}
          />
        ))}
      </div>
      <button
        aria-label="next slide"
        className="absolute px-[17px] py-[7px] right-0 bg-[#04393F] text-white p-3 rounded-full z-10"
        onClick={nextSlide}
      >
        ›
      </button>
    </div>
     <div className=" justify-center mt-10 flex space-x-2">
     {Array.from({ length: Math.ceil(images.length / itemsToShow) }).map((_, index) => (
       <button
         aria-label="navigation dots"
         key={index}
         className={`w-3 h-3 rounded-full ${index === Math.floor(currentIndex / itemsToShow) ? 'bg-[#04393F]' : 'bg-gray-300'}`}
         onClick={() => setCurrentIndex(index * itemsToShow)}
       />
     ))}
   </div>
   </div>
  );
};

export default ImageSlider;
