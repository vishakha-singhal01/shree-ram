import React from "react";
import Culture from "../components/Culture";
import Gallery from "../components/Gallery";
import ImageSlider from "../components/ImageSlider";

const MainPage = () => {
  return (
    <div>
      <ImageSlider />
      <Culture />
      <Gallery />
    </div>
  );
};

export default MainPage;
