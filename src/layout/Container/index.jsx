import React from "react";
import styled from "styled-components";

const ContainerBlock = styled.div`
  max-width: 1390px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 20px;
  padding-left: 20px;
`;

const Container = ({ children }) => {
  return <ContainerBlock>{children}</ContainerBlock>;
};

export default Container;
