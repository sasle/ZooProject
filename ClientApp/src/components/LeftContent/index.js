import React, { useEffect, useState } from "react";
import { Container, Position } from "./styles";

export default function LeftContent() {
  const [xPosition, setXPosition] = useState(0);
  const [yPosition, setYPosition] = useState(0);

  const handleMouseMove = (event) => {
    setXPosition(event.clientX);
    setYPosition(event.clientY);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <Container>
      <Position>X: {xPosition}</Position>
      <Position>Y: {yPosition}</Position>
    </Container>
  );
}
