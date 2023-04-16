import React from "react";
import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";
import { Wrapper } from "./Header.styled";

const Header: React.FC = () => {
  return (
    <Wrapper>
      <Logo />
      <Navbar />
    </Wrapper>
  );
};

export default Header;
