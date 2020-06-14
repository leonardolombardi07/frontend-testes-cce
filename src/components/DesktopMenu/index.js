import React from "react";
import {
  DesktopMenuContainer,
  DesktopMenuItensContainer,
  StyledLink,
} from "./desktop.styled";

import { useSelector, connect } from "react-redux";
import { toggleDesktopMenu } from "../../redux/actions";

import fakeData from "../MobileMenu/fakeData";

const DesktopMenu = ({ toggleDesktopMenu }) => {
  const { isDesktopMenuOpen } = useSelector((state) => state.menu);
  const { projects } = useSelector((state) => state.projects);

  const renderProjectLinks = () => {
    return projects?.map((project) => (
      <StyledLink
        key={project?._id}
        to={{
          pathname: `/project-detail/${project?.projectName}`,
          project,
        }}
        onClick={() => toggleDesktopMenu()}
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
        <StyledLink to="/login">Login</StyledLink>
        {renderProjectLinks()}
      </DesktopMenuItensContainer>
    </DesktopMenuContainer>
  );
};

export default connect(null, { toggleDesktopMenu })(DesktopMenu);
