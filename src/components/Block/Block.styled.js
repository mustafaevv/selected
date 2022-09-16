import styled from "styled-components";

const Section = styled.section`
  background: #f6f7f8;
  padding: 60px 0;
`;

export const Blocks = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 5em;
  @media (max-width: 992px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const Left = styled.div`
  width: 45%;
  @media (max-width: 992px) {
    width: 100%;
  }
`;
export const Img = styled.img`
  width: 100%;
`;
export const Right = styled.div`
  width: 50%;
  @media (max-width: 992px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const Title = styled.h4`
  font-size: clamp(22px, 5vh, 45px);
  flex-wrap: 400;
  margin-bottom: 1em;
`;
export const Text = styled.p`
  color: #092433;
  font-size: 18px;
  font-weight: 400;
  max-width: 40ch;
  margin-bottom: 3em;
  line-height: 1.5;
  @media (max-width: 992px) {
    text-align: center;
  }
`;
export const Button = styled.button`
  max-width: 260px;
  width: 100%;
  line-height: 50px;
  color: #fff;
  font-size: 18px;
  text-transform: capitalize;
  border: none;
  background: #2f97ff;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s background;
  &:hover {
    background: #092433;
  }
`;

export default Section;
