import React from "react";

import {
  MobileMenuContainer,
  CloseMobileMenuIconContainer,
  MobileMenuItensContainer,
  StyledLink,
} from "./mobile.styled";
import { IoIosClose } from "react-icons/io";

import { useSelector, connect } from "react-redux";
import { toggleMobileMenu } from "../../redux/actions";

import fakeData from "./fakeData";

const MobileMenu = ({ toggleMobileMenu }) => {
  const { isMobileMenuOpen } = useSelector((state) => state.menu);
  const { projects } = useSelector((state) => state.projects);

  const renderProjectLinks = () => {
    return projects.map((project) => (
      <StyledLink
        key={project?._id}
        to={{
          pathname: `/project-detail/${project?.projectName}`,
          project,
        }}
        onClick={() => toggleMobileMenu()}
      >
        {project.projectName}
      </StyledLink>
    ));
  };

  return (
    <>
      <MobileMenuContainer isMobileMenuOpen={isMobileMenuOpen}>
        <CloseMobileMenuIconContainer onClick={() => toggleMobileMenu()}>
          <IoIosClose size={40} />
        </CloseMobileMenuIconContainer>
        <MobileMenuItensContainer>
          <StyledLink to="/" onClick={() => toggleMobileMenu()}>
            Home
          </StyledLink>
          <StyledLink to="/login" onClick={() => toggleMobileMenu()}>
            Login
          </StyledLink>
          {renderProjectLinks()}
        </MobileMenuItensContainer>
      </MobileMenuContainer>
    </>
  );
};

export default connect(null, { toggleMobileMenu })(MobileMenu);
