// ImageSlider.js
import React, { useState, useEffect, useRef } from 'react';

const ImageSlider = () => {
  const images = [
    'https://im.rediff.com/news/2020/aug/05modi-ram1.jpg',
    'https://im.rediff.com/news/2020/aug/05modi-ram2.jpg',
    'https://im.rediff.com/news/2020/aug/05modi-ram3.jpg',
    'https://swarajya.gumlet.io/swarajya/2020-08/bfc54327-1c31-4480-9e5b-fe589faff092/EekLzZ4UMAACUH5.jpg',
    'https://e1.pxfuel.com/desktop-wallpaper/1002/384/desktop-wallpaper-ram-darbar.jpg',
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [currentSlide, images.length]);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const image = new Image();
        image.src = images[currentSlide];

        image.onload = () => {
          const aspectRatio = image.height / image.width;
          const containerHeight = Math.round(containerWidth * aspectRatio);
          containerRef.current.style.height = `${containerHeight}px`;
        };
      }
    };

    // Initial resize on mount and resize events
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [currentSlide, images]);

  return (
    <div className="relative w-full" ref={containerRef}>
      <div className="overflow-hidden rounded-lg h-full">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
<<<<<<< HEAD
            className={`absolute top-0 left-0 w-full h-full transition-transform duration-500 transform ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
=======
            className={`absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-in-out transform ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-100'
>>>>>>> a2866834f86d84e41cce9b0ed951865f93a45352
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
