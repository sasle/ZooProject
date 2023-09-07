import React, { useState } from "react";
import { Button } from "@mui/material";
import { Container } from "./styles";
import api from "../../services/api";

export default function MainContent() {
  const [show, setShow] = useState(false);
  const [animals, setAnimals] = useState([]);

  const getAnimals = async () => {
    setAnimals([]);
    const { data } = await api.get("animals");
    setAnimals(data);
  };

  return (
    <Container>
      <p>
        My project will return a list of a few kinds of zoo animals. Each animal
        will have its own ID, as well as its own name, and will be returned from
        the backend as a JSON object through an HTTP request. <br />
        <br /> Click the button below to see the list of animals.
      </p>
      <Button
        variant="contained"
        onClick={() => {
          if (!show) getAnimals();
          else setAnimals([]);
          setShow(!show);
        }}
      >
        {!show ? "Show" : "Hide"} animals
      </Button>
      <ul>
        {show &&
          animals.map((animal) => (
            <li key={animal.id}>
              ID: {animal.id}, Name: {animal.name}
            </li>
          ))}
      </ul>
    </Container>
  );
}
