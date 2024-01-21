// ImageSlider.js
import React, { useState, useEffect, useRef } from "react"

const ImageSlider = () => {
  const images = [
    // "https://e1.pxfuel.com/desktop-wallpaper/1002/384/desktop-wallpaper-ram-darbar.jpg",

    'https://im.rediff.com/news/2020/aug/05modi-ram1.jpg',
    // 'https://im.rediff.com/news/2020/aug/05modi-ram2.jpg',
    // "https://swarajya.gumlet.io/swarajya/2020-08/bfc54327-1c31-4480-9e5b-fe589faff092/EekLzZ4UMAACUH5.jpg",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [currentSlide, images.length]);

  return (
    <div className="w-full">
      <div className="relative overflow-hidden h-[88vh]">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 ease-in-out transform ${
              index === currentSlide
                ? "opacity-100 scale-100"
                : "opacity-0 scale-100"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
