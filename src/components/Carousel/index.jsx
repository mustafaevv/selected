import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Svg from "./CarouselSvg";
import Container from "../../layout/Container";
import slider from "./carouselItem";
import Section, {
  Slider,
  SliderItemBottom,
  SliderItemTop,
  SliderText,
  SliderTitle,
  Title,
} from "./Carousel.styled";
import "swiper/css";
const Carousel = () => {
  return (
    <Section>
      <Container>
        <Title>Большой выбор ресурсов</Title>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={4}
          navigation
        >
          {slider.map((item, i) => (
            <SwiperSlide key={i}>
              <Slider>
                <SliderItemTop>
                  <SliderTitle>{item.title}</SliderTitle>
                  <Svg />
                </SliderItemTop>
                <SliderItemBottom>
                  <SliderText>{item.text}</SliderText>
                </SliderItemBottom>
              </Slider>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Section>
  );
};

export default Carousel;
