import React from "react";
import styled from "styled-components";

export const MobileMenuContainer = styled.nav`
  display: ${(p) => (p.isMobileMenuOpen ? "block" : "none")};
  position: fixed;
  top: 0px;
  left: 0;
  width: 60%;
  height: 100%;
  border-right: 1px solid lightgrey;
  background: red;
  z-index: 1;

  padding: 0px 5px;
  @media (min-width: 650px) {
    display: none;
  }
`;

export const CloseMobileMenuIconContainer = styled.div`
  position: absolute;
  margin: 15px 0px 0px 0px;
`;
