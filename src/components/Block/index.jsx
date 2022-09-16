import React from "react";

import Container from "../../layout/Container";
import dragon from "../../images/dragon.png";
import Section, {
  Blocks,
  Button,
  Img,
  Left,
  Right,
  Text,
  Title,
} from "./Block.styled";
const Block = () => {
  return (
    <Section>
      <Container>
        <Blocks>
          <Left>
            <Img src={dragon} alt="Dragon" />
          </Left>
          <Right>
            <Title>Блог Selectel</Title>
            <Text>
              Читайте наш блог. У нас много полезных инструкций и интересных
              статей про мир IT, технологии и продуктовые обновления.
            </Text>
            <Button>Читать</Button>
          </Right>
        </Blocks>
      </Container>
    </Section>
  );
};

export default Block;
