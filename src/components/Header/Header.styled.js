import styled from "styled-components";

const HeaderBlock = styled.header`
  background: #092433;
  padding: 30px 0;
`;

export const HeaderList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1100px) {
    flex-direction: column;
    & li {
      margin-bottom: 20px;
    }
  }
`;
export const HeaderLogo = styled.a`
  font-size: 32px;
  color: #fff;
  font-weight: 700;
  text-transform: capitalize;
  text-decoration: none;
  @media (max-width: 1100px) {
    margin-bottom: 1em;
  }
`;
export const HeaderDesc = styled.p`
  color: #fff;
  font-size: 18px;
  font-weight: 400;
  text-transform: capitalize;
  @media (max-width: 1100px) {
    margin-bottom: 1em;
    gap: 2em;
  }
`;
export const HeaderLink = styled.a`
  color: #fff;
  font-size: 18px;
  text-decoration: none;
  & svg {
    margin-right: 10px;
  }
`;

export default HeaderBlock;
