import React from "react";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 56px;
  border-bottom: 1px solid lightgrey;
  background: white;
  z-index: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px 10px 0px 10px;
`;

export const HeaderMobileMenuIcon = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 10px 0px 0px;

  @media (min-width: 650px) {
    display: none;
  }
`;

export const HeaderLogo = styled.img`
  max-height: 45px;
  border-radius: 5px;
`;

export const HeaderTitle = styled.h4`
  display: none;
  @media (min-width: 650px) {
    display: block;
    color: grey;
    font-size: 18px;
    font-weight: 500;
    margin-left: 10px;
  }
`;

export const HeaderMenu = styled.nav`
  width: 100%;
  height: 100%;
  background: blue;
`;
