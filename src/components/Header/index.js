import React from "react";

import {
  HeaderContainer,
  HeaderDiv,
  HeaderMobileMenuIcon,
  HeaderLogo,
  HeaderTitle,
  HeaderDesktopMenuIcon,
} from "./header.styled";
import { GrMenu } from "react-icons/gr";
import { GrDown } from "react-icons/gr";
import fluxoLogo from "../../assets/images/fluxo-logo.png";

import Switcher from "../Switcher";

import { toggleMobileMenu, toggleDesktopMenu } from "../../redux/actions";
import { connect } from "react-redux";

const Header = ({ toggleMobileMenu, toggleDesktopMenu }) => {
  return (
    <HeaderContainer>
      <HeaderDiv>
        <HeaderMobileMenuIcon
          onClick={() => {
            toggleMobileMenu();
          }}
        >
          <GrMenu size={26} />
        </HeaderMobileMenuIcon>
        <HeaderLogo src={fluxoLogo} />
        <HeaderTitle>Capacitações CCE</HeaderTitle>
      </HeaderDiv>
      <HeaderDiv>
        <Switcher />
        <HeaderDesktopMenuIcon
          onClick={() => {
            toggleDesktopMenu();
          }}
        >
          <GrDown size={26} />
        </HeaderDesktopMenuIcon>
      </HeaderDiv>
    </HeaderContainer>
  );
};

export default connect(null, { toggleMobileMenu, toggleDesktopMenu })(Header);
