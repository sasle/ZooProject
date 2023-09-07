import React from "react";
import { Container, MiddleContent } from "./styles";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import LeftContent from "../../components/LeftContent";
import MainContent from "../../components/MainContent";
import RightContent from "../../components/RightContent";

export default function Home() {
  return (
    <Container>
      <Header />
      <NavBar />
      <MiddleContent>
        <LeftContent />
        <MainContent />
        <RightContent />
      </MiddleContent>
      <Footer />
    </Container>
  );
}
