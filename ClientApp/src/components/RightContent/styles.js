import styled from "styled-components";

export const Container = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  place-content: center;
  border-left: 1px solid #dedede;
`;

export const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    margin: 0 8px;
  }
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

export const SelectorContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
`;

export const Selector = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? "#333" : "#ccc")};
  margin: 0 8px;
  cursor: pointer;
`;
