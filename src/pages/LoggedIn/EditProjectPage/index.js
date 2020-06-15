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
} from "./edit.project.styled";
import addImage from "../../../assets/images/add-image-transparent.png";
import GoBackButton from "../../../components/GoBackButton";

import { editProject } from "../../../redux/actions";
import { useSelector, connect } from "react-redux";

const EditProjectPage = ({ editProject }) => {
  const { selectedProject } = useSelector((state) => state.projects);
  const {
    loading: { loadingEditProject },
    error: { editProjectError },
  } = useSelector((state) => state.requests);

  const [formFields, setFormFields] = useState({
    projectLogo: null,
    projectName: selectedProject.projectName,
    projectDescription: selectedProject.projectDescription,
    projectBugsReport: selectedProject.projectBugsReport,
    _id: selectedProject._id,
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
    editProject({ projectData: formFields });
  };

  return (
    <PageContainer>
      <form>
        <ProjectHeaderContainer>
          <ProjectLogoPlaceholder
            backgroundImage={
              selectedProject.projectLogoUrl
                ? selectedProject.projectLogoUrl
                : addImage
            }
          >
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
          {loadingEditProject ? "..." : "Enviar"}
        </FormButton>

        {editProjectError ? (
          <ErrorMessage>{editProjectError}</ErrorMessage>
        ) : null}
      </form>
      <GoBackButton />
    </PageContainer>
  );
};

export default connect(null, { editProject })(EditProjectPage);
