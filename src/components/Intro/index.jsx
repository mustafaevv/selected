import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import slider from "./sliderItems";
import Container from "../../layout/Container";
import IntroSection, { Slider } from "./Intro.styled";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const Intro = () => {
  return (
    <IntroSection>
      <Container>
        <Slider>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={2}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            <SwiperSlide>
              {slider.map((item, index) => {
                <div key={index}>
                  <div>
                    <h1>{item.title}</h1>
                    <p>{item.desc}</p>
                    <div>
                      <button>{item.btn1}1</button>
                      <button>{item.btn2}</button>
                    </div>
                  </div>
                  <div>
                    <img src={item.img} alt="" />
                  </div>
                </div>;
              })}
            </SwiperSlide>
          </Swiper>
        </Slider>
      </Container>
    </IntroSection>
  );
};

export default Intro;
