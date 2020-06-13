import React from "react";
import { IoIosClose } from "react-icons/io";

import {
  MobileMenuContainer,
  CloseMobileMenuIconContainer,
} from "./mobile.styled";
import { useSelector } from "react-redux";
import { toggleMobileMenu } from "../../redux/actions";
import { connect } from "react-redux";

const MobileMenu = ({ toggleMobileMenu }) => {
  const { isMobileMenuOpen } = useSelector((state) => state.menu);
  return (
    <>
      <MobileMenuContainer isMobileMenuOpen={isMobileMenuOpen}>
        <CloseMobileMenuIconContainer onClick={() => toggleMobileMenu()}>
          <IoIosClose size={40} />
        </CloseMobileMenuIconContainer>
      </MobileMenuContainer>
    </>
  );
};

export default connect(null, { toggleMobileMenu })(MobileMenu);
