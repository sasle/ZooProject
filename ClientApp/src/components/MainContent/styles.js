import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  ul {
    padding-left: 25px;
  }

  li {
    list-style: none;
    text-align: left;
    cursor: pointer;
    color: #0000ee;
    font-weight: 700;
  }
`;
