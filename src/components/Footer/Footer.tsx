import React from "react";
import Container from "../Common/Container/Container";
import {
  FooterWrapper,
  Wrapper,
  List,
  Item,
  WrapperDisplay,
} from "./Footer.styled.js";
import { ReactComponent as LinkedIn } from "../../assets/img/linkedin.svg";
import { ReactComponent as Github } from "../../assets/img/github.svg";

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <Container>
        <WrapperDisplay>
          <Wrapper>Made by Alieksieienko O.</Wrapper>
          <List>
            <Item>
              <a
                className="Link"
                href="https://www.linkedin.com/feed/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedIn className="Logo" />
              </a>
            </Item>
            <Item>
              <a
                className="Link"
                href="https://github.com/Aleksandr-Alekseenko-23"
                target="_blank"
                rel="noreferrer"
              >
                <Github className="Logo" />
              </a>
            </Item>
          </List>
        </WrapperDisplay>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
