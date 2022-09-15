import React from "react";
import styled from "styled-components";

const ContainerBlock = styled.div`
  max-width: 1230px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
`;

const Container = ({ children }) => {
  return <ContainerBlock>{children}</ContainerBlock>;
};

export default Container;
