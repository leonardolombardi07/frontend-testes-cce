import React, { useEffect } from "react";
import { PageContainer } from "../../../constants/styled-components";

import { ProjectCardsContainer } from "./homepage.styled";
import Banner from "../../../components/Banner";
import ProjectCard from "../../../components/ProjectCard";

import { fetchProjects } from "../../../redux/actions";
import { connect, useSelector } from "react-redux";

const HomePage = ({ fetchProjects }) => {
  const { projects } = useSelector((state) => state.projects);
  const {
    loading: { loadingProjects },
    error: { projectsError },
  } = useSelector((state) => state.requests);

  useEffect(() => {
    fetchProjects();
  }, []);

  const renderProjectCards = () => {
    return projects.map((projectData) => (
      <ProjectCard projectData={projectData} />
    ));
  };

  return (
    <>
      <Banner />
      <PageContainer>
        <ProjectCardsContainer>
          {renderProjectCards()}
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

export default connect(null, { fetchProjects })(HomePage);
