import React from "react";

import Container from "../../layout/Container";
import Section, { Block, Items, Num, TextLink, Title } from "./Work.styled";
import info from "./workItems";

const Work = () => {
  return (
    <Section>
      <Container>
        <Title>Начните работу в облаке</Title>
        <Block>
          {info.map((item, i) => (
            <Items key={i}>
              <Num>{i + 1}</Num>
              <TextLink href={item.link}>{item.name}</TextLink>
            </Items>
          ))}
        </Block>
      </Container>
    </Section>
  );
};

export default Work;
