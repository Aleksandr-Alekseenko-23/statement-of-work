import React from "react";
import { Text, Wrapper, Foto } from "./HomePage.styled";
import background from "../../assets/img/background.jpg";

const HomePage: React.FC = () => {
  return (
    <>
      <Wrapper>
        <Text> Your homemade twitter</Text>
        <Foto src={background} />
      </Wrapper>
    </>
  );
};

export default HomePage;
