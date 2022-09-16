import React from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import slider from "./sliderItems";
import Container from "../../layout/Container";
import IntroSection, {
  Button,
  Controller,
  Desc,
  Img,
  LeftTitle,
  Slider,
  SliderInner,
  SliderLeft,
  SliderRight,
} from "./Intro.styled";
import "swiper/css";
import "swiper/css/pagination";

const Intro = () => {
  return (
    <IntroSection>
      <Container>
        <Slider>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            slidesPerView={1}
            navigation
            loop={true}
            speed={2000}
            autoplay={{ delay: 5000 }}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            {slider.map((item, i) => (
              <SwiperSlide key={i}>
                <SliderInner>
                  <SliderLeft>
                    <LeftTitle>
                      {item.title} <p>{item.titleDesc}</p>{" "}
                    </LeftTitle>
                    <Desc>{item.desc}</Desc>
                    <Controller>
                      <Button active>{item.button.btn1}</Button>
                      <Button>{item.button.btn2}</Button>
                    </Controller>
                  </SliderLeft>
                  <SliderRight>
                    <Img src={item.img} alt="Banner" />
                  </SliderRight>
                </SliderInner>
              </SwiperSlide>
            ))}
          </Swiper>
        </Slider>
      </Container>
    </IntroSection>
  );
};

export default Intro;
