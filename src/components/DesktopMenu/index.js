import React from "react";
import {
  DesktopMenuContainer,
  DesktopMenuItensContainer,
  StyledLink,
} from "./desktop.styled";

import { useSelector, connect } from "react-redux";
import {
  toggleDesktopMenu,
  saveSelectedProject,
  signOut,
} from "../../redux/actions";

const DesktopMenu = ({ toggleDesktopMenu, saveSelectedProject, signOut }) => {
  const { isDesktopMenuOpen } = useSelector((state) => state.menu);
  const { projects } = useSelector((state) => state.projects);

  const renderProjectLinks = () => {
    return projects?.map((project) => (
      <StyledLink
        key={project?._id}
        to={{
          pathname: `/project-detail/${project?.name}`,
        }}
        onClick={() => {
          toggleDesktopMenu();
          saveSelectedProject({ projectData: project });
        }}
      >
        {project?.name}
      </StyledLink>
    ));
  };

  return (
    <DesktopMenuContainer isDesktopMenuOpen={isDesktopMenuOpen}>
      <DesktopMenuItensContainer>
        <StyledLink to="/" onClick={() => toggleDesktopMenu()}>
          Home
        </StyledLink>
        <StyledLink
          to="/signin"
          onClick={() => {
            toggleDesktopMenu();
            signOut();
          }}
        >
          Logout
        </StyledLink>

        {renderProjectLinks()}
      </DesktopMenuItensContainer>
    </DesktopMenuContainer>
  );
};

export default connect(null, {
  toggleDesktopMenu,
  saveSelectedProject,
  signOut,
})(DesktopMenu);
