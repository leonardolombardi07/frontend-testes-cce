import React from "react";
import {
  StyledLink,
  ProjectCardContainer,
  ProjectCardLogo,
  ProjectPresentationContainer,
  UserDescription,
} from "./project-card.styled";

import logoFluxo from "../../assets/images/fluxo-logo.png";

const ProjectCard = ({ projectData }) => {
  return (
    <StyledLink
      key={2}
      to={{
        pathname: `/project-detail/${projectData?.projectName}`,
        // project,
      }}
    >
      <ProjectCardContainer>
        <ProjectCardLogo src={logoFluxo} />
        <ProjectPresentationContainer>
          <h1>Project Title</h1>
          <UserDescription>User Owner</UserDescription>
        </ProjectPresentationContainer>
      </ProjectCardContainer>
    </StyledLink>
  );
};

export default ProjectCard;
