import styled from "styled-components";

const Section = styled.section`
  background: #f6f7f8;
  margin-top: 5em;
  padding-top: 70px;
  padding-bottom: 70px;
`;
export const Block = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 992px) {
    flex-direction: column-reverse;
  }
`;

export const Left = styled.div`
  width: 40%;
  @media (max-width: 992px) {
    width: 100%;
  }
`;

export const LeftTitle = styled.h3`
  margin-bottom: 1em;
  font-size: clamp(18px, 4.8vh, 55px);
  font-weight: 500;
  line-height: 1.2;
`;
export const LeftText = styled.p`
  margin-bottom: 2em;
  font-size: 18px;
  color: #092433;
  font-weight: 400;
`;

export const LeftInfo = styled.div`
  display: flex;
  & svg {
    margin-right: 20px;
    font-size: 18px;
    color: #2f97ff;
  }
  margin-bottom: 2em;
`;
export const LeftDesc = styled.p`
  color: #2f97ff;
  font-size: 14px;
  max-width: 29ch;
  & svg {
    margin-right: 10px;
    font-size: 18px;
  }
`;
export const Button = styled.button`
  width: 250px;
  border: none;
  line-height: 50px;
  font-size: 16px;
  font-weight: 400;
  color: #fff;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s background;
  &:hover {
    background: #092433;
  }
`;
export const Right = styled.div`
  width: 60%;
  @media (max-width: 992px) {
    width: 100%;
  }
`;

export const Img = styled.img`
  width: 100%;
`;

export default Section;
