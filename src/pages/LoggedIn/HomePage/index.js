import React, { useEffect } from "react";

import Banner from "../../../components/Banner";
import { PageContainer } from "../../../constants/styled-components";
import { ProjectCardsContainer } from "./homepage.styled";
import ProjectCard from "../../../components/ProjectCard";

import Lottie from "react-lottie";
import { defaultOptions } from "./lottieOptions";

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
  }, [fetchProjects]);

  const renderProjectCards = () => {
    return projects.map((projectData) => (
      <ProjectCard projectData={projectData} />
    ));
  };

  if (projectsError) {
    return null;
  }

  return (
    <>
      <Banner />
      <PageContainer>
        <ProjectCardsContainer>
          {renderProjectCards()}
          {loadingProjects ? (
            <Lottie options={defaultOptions} width={400} height={400} />
          ) : null}
        </ProjectCardsContainer>
      </PageContainer>
    </>
  );
};

export default connect(null, { fetchProjects })(HomePage);
