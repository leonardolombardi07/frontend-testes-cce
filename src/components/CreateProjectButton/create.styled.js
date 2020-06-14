import React from "react";
import styled from "styled-components";
import { Link as ReactRouterDomLink } from "react-router-dom";

export const CreateButtonContainer = styled.div`
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: orange;
  :hover {
    cursor: pointer;
  }

  display: flex;
  align-items: center;
  justify-content: center;
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
