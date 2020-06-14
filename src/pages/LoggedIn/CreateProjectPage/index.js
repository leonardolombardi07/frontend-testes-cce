import React from "react";

import { PageContainer } from "../../../constants/styled-components";
import {
  ProjectHeaderContainer,
  ProjectLogoPlaceholder,
  ProjectLogoInput,
  ProjectCardContainer,
} from "./create.project.styled";

import logoFluxo from "../../../assets/images/add-image-transparent.png";

const CreateProjectPage = () => {
  return (
    <PageContainer>
      <ProjectHeaderContainer>
        <ProjectLogoPlaceholder backgroundImage={logoFluxo}>
          <ProjectLogoInput type="file" />
        </ProjectLogoPlaceholder>
        <ProjectCardContainer>hi</ProjectCardContainer>
      </ProjectHeaderContainer>
    </PageContainer>
  );
};

export default CreateProjectPage;
