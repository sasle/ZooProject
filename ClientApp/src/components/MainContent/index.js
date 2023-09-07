import React, { useCallback, useState } from "react";
import { Button, CircularProgress } from "@mui/material";
import { Container } from "./styles";
import api from "../../services/api";
import DialogInfo from "./DialogInfo";

export default function MainContent() {
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [animals, setAnimals] = useState([]);
  const [openInfo, setOpenInfo] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const getAnimals = useCallback(async () => {
    setLoading(true);
    const { data } = await api.get("animals");
    setAnimals(data);
    setLoading(false);
  }, []);

  return (
    <Container>
      <p>
        My project will return a list of a few kinds of zoo animals. Each animal
        will have its own ID, as well as its own name, and will be returned from
        the backend as a JSON object through an HTTP request. <br />
        <br /> Click the button below to see the list of animals. <br /> You can
        also click on each animal to see more information about it.
      </p>
      <Button
        variant="contained"
        onClick={() => {
          if (!show) getAnimals();
          setShow(!show);
        }}
      >
        {!show ? "Show" : "Hide"} animals
      </Button>
      {loading ? (
        <CircularProgress style={{ marginTop: 25 }} />
      ) : (
        <ul>
          {show &&
            animals.map((animal) => (
              <li
                key={animal.id}
                onClick={() => {
                  setName(animal.name);
                  setDescription(animal.description);
                  setOpenInfo(true);
                }}
              >
                {animal.name}
              </li>
            ))}
        </ul>
      )}
      {openInfo && (
        <DialogInfo
          open={openInfo}
          handleClose={() => setOpenInfo(false)}
          name={name}
          description={description}
        />
      )}
    </Container>
  );
}
