import styled from "styled-components";
import img from "../../images/info.png";
const Section = styled.section`
  background: #092433;
`;
export const Block = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
export const Left = styled.div`
  width: 45%;
  background: ${img};
`;
export const LeftImg = styled.img`
  width: 100%;
`;
export const Right = styled.div`
  padding: 50px 0;
`;

export default Section;
