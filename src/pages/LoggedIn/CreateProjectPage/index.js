import React, { useState } from "react";

import { PageContainer } from "../../../constants/styled-components";
import {
  ProjectHeaderContainer,
  ProjectLogoPlaceholder,
  ProjectLogoInput,
  ProjectNameInput,
  ProjectCardContainer,
  Subtitle,
  TextAreaInput,
  FormButton,
  ErrorMessage,
} from "./create.project.styled";
import addImage from "../../../assets/images/add-image-transparent.png";

import { createProject } from "../../../redux/actions";
import { useSelector, connect } from "react-redux";

const CreateProjectPage = ({ createProject }) => {
  const {
    loading: { loadingProjects },
    error: { projectsError },
  } = useSelector((state) => state.requests);

  const [formFields, setFormFields] = useState({
    projectLogo: null,
    projectName: "",
    projectDescription: "",
    projectBugsReport: "",
  });

  const handleFormChange = (event) => {
    event.persist();
    setFormFields((previousState) => ({
      ...previousState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    createProject({ projectData: formFields });
  };

  return (
    <PageContainer>
      <form>
        <ProjectHeaderContainer>
          <ProjectLogoPlaceholder backgroundImage={addImage}>
            <ProjectLogoInput type="file" onChange={handleFormChange} />
          </ProjectLogoPlaceholder>

          <ProjectNameInput
            name="projectName"
            value={formFields.projectName}
            onChange={handleFormChange}
          />
        </ProjectHeaderContainer>

        <ProjectCardContainer>
          <Subtitle>Description</Subtitle>
          <TextAreaInput
            name="projectDescription"
            value={formFields.projectDescription}
            onChange={handleFormChange}
          />
        </ProjectCardContainer>

        <ProjectCardContainer>
          <Subtitle>Bugs</Subtitle>
          <TextAreaInput
            name="projectBugsReport"
            value={formFields.projectBugsReport}
            onChange={handleFormChange}
          />
        </ProjectCardContainer>

        <FormButton onClick={handleFormSubmit}>
          {loadingProjects ? "..." : "Enviar"}
        </FormButton>

        {projectsError ? <ErrorMessage>{projectsError}</ErrorMessage> : null}
      </form>
    </PageContainer>
  );
};

export default connect(null, { createProject })(CreateProjectPage);
