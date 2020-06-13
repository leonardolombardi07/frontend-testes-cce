import React from "react";

import { PageContainer } from "../../../constants/styled-components";
import {
  ProjectHeaderContainer,
  ProjectLogo,
  ProjectTitle,
  ProjectDescriptionContainer,
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
      <ProjectDescriptionContainer>
        <Subtitle>Description</Subtitle>
        <Text>
          {project?.projectDescription
            ? project.projectDescription
            : "There's no Description here"}
        </Text>
      </ProjectDescriptionContainer>
      <ProjectDescriptionContainer>
        <Subtitle>Bugs</Subtitle>
        <Text>
          {project?.projectBugsReport
            ? project.projectBugsReport
            : "No bugs..."}
        </Text>
      </ProjectDescriptionContainer>
    </PageContainer>
  );
};

export default ProjectDetailPage;
