import React from "react";
import {
  ProjectCardContainer,
  ProjectCardLogo,
  ProjectPresentationContainer,
  UserDescription,
} from "./project-card.styled";

import logoFluxo from "../../assets/images/fluxo-logo.png";

const ProjectCard = () => {
  return (
    <ProjectCardContainer>
      <ProjectCardLogo src={logoFluxo} />
      <ProjectPresentationContainer>
        <h1>Project Title</h1>
        <UserDescription>User Owner</UserDescription>
      </ProjectPresentationContainer>
    </ProjectCardContainer>
  );
};

export default ProjectCard;
