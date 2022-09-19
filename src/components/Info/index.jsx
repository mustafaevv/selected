import React from "react";

import Container from "../../layout/Container";
import Section, { Block, Desc, Items, ItemsText, ItemsTextBottom, Left, LeftImg, Right, Text, Title } from "./Intro.styled";

const Info = () => {
  return (
    <Section>
      <Block>
        <Left img="../../images/info.png"></Left>
        <Right>
          <Container>
            <Title>Безопасное хранение данных</Title>
            <Text>
              Дата-центры Selectel соответствуют международным стандартам. Наши
              надежные и современные ЦОД обеспечивают стабильную работу
              инфраструктуры.
            </Text>
            <Desc>Во всех наших дата-центрах есть:</Desc>
            <Items>
              <ItemsText>Стабильные каналы связи</ItemsText>
              <ItemsText>Бесперебойное питание</ItemsText>
            </Items>
            <Items>
              <ItemsText>Охлаждение</ItemsText>
              <ItemsText>Круглосуточная система мониторинга</ItemsText>
            </Items>
            <Items>
              <ItemsTextBottom>Резервированное питание и каналы связи</ItemsTextBottom>
            </Items>
          </Container>
        </Right>
      </Block>
    </Section>
  );
};

export default Info;