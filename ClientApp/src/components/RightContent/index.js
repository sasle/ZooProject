import React, { useEffect, useState } from "react";
import {
  Container,
  Image,
  ImgContainer,
  SelectorContainer,
  Selector,
} from "./styles";
import Bear from "../../assets/images/bear.jpg";
import Elephant from "../../assets/images/elephant.jpg";
import Giraffe from "../../assets/images/giraffe.jpg";
import Lion from "../../assets/images/lion.jpg";
import Shark from "../../assets/images/shark.jpg";
import { IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function ImageCarousel() {
  const images = [
    {
      name: "Bear",
      url: Bear,
    },
    {
      name: "Elephant",
      url: Elephant,
    },
    {
      name: "Giraffe",
      url: Giraffe,
    },
    {
      name: "Lion",
      url: Lion,
    },
    {
      name: "Shark",
      url: Shark,
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex, images.length]);

  const ImageSelector = () => {
    return (
      <SelectorContainer>
        {images.map((image, index) => (
          <Selector
            key={index}
            active={index === currentIndex}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </SelectorContainer>
    );
  };

  return (
    <Container>
      <ImgContainer>
        <IconButton onClick={handlePrevClick}>
          <ArrowBackIcon />
        </IconButton>
        <Image src={images[currentIndex].url} alt={images[currentIndex].name} />
        <IconButton onClick={handleNextClick}>
          <ArrowForwardIcon />
        </IconButton>
      </ImgContainer>
      <ImageSelector />
      <p>{images[currentIndex].name}</p>
    </Container>
  );
}
