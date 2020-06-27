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
import EditProjectButton from "../../../components/EditProjectButton";
import GoBackButton from "../../../components/GoBackButton";

import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const ProjectDetailPage = () => {
  const { selectedProject } = useSelector((state) => state.projects);

  if (!selectedProject) {
    return <Redirect to="/" />;
  }

  return (
    <PageContainer>
      <ProjectHeaderContainer>
        <ProjectLogo
          src={selectedProject.logoUrl ? selectedProject?.logoUrl : logoFluxo}
        />
        <ProjectTitle>
          {selectedProject?.name ? selectedProject.name : "-"}
        </ProjectTitle>
      </ProjectHeaderContainer>
      <ProjectCardContainer>
        <Subtitle>Descrição</Subtitle>
        <Text>
          {selectedProject?.description ? selectedProject.description : "-"}
        </Text>
      </ProjectCardContainer>
      <ProjectCardContainer>
        <Subtitle>Bugs</Subtitle>
        <Text>
          {selectedProject?.bugsReport ? selectedProject.bugsReport : "-"}
        </Text>
      </ProjectCardContainer>
      <GoBackButton />
      <EditProjectButton />
    </PageContainer>
  );
};

export default ProjectDetailPage;
