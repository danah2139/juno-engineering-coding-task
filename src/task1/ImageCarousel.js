import React from "react";
import { fetchImageUrls } from "../api/index";
import { useState, useEffect } from "react";
import "./styles.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const ImageCarousel = (props) => {
  const [images, setImages] = useState();
  const [imageIndex, setImagesIndex] = useState(0);

  useEffect(async () => {
    setImages(await fetchImageUrls());
  }, []);
  console.log(images);
  const fetchImages = () => {
    return images ? (
      <img className="image" src={images[imageIndex]} alt="" />
    ) : null;
  };
  const nextImage = () => {
    if (!images.length) {
      return;
    }
    setImagesIndex((currentIndex) => {
      if (currentIndex === images.length - 1) {
        return 0;
      }
      return currentIndex + 1;
    });
  };

  const previousImage = () => {
    if (!images.length) {
      return;
    }
    setImagesIndex((currentIndex) => {
      if (currentIndex === 0) {
        return images.length - 1;
      }
      return currentIndex - 1;
    });
  };
  return (
    <div className="container">
      <button onClick={previousImage}>
        <ArrowBackIosIcon />
      </button>
      {fetchImages()}
      <button onClick={nextImage}>
        <ArrowForwardIosIcon />
      </button>
    </div>
  );
};
export default ImageCarousel;
