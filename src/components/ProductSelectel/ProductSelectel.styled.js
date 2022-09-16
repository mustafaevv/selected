import styled from "styled-components";

const Section = styled.section`
  padding-top: 10em;
`;

export const Title = styled.h3`
  font-size: clamp(22px, 4vh, 45px);
  font-weight: 500;
  margin-bottom: 1.5em;
`;

export const Block = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 2em;
  @media (max-width: 992px) {
    justify-content: center;
  }
`;
export const Items = styled.div`
  max-width: 300px;
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
`;
export const ItemsTitle = styled.h6`
  color: #092433;
  font-size: 23px;
  font-weight: 500;
  margin-top: 1.5em;
  margin-bottom: 1.5em;
`;
export const ItemsText = styled.p`
  color: #092433;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.5;
`;
export const ItemsButton = styled.a`
  border: none;
  background: none;
  color: #092433;
  font-size: 18px;
  /* text-decoration: 1px solid #092433; */
  margin-top: auto;
`;

export default Section;
