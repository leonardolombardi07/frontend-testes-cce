import React from "react";

import {
  MobileMenuContainer,
  CloseMobileMenuIconContainer,
  MobileMenuItensContainer,
  StyledLink,
} from "./mobile.styled";
import { IoIosClose } from "react-icons/io";

import { useSelector, connect } from "react-redux";
import {
  toggleMobileMenu,
  saveSelectedProject,
  signOut,
} from "../../redux/actions";

const MobileMenu = ({ toggleMobileMenu, saveSelectedProject, signOut }) => {
  const { isMobileMenuOpen } = useSelector((state) => state.menu);
  const { projects } = useSelector((state) => state.projects);

  const renderProjectLinks = () => {
    return projects.map((project) => (
      <StyledLink
        key={project?._id}
        to={{
          pathname: `/project-detail/${project?.name}`,
        }}
        onClick={() => {
          toggleMobileMenu();
          saveSelectedProject({ projectData: project });
        }}
      >
        {project.name}
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
          <StyledLink
            to="/signin"
            onClick={() => {
              toggleMobileMenu();
              signOut();
            }}
          >
            Logout
          </StyledLink>
          {renderProjectLinks()}
        </MobileMenuItensContainer>
      </MobileMenuContainer>
    </>
  );
};

export default connect(null, {
  toggleMobileMenu,
  saveSelectedProject,
  signOut,
})(MobileMenu);
