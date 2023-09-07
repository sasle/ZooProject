import styled from "styled-components";

export const Container = styled.div`
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  object-position: center;
`;

export const Button = styled.button`
  font-size: 1rem;
  padding: 0.5rem 1rem;
  margin: 0 1rem;
  border: none;
  border-radius: 0.25rem;
  background-color: #0077cc;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #005fa3;
  }
`;
