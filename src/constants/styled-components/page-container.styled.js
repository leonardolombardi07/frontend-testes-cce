import React from "react";
import styled from "styled-components";

const ContainerLayout = styled.main`
  max-width: 800px;
  margin: 80px auto 0 auto;
  padding: 0 16px;
  box-sizing: "border-box";
  font-family: "Lato", sans-serif;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Lato", sans-serif;
  }
`;

export const PageContainer = ({ children }) => {
  return <ContainerLayout>{children}</ContainerLayout>;
};
