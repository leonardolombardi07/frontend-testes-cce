import React from "react";
import styled from "styled-components";
import { Link as ReactRouterDomLink } from "react-router-dom";

export const CreateButtonContainer = styled.div`
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background: orange;
  :hover {
    cursor: pointer;
  }

  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-height: 650px) {
    width: 70px;
    height: 70px;
    right: 30px;
  }
`;

const Link = ({ isActive, children, ...props }) => {
  return <ReactRouterDomLink {...props}>{children}</ReactRouterDomLink>;
};

export const StyledLink = styled(Link)`
  font-weight: bold;
  color: black;
  text-decoration: none;
`;
