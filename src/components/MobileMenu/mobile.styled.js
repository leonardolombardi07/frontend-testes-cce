import React from "react";
import styled from "styled-components";
import { Link as ReactRouterDomLink } from "react-router-dom";

export const MobileMenuContainer = styled.nav`
  display: ${(p) => (p.isMobileMenuOpen ? "block" : "none")};
  position: fixed;
  top: 0px;
  left: 0;
  width: 60%;
  height: 100%;
  background: white;
  border-right: 1px solid lightgrey;
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

export const MobileMenuItensContainer = styled.nav`
  width: 90%;
  margin-top: 78px;
  margin-left: 10%;
`;

const Link = ({ isActive, children, ...props }) => {
  return <ReactRouterDomLink {...props}>{children}</ReactRouterDomLink>;
};

export const StyledLink = styled(Link)`
  padding: 8px 11.5px;
  display: block;
  box-sizing: border-box;
  font-size: 18px;
  margin-top: 20px;
  font-weight: ${(p) => (p.isActive ? "bold" : "normal")};
  color: black;
`;
