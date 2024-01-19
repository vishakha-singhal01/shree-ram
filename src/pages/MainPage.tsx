import React from "react";
import Culture from "../components/Culture";
import Gallery from "../components/Gallery";
import VideoSection from "../components/VideoSection";
import ImageSlider from "../components/ImageSlider";

const MainPage = () => {
  return (
    <div>
      <ImageSlider />
      <VideoSection/>
      <Culture />
      <Gallery />
    </div>
  );
};

export default MainPage;
