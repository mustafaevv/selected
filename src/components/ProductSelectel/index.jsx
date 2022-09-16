import React from "react";

import Container from "../../layout/Container";
import Svg from "../Svg";
import items from "./product";
import Section, {
  Block,
  Items,
  ItemsButton,
  ItemsText,
  ItemsTitle,
  Title,
} from "./ProductSelectel.styled";
const ProductSelectel = () => {
  return (
    <Section>
      <Container>
        <Title>Продукты Selectel</Title>
        <Block>
          {items.map((item, i) => (
            <Items key={i}>
              <Svg />
              <ItemsTitle>{item.title}</ItemsTitle>
              <ItemsText>{item.text}</ItemsText>
              <ItemsButton>{item.button}</ItemsButton>
            </Items>
          ))}
        </Block>
      </Container>
    </Section>
  );
};

export default ProductSelectel;
