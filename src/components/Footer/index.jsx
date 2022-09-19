import React from "react";
import { FaTelegram, FaVk, FaYoutube, FaGlobe } from "react-icons/fa";
import Container from "../../layout/Container";

import FooterBlock, {
  Bottom,
  BottomIcons,
  BottomInfo,
  BottomLink,
  BottomList,
  BottomListIcons,
  Left,
  LeftText,
  LeftTitle,
  Right,
  RightButton,
  RightCheckBox,
  RightInput,
  RightInputComments,
  Top,
} from "./Footer.styled";
const Footer = () => {
  return (
    <FooterBlock>
      <Container>
        <Top>
          <Left>
            <LeftTitle>Бесплатная консультация перед заказом</LeftTitle>
            <LeftText>
              Остались вопросы или сомневаетесь, какой сервер вам подойдет
              больше? Заполните заявку — мы изучим задачу и подберем лучшее
              решение под ваш бюджет и требования. Ответим в течение одного
              рабочего дня.
            </LeftText>
          </Left>
          <Right>
            <RightInput type="text" placeholder="Имя *" />
            <RightInput type="text" placeholder="E-mail *" />
            <RightInput type="text" placeholder="+998 __ ___ __ __" />
            <RightInputComments
              placeholder="Комментарий"
              name=""
              id=""
              cols="20"
              rows="10"
            ></RightInputComments>
            <RightCheckBox>
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Подписаться на новости</label>
            </RightCheckBox>
            <RightButton>Отправить заявку</RightButton>
          </Right>
        </Top>
        <Bottom>
          <BottomInfo>
            © ИП ООО «DATA CENTER NETWORK SELECTEL», 2019-2022, Лицензия № АА
            0007258
          </BottomInfo>
          <BottomList>
            <li>
              <BottomLink href="/">Реквизиты</BottomLink>
            </li>
            <li>
              <BottomLink href="/">Договоры и лицензии</BottomLink>
            </li>
            <li>
              <BottomLink href="/">База знаний</BottomLink>
            </li>
          </BottomList>
          <BottomListIcons>
            <BottomIcons href="#!">
              <FaGlobe />
            </BottomIcons>
            <BottomIcons href="#!">
              <FaVk />
            </BottomIcons>
            <BottomIcons href="#!">
              <FaTelegram />
            </BottomIcons>
            <BottomIcons href="#!">
              <FaYoutube />
            </BottomIcons>
          </BottomListIcons>
        </Bottom>
      </Container>
    </FooterBlock>
  );
};

export default Footer;
