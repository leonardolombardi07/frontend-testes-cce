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
  min-height: 350px;
  border: 1px solid lightgrey;
  margin: 20px auto;

  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  :hover {
    cursor: pointer;
  }
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
`;

export const ProjectCardLogo = styled.img`
  width: 100%;
  height: 200px;
`;

export const ProjectPresentationContainer = styled.div`
  width: 85%;
  height: 150px;
  padding: 20px;
  word-wrap: break-word;
`;

export const UserDescription = styled.p`
  margin-left: 4px;
  margin-top: 10px;
  justify-content: flex-start;
`;
