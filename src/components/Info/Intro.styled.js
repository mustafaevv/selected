import styled from "styled-components";
const Section = styled.section`
  background: #092433;
`;
export const Block = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
export const Left = styled.div`
  width: 50%;
  background: url(${({ img }) => img});
`;
export const LeftImg = styled.img`
  width: 100%;
`;
export const Right = styled.div`
  padding: 50px 0;
  width: 50%;
`;

export const Title = styled.h1`
  font-size: 45px;
  max-width: 60vh;
  line-height: 1;
  margin-bottom: 1.1em;
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
`;
export const ItemsText = styled.p`
  font-size: 18px;
  color: #fff;
  border: 1px solid #2f97ff;
  line-height: 50px;
  padding: 0 25px;
  border-radius: 8px;
  margin-bottom: 1.5em;
  &:nth-child(2){
    margin-left: 20px;
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
