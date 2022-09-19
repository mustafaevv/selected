import styled from "styled-components";

const FooterBlock = styled.footer`
  background: #092433;
  margin-top: 100px;
  padding: 100px 0;
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 992px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const Left = styled.div`
  width: 60%;
  @media (max-width: 992px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 5em;
  }
`;
export const LeftTitle = styled.h3`
  color: #fff;
  font-size: 40px;
  font-weight: 400;
  max-width: 35vh;
  margin-bottom: 1em;
  @media (max-width: 992px) {
    max-width:  max-content;
  }
`;
export const Right = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  @media (max-width: 992px) {
    width: 100%;
  }
`;
export const LeftText = styled.div`
  font-size: 18px;
  color: #fff;
  font-weight: 400;
  max-width: 50vh;
  line-height: 1.5;
  @media (max-width: 992px) {
    max-width: 80vh;
  }
`;
export const RightInput = styled.input`
  line-height: 45px;
  padding: 5px 15px;
  color: #fff;
  font-size: 16px;
  margin-bottom: 2em;
`;
export const RightInputTell = styled.input``;
export const RightInputComments = styled.textarea`
  max-height: 150px;
  height: 100%;
  border: 1px solid #fff;
  resize: none;
  border-radius: 8px;
  background: none;
  padding: 20px;
  font-size: 16px;
  color: #fff;
  margin-bottom: 2em;
  &::placeholder {
    font-size: 16px;
  }
`;
export const RightCheckBox = styled.div`
  margin-bottom: 2em;
  & label {
    color: #b5bdc2;
    font-size: 18px;
    font-weight: 400;
    margin-left: 15px;
  }
`;
export const RightButton = styled.button`
  border-radius: 8px;
  line-height: 50px;
  font-size: 18px;
  color: #fff;
  border: none;
  cursor: pointer;
`;
export const Bottom = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  margin-top: 5em;
  @media (max-width: 1230px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const BottomInfo = styled.p`
  font-size: 16px;
  color: #fff;
  font-weight: 400;
`;
export const BottomList = styled.ul`
  display: flex;
  list-style: none;
  gap: 1.5em;
  @media (max-width: 1230px) {
    margin-bottom: 3em;
    margin-top: 3em;
  }
  @media (max-width: 678px) {
    flex-direction: column;
    text-align: center;
  }
`;
export const BottomLink = styled.a`
  color: #fff;
  font-size: 16px;
`;
export const BottomListIcons = styled.ul`
  display: flex;
  gap: 1.5em;
  list-style: none;
`;
export const BottomIcons = styled.a`
  font-size: 22px;
  color: #fff;
  cursor: pointer;
`;

export default FooterBlock;
