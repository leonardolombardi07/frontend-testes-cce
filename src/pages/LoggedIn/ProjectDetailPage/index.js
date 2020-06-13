import React from "react";
import { PageContainer } from "../../../constants/styled-components";

const ProjectDetailPage = ({ location: { project } }) => {
  return (
    <PageContainer>
      <h1>{project.projectName}</h1>
    </PageContainer>
  );
};

export default ProjectDetailPage;
