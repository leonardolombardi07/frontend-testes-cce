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
      key={projectData?.id}
      to={{
        pathname: `/project-detail/${projectData?.projectName}`,
        project: projectData,
      }}
    >
      <ProjectCardContainer>
        <ProjectCardLogo src={projectData?.projectLogoUrl} />
        <ProjectPresentationContainer>
          <h1>{projectData?.projectName}</h1>
          <UserDescription>User Owner</UserDescription>
        </ProjectPresentationContainer>
      </ProjectCardContainer>
    </StyledLink>
  );
};

export default ProjectCard;
