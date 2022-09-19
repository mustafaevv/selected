import styled from "styled-components";
import image from "../../images/info.png";

const Section = styled.section`
  background: #092433;
`;
export const Block = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  padding: 50px 0;
  position: relative;
  @media (max-width: 1200px) {
    align-items: flex-end;
  }
`;
export const Left = styled.div`
  width: 50%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: url(${image}) center / cover no-repeat;

  @media (max-width: 1200px) {
    height: 50vh;
    width: 100%;
  }
`;
export const Right = styled.div`
  padding: 50px 0;
  width: 50%;
  @media (max-width: 1200px) {
    width: 100%;
    margin-top: 299px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const RightItem = styled.div`
  @media (max-width: 1200px) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  font-size: clamp(20px, 4vh, 45px);
  max-width: 60vh;
  line-height: 1;
  margin-bottom: 1.1em;

  @media (max-width: 1200px) {
    max-width: max-content;
  }
`;
export const Text = styled.p`
  color: #fff;
  font-size: 18px;
  font-weight: 400;
  max-width: 50vh;
  line-height: 1.5;
  margin-bottom: 3em;
`;
export const Desc = styled.p`
  color: #2f97ff;
  font-size: 26px;
  margin-bottom: 2em;
`;
export const Items = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 605px) {
    flex-direction: column;
  }
`;
export const ItemsText = styled.p`
  font-size: 18px;
  color: #fff;
  border: 1px solid #2f97ff;
  line-height: 50px;
  padding: 0 25px;
  border-radius: 8px;
  margin-bottom: 1.5em;
  &:nth-child(2) {
    margin-left: 20px;
  }
  @media (max-width: 605px) {
    width: 100%;
    text-align: center;
    &:nth-child(2) {
      margin-left: 0;
    }
  }
`;
export const ItemsTextBottom = styled.p`
  font-size: 18px;
  color: #fff;
  border: 1px solid #2f97ff;
  line-height: 50px;
  padding: 0 25px;
  border-radius: 8px;
  max-width: 560px;
  width: 100%;
  text-align: center;
`;
export default Section;
