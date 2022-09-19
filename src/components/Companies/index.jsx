import React from "react";

import Container from "../../layout/Container";

import Section, {
  Block,
  Button,
  Left,
  Right,
  RightBlock,
  RightItems,
  Text,
  Title,
} from "./Companies.styled";
import SvgOne from "./Svgs/SvgOne";
import SvgTwo from "./Svgs/SvgTwo";
import SvgThree from "./Svgs/SvgThree";
import SvgFour from "./Svgs/SvgFour";
import SvgFive from "./Svgs/SvgFive";
import SvgSix from "./Svgs/SvgSix";
import SvgSeven from "./Svgs/SvgSeven";
import SvgEight from "./Svgs/SvgEight";
import SvgNine from "./Svgs/SvgNine";
import SvgTen from "./Svgs/SvgTen";
import SvgEleven from "./Svgs/SvgEleven";
import SvgTwelve from "./Svgs/SvgTwelve";
import SvgThirteen from "./Svgs/SvgThirteen";
import SvgFourteen from "./Svgs/SvgFourteen";
import SvgFifteen from "./Svgs/SvgFifteen";
import SvgSixteen from "./Svgs/SvgSixteen";

const Companies = () => {
  return (
    <Section>
      <Container>
        <Block>
          <Left>
            <Title>Нам доверяют</Title>
            <Text>
              Более 23 000 клиентов по всему миру построили свою инфраструктуру
              с продуктами Selectel.
            </Text>
            <Button>Создать аккаунт</Button>
          </Left>
          <Right>
            <RightBlock>
              <RightItems>
                <SvgOne />
              </RightItems>
              <RightItems>
                <SvgTwo />{" "}
              </RightItems>
              <RightItems>
                <SvgThree />
              </RightItems>
              <RightItems>
                <SvgFour />
              </RightItems>
              <RightItems>
                <SvgFive />
              </RightItems>
              <RightItems>
                <SvgSix />
              </RightItems>
              <RightItems>
                <SvgSeven />
              </RightItems>
              <RightItems>
                <SvgEight />
              </RightItems>
              <RightItems>
                <SvgNine />
              </RightItems>
              <RightItems>
                <SvgTen />
              </RightItems>
              <RightItems>
                <SvgEleven />
              </RightItems>
              <RightItems>
                <SvgTwelve />
              </RightItems>
              <RightItems>
                <SvgThirteen />
              </RightItems>
              <RightItems>
                <SvgFourteen />
              </RightItems>
              <RightItems>
                <SvgFifteen />
              </RightItems>
              <RightItems>
                <SvgSixteen />
              </RightItems>
            </RightBlock>
          </Right>
        </Block>
      </Container>
    </Section>
  );
};

export default Companies;
