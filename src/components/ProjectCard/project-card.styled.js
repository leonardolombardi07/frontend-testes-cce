import React from "react";
import styled from "styled-components";
import { Link as ReactRouterDomLink } from "react-router-dom";

const Link = ({ isActive, children, ...props }) => {
  return <ReactRouterDomLink {...props}>{children}</ReactRouterDomLink>;
};

export const StyledLink = styled(Link)`
  color: ${(p) => p.theme.primaryTextColor};
  text-decoration: none;
`;

export const ProjectCardContainer = styled.div`
  width: 290px;
  height: 350px;
  border: 1px solid lightgrey;
  margin: 20px auto;

  :hover {
    cursor: pointer;
  }
`;

export const ProjectCardLogo = styled.img`
  width: 100%;
  height: 200px;
`;

export const ProjectPresentationContainer = styled.div`
  width: 100%;
  height: 150px;
  padding: 20px;
`;

export const UserDescription = styled.p`
  margin-left: 4px;
  margin-top: 10px;
`;
