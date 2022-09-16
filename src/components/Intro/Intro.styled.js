import styled from "styled-components";

const IntroSection = styled.section`
  background: #092433;
  width: 100%;
  padding-bottom: 5em;
`;

export const Slider = styled.div`
  & .swiper {
    --swiper-theme-color: #2f97ff;
    --swiper-pagination-bullet-inactive-color: #fff;
    --swiper-pagination-bullet-inactive-opacity: 0.5;
  }
`;

export const SliderInner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const SliderLeft = styled.div`
  width: 50%;
  @media (max-width: 922px) {
    width: 100%;
  }
`;
export const LeftTitle = styled.h1`
  font-size: 75px;
  font-weight: 400;
  & p {
    text-align: right;
  }
`;
export const Desc = styled.p`
  color: #fff;
  font-size: 18px;
  font-weight: 400;
  margin-top: 2em;
`;
export const Controller = styled.div`
  display: flex;
  align-items: center;
  gap: 2em;
  margin-top: 3em;
`;
export const Button = styled.button`
  max-width: 260px;
  width: 100%;
  border: ${({ active }) => (active ? "none" : "1px solid #fff")};
  background: ${({ active }) => (active ? "#2f97ff" : "none")};
  color: #fff;
  font-size: 18px;
  border-radius: 8px;
  line-height: 50px;
  font-weight: 400;
  cursor: pointer;
  transition: 0.3s color, 0.3s background;
  &:hover {
    color: #2f97ff;
    background: #fff;
  }
`;
export const SliderRight = styled.div`
  width: 45%;
`;
export const Img = styled.img`
  width: 650px;
  height: 450px;
  object-fit: cover;
  display: block;
  @media (max-width: 922px) {
    display: none;
  }
`;

export default IntroSection;
