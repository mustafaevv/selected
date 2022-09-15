import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faTeletype } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import Container from "../../layout/Container";
import HeaderBlock, {
  HeaderDesc,
  HeaderLink,
  HeaderList,
  HeaderLogo,
} from "./Header.styled";

const Header = () => {
  return (
    <HeaderBlock>
      <Container>
        <HeaderList>
          <HeaderLogo href="/">selectel</HeaderLogo>
          <li>
            <HeaderDesc>
              C 2008 года в России. С 2021 года в Узбекистане.
            </HeaderDesc>
          </li>
          <li>
            <HeaderLink href="tel:+998900350030" target={"_blank"}>
              <FontAwesomeIcon icon={faPhoneAlt} /> +998 90 035 00 30
            </HeaderLink>
          </li>
          <li>
            <HeaderLink href="mailto:sales@selectel.uz" target={"_blank"}>
              <FontAwesomeIcon icon={faEnvelope} /> sales@selectel.uz
            </HeaderLink>
          </li>
          <li>
            <HeaderLink
              href="https://t.me/SelectelUzCommunity"
              target={"_blank"}
            >
              <FontAwesomeIcon icon={faTeletype} /> selectel.uz
            </HeaderLink>
          </li>
        </HeaderList>
      </Container>
    </HeaderBlock>
  );
};

export default Header;
