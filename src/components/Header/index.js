import React from "react";

import {
  HeaderContainer,
  HeaderDiv,
  HeaderMobileMenuIcon,
  HeaderLogo,
  HeaderTitle,
} from "./header.styled";
import { GrMenu } from "react-icons/gr";
import fluxoLogo from "../../assets/images/fluxo-logo.png";

import { toggleMobileMenu } from "../../redux/actions";
import { connect } from "react-redux";

const Header = ({ toggleMobileMenu }) => {
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
      <HeaderDiv>Desktop Menu</HeaderDiv>
    </HeaderContainer>
  );
};

export default connect(null, { toggleMobileMenu })(Header);
