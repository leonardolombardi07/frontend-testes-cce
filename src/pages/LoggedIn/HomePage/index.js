import React, { useEffect } from "react";

import Banner from "../../../components/Banner";
import { PageContainer } from "../../../constants/styled-components";
import { ProjectCardsContainer } from "./homepage.styled";
import ProjectCard from "../../../components/ProjectCard";
import ShowError from "../../../components/ShowError";
import CreateProjectButton from "../../../components/CreateProjectButton";

import Lottie from "react-lottie";
import { defaultOptions } from "./lottieOptions";

import { fetchProjects } from "../../../redux/actions";
import { connect, useSelector } from "react-redux";

const HomePage = ({ fetchProjects }) => {
  const { projects } = useSelector((state) => state.projects);
  const {
    loading: { loadingFetchProjects },
    error: { fetchProjectsError },
  } = useSelector((state) => state.requests);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  const renderProjectCards = () => {
    return projects.map((projectData) => (
      <ProjectCard projectData={projectData} key={projectData._id} />
    ));
  };

  const renderContent = () => {
    if (loadingFetchProjects) {
      return <Lottie options={defaultOptions} width={400} height={400} />;
    } else if (fetchProjectsError) {
      return <ShowError />;
    }
    return renderProjectCards();
  };

  return (
    <>
      <Banner />
      <PageContainer>
        <ProjectCardsContainer
          fetchProjectsError={fetchProjectsError}
          loadingFetchProjects={loadingFetchProjects}
        >
          {renderContent()}
        </ProjectCardsContainer>
        <CreateProjectButton />
      </PageContainer>
    </>
  );
};

export default connect(null, { fetchProjects })(HomePage);
