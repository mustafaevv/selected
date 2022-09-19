import styled from "styled-components";

const Section = styled.section`
  padding: 100px 0;
`;
export const Title = styled.h3`
  font-size: 40px;
  font-weight: 400;
  margin-bottom: 2em;
`;
export const Slider = styled.div`
  background: #ffffff;
  box-shadow: 10px 10px 20px 0px rgb(9 36 51 / 10%);
  border-radius: 15px;
  margin-bottom: 50px;
  margin-left: 20px;
  margin-right: 20px;
`;
export const SliderItemTop = styled.div`
  background: #2f97ff;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-top: 20px;
  padding-bottom: 50px;
  box-shadow: 10px 10px 20px 0px rgb(255 255 255 / 10%);
`;

export const SliderTitle = styled.h5``;
export const SliderItemBottom = styled.div`
  padding: 35px;
`;
export const SliderText = styled.p`
  color: #092433;
  font-size: 18px;
  font-weight: 400;
`;

export default Section;
