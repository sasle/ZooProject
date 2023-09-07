import React, { useEffect, useState } from "react";
import {
  Container,
  Image,
  Button,
  ImgContainer,
  SelectorContainer,
  Selector,
} from "./styles";
import Bear from "../../assets/images/bear.jpg";
import Elephant from "../../assets/images/elephant.jpg";
import Giraffe from "../../assets/images/giraffe.jpg";
import Lion from "../../assets/images/lion.jpg";
import Shark from "../../assets/images/shark.jpg";

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
        <Button onClick={handlePrevClick}>Prev</Button>
        <Image src={images[currentIndex].url} alt={images[currentIndex].name} />
        <Button onClick={handleNextClick}>Next</Button>
      </ImgContainer>
      <ImageSelector />
      <p>{images[currentIndex].name}</p>
    </Container>
  );
}
