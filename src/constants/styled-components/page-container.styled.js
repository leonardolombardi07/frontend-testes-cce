import React from "react";
import styled from "styled-components";

const ContainerLayout = styled.main``;

export const PageContainer = ({ children }) => {
  return <ContainerLayout>{children}</ContainerLayout>;
};
