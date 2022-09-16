import styled from "styled-components";

const Section = styled.section`
  padding: 60px 0;
`;
export const Title = styled.h2`
  font-size: clamp(22px, 5vh, 48px);
  font-weight: 500;
  margin-bottom: 1.5em;
`;
export const Block = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2em;
  @media (max-width:678px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 5em;
  }
`;
export const Items = styled.div`
  width: 300px;
`;
export const Num = styled.h3`
  font-size: 90px;
  font-weight: 400;
  &::after{
    content: "";
    border-bottom: 2px solid #2f97ff;
    display: block;
    margin-top: 20px;
  }
`;
export const TextLink = styled.p`
  color: #092433;
  font-weight: 500;
  font-size: 18px;
  margin-top: 30px;
`;

export default Section;
