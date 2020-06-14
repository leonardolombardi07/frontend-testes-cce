import React from "react";

import { PageContainer } from "../../../constants/styled-components";
import {
  ProjectHeaderContainer,
  ProjectLogo,
  ProjectTitle,
  ProjectCardContainer,
  Subtitle,
  Text,
} from "./project.styled";
import logoFluxo from "../../../assets/images/fluxo-logo.png";

const ProjectDetailPage = ({ location: { project } }) => {
  return (
    <PageContainer>
      <ProjectHeaderContainer>
        <ProjectLogo src={logoFluxo} />
        <ProjectTitle>
          {project?.projectName ? project.projectName : "Project Title"}
        </ProjectTitle>
      </ProjectHeaderContainer>
      <ProjectCardContainer>
        <Subtitle>Description</Subtitle>
        <Text>
          {project?.projectDescription
            ? project.projectDescription
            : "There's no Description here"}
        </Text>
      </ProjectCardContainer>
      <ProjectCardContainer>
        <Subtitle>Bugs</Subtitle>
        <Text>
          {project?.projectBugsReport
            ? project.projectBugsReport
            : "No bugs..."}
        </Text>
      </ProjectCardContainer>
    </PageContainer>
  );
};

export default ProjectDetailPage;
