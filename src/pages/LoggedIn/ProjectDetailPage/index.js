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

import { useSelector } from "react-redux";

const ProjectDetailPage = () => {
  const { selectedProject } = useSelector((state) => state.projects);

  return (
    <PageContainer>
      <ProjectHeaderContainer>
        <ProjectLogo src={selectedProject?.projectLogoUrl} />
        <ProjectTitle>
          {selectedProject?.projectName ? selectedProject.projectName : "..."}
        </ProjectTitle>
      </ProjectHeaderContainer>
      <ProjectCardContainer>
        <Subtitle>Description</Subtitle>
        <Text>
          {selectedProject?.projectDescription
            ? selectedProject.projectDescription
            : "..."}
        </Text>
      </ProjectCardContainer>
      <ProjectCardContainer>
        <Subtitle>Bugs</Subtitle>
        <Text>
          {selectedProject?.projectBugsReport
            ? selectedProject.projectBugsReport
            : "..."}
        </Text>
      </ProjectCardContainer>
    </PageContainer>
  );
};

export default ProjectDetailPage;
