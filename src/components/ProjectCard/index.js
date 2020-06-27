import React from "react";

import {
  StyledLink,
  ProjectCardContainer,
  ProjectCardLogo,
  ProjectPresentationContainer,
  UserDescription,
} from "./project-card.styled";
import logoFluxo from "../../assets/images/fluxo-logo.png";

import { connect } from "react-redux";
import { saveSelectedProject } from "../../redux/actions";

const ProjectCard = ({ projectData, saveSelectedProject }) => {
  return (
    <StyledLink
      key={projectData?.id}
      to={{
        pathname: `/project-detail/${projectData?.name}`,
      }}
      onClick={() => {
        saveSelectedProject({ projectData });
      }}
    >
      <ProjectCardContainer>
        <ProjectCardLogo
          src={projectData?.logoUrl ? projectData?.logoUrl : logoFluxo}
        />

        <ProjectPresentationContainer>
          <h1>{projectData?.name}</h1>
          {/* <UserDescription>Clique em mim!</UserDescription> */}
        </ProjectPresentationContainer>
      </ProjectCardContainer>
    </StyledLink>
  );
};

export default connect(null, { saveSelectedProject })(ProjectCard);
