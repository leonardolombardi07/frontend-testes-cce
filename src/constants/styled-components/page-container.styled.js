import React from "react";
import styled from "styled-components";

import Header from "../../components/Header";
import MobileMenu from "../../components/MobileMenu";
import DesktopMenu from "../../components/DesktopMenu";

const ContainerLayout = styled.div`
  max-width: 1000px;
  margin: 80px auto 24px auto;
  padding: 20px 16px 80px 16px;
  box-sizing: "border-box";
  font-family: "Lato", sans-serif;
  min-height: 100%;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Lato", sans-serif;
    margin-bottom: 0px;
  }
`;

export const PageContainer = ({ children, type }) => {
  return (
    <>
      {type === "auth" ? null : <Header />}
      <DesktopMenu />
      <MobileMenu />
      <ContainerLayout>{children}</ContainerLayout>
    </>
  );
};
