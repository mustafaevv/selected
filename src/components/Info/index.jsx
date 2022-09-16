import React from 'react'

// import img from '../../images/info.webp'
import Container from '../../layout/Container'
import Section, { Block, Left, LeftImg, Right } from './Intro.styled'

const Info = () => {
  return (
    <Section>
      <Block>
        <Left>
          {/* <LeftImg src={img} alt="" /> */}
        </Left>
        <Right>
          <Container>
            <h1>Безопасное хранение данных</h1>
            <p>Дата-центры Selectel соответствуют международным стандартам. Наши надежные и современные ЦОД обеспечивают стабильную работу инфраструктуры.</p>
            <p>Во всех наших дата-центрах есть:</p>
            <div>
              <p>Стабильные каналы связи</p>
              <p>Бесперебойное питание</p>
            </div>
            <div>
              <p>Охлаждение</p>
              <p>Круглосуточная система мониторинга</p>
            </div>
            <div>
              <p>Резервированное питание и каналы связи</p>
            </div>
          </Container>
        </Right>
      </Block>
    </Section>
  )
}

export default Info