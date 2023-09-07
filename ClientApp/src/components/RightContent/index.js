import React, { useEffect, useState } from "react";
import { Container, Image, Button } from "./styles";
import Bear from "../../assets/images/bear.jpg";
import Elephant from "../../assets/images/elephant.jpg";
import Giraffe from "../../assets/images/giraffe.jpg";
import Lion from "../../assets/images/lion.jpg";
import Shark from "../../assets/images/shark.jpg";

export default function ImageCarousel() {
  const images = [Bear, Elephant, Giraffe, Lion, Shark];

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
    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  return (
    <Container>
      <Button onClick={handlePrevClick}>Prev</Button>
      <Image src={images[currentIndex]} alt="carousel image" />
      <Button onClick={handleNextClick}>Next</Button>
    </Container>
  );
}
