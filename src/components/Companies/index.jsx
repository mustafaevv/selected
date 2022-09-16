import React from 'react'

import Container from '../../layout/Container'

import Section, { Block, Button, Left, Right, RightBlock, RightItems, Text, Title } from './Companies.styled'
const Companies = () => {
  return (
    <Section>
      <Container>
        <Block>
          <Left>
            <Title>Нам доверяют</Title>
            <Text>Более 23 000 клиентов по всему миру построили свою инфраструктуру с продуктами Selectel.</Text>
            <Button>Создать аккаунт</Button>
          </Left>
          <Right>
            <RightBlock>
              <RightItems><p>AMEDIATEKA</p></RightItems>
              <RightItems><p>AMEDIATEKA</p></RightItems>
              <RightItems><p>AMEDIATEKA</p></RightItems>
              <RightItems><p>AMEDIATEKA</p></RightItems>
              <RightItems><p>AMEDIATEKA</p></RightItems>
              <RightItems><p>AMEDIATEKA</p></RightItems>
              <RightItems><p>AMEDIATEKA</p></RightItems>
              <RightItems><p>AMEDIATEKA</p></RightItems>
              <RightItems><p>AMEDIATEKA</p></RightItems>
              <RightItems><p>AMEDIATEKA</p></RightItems>
              <RightItems><p>AMEDIATEKA</p></RightItems>
              <RightItems><p>AMEDIATEKA</p></RightItems>
              <RightItems><p>AMEDIATEKA</p></RightItems>
              <RightItems><p>AMEDIATEKA</p></RightItems>
              <RightItems><p>AMEDIATEKA</p></RightItems>
              <RightItems><p>AMEDIATEKA</p></RightItems>
            </RightBlock>
          </Right>
        </Block>
      </Container>
    </Section>
  )
}

export default Companies