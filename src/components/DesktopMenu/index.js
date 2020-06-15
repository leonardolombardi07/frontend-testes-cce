import React from "react";
import {
  DesktopMenuContainer,
  DesktopMenuItensContainer,
  StyledLink,
} from "./desktop.styled";

import { useSelector, connect } from "react-redux";
import { toggleDesktopMenu, saveSelectedProject } from "../../redux/actions";

const DesktopMenu = ({ toggleDesktopMenu, saveSelectedProject }) => {
  const { isDesktopMenuOpen } = useSelector((state) => state.menu);
  const { projects } = useSelector((state) => state.projects);

  const renderProjectLinks = () => {
    return projects?.map((project) => (
      <StyledLink
        key={project?._id}
        to={{
          pathname: `/project-detail/${project?.projectName}`,
        }}
        onClick={() => {
          toggleDesktopMenu();
          saveSelectedProject({ projectData: project });
        }}
      >
        {project?.projectName}
      </StyledLink>
    ));
  };

  return (
    <DesktopMenuContainer isDesktopMenuOpen={isDesktopMenuOpen}>
      <DesktopMenuItensContainer>
        <StyledLink to="/" onClick={() => toggleDesktopMenu()}>
          Home
        </StyledLink>
        <StyledLink to="/login" onClick={() => toggleDesktopMenu()}>
          Login
        </StyledLink>

        {renderProjectLinks()}
      </DesktopMenuItensContainer>
    </DesktopMenuContainer>
  );
};

export default connect(null, { toggleDesktopMenu, saveSelectedProject })(
  DesktopMenu
);
