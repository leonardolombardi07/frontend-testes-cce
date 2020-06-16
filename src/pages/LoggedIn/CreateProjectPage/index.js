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
import GoBackButton from "../../../components/GoBackButton";

import { createProject } from "../../../redux/actions";
import { useSelector, connect } from "react-redux";

const CreateProjectPage = ({ createProject }) => {
  const {
    loading: { loadingCreateProject },
    error: { createProjectError },
  } = useSelector((state) => state.requests);

  const [formFields, setFormFields] = useState({
    projectLogo: null,
    projectName: "",
    projectDescription: "",
    projectBugsReport: "",
  });
  const [imageDisplay, setImageDisplay] = useState(null);

  const handleFormChange = (event) => {
    event.persist();

    const handleFormType = (type) => {
      if (type === "file") {
        const imageFile = event.target.files[0];
        try {
          const display = URL.createObjectURL(imageFile);
          setImageDisplay(display);
        } catch (error) {
          alert("Não foi possível salvar essa imagem!");
        }
        return imageFile;
      }
      return event.target.value;
    };

    setFormFields((previousState) => ({
      ...previousState,
      [event.target.name]: handleFormType(event.target.type),
    }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    createProject({ projectData: formFields });
  };

  const handleImageDisplay = () => {
    if (imageDisplay) {
      return imageDisplay;
    } else {
      return addImage;
    }
  };

  return (
    <PageContainer>
      <form>
        <ProjectHeaderContainer>
          <ProjectLogoPlaceholder backgroundImage={handleImageDisplay()}>
            <ProjectLogoInput
              type="file"
              name="projectLogo"
              onChange={handleFormChange}
            />
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
          {loadingCreateProject ? "..." : "Enviar"}
        </FormButton>

        <ErrorMessage>
          {createProjectError ? createProjectError : null}
        </ErrorMessage>
      </form>
      <GoBackButton />
    </PageContainer>
  );
};

export default connect(null, { createProject })(CreateProjectPage);
