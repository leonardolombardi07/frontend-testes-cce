import React from "react";
import { PageContainer } from "../../../constants/styled-components";

import { ProjectCardsContainer } from "./homepage.styled";
import Banner from "../../../components/Banner";
import ProjectCard from "../../../components/ProjectCard";

const HomePage = () => {
  return (
    <>
      <Banner />
      <PageContainer>
        <ProjectCardsContainer>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </ProjectCardsContainer>
      </PageContainer>
    </>
  );
};

export default HomePage;
