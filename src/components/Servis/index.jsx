import React from 'react'
import { faCircleExclamation, faTableColumns } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import image from '../../images/servis.png'
import Container from '../../layout/Container'
import Section, { Block, Button, Img, Left, LeftDesc, LeftInfo, LeftText, LeftTitle, Right } from './Servis.styled'

const Servis = () => {
  return (
    <Section>
      <Container>
        <Block>
          <Left>
            <LeftTitle>Панель управления сервисами</LeftTitle>
            <LeftText>Вы можете регистрироваться в платформе, создавать проекты, добавлять или удалять виртуальные машины.</LeftText>
            <LeftInfo>
              <FontAwesomeIcon icon={faTableColumns}/>
              <LeftDesc>  Оплата за услуги списывается по модели pay-as-you-go.</LeftDesc>
            </LeftInfo>
            <LeftInfo>
              <FontAwesomeIcon icon={faCircleExclamation}/>
              <LeftDesc> Для юридических лиц автоматически выставляются все необходимые бухгалтерские документы.</LeftDesc>
            </LeftInfo>
            <Button>Начать работу в облаке</Button>
          </Left>
          <Right>
            <Img src={image} alt="" />
          </Right>
        </Block>
      </Container>
    </Section>
  )
}

export default Servis