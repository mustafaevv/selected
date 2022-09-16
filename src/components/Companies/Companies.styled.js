import styled from "styled-components";

const Section = styled.section`
  margin-top: 100px;
`;
export const Block = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;
export const Left = styled.div`
  width: 40%;
  @media (max-width: 992px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 5em;
  }
`;
export const Title = styled.h3`
  font-size: 40px;
  font-weight: 400;
  margin-bottom: 1em;
`;
export const Text = styled.p`
  color: #092433;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.5;
  max-width: 34ch;
  margin-bottom: 3em;
`;
export const Button = styled.button`
  max-width: 260px;
  width: 100%;
  border: none;
  border-radius: 8px;
  line-height: 50px;
  font-size: 18px;
  color: #fff;
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
export const RightBlock = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
export const RightItems = styled.div`
  width: 190px;
  height: 50px;
  margin-top: 1.2em;
  @media (max-width: 992px) {
    display: flex;
    justify-content: center;
  }
  & p {
    font-weight: bold;
    font-size: 25px;
  }
`;

export default Section;
