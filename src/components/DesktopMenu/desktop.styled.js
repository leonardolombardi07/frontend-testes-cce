import React from "react";
import styled from "styled-components";
import { Link as ReactRouterDomLink } from "react-router-dom";

export const DesktopMenuContainer = styled.div`
  display: none;

  @media (min-width: 650px) {
    display: ${(p) => (p.isDesktopMenuOpen ? "flex" : "none")};

    position: fixed;
    top: 48px;
    right: 25px;
    background: red;
    min-width: 300px;
    min-height: 400px;
    max-height: 400px;
    background-color: #ffffff;
    overflow-y: scroll;
    word-wrap: break-word;

    border: solid 1px lightgrey;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;

export const DesktopMenuItensContainer = styled.nav`
  width: 90%;
  margin-top: 10px;
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
  text-decoration: none;
`;
