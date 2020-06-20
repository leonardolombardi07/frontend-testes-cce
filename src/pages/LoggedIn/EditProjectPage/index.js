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
import { Spinner } from "../../../components/Spinner";
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
  const [imageDisplay, setImageDisplay] = useState(null);

  const handleFormChange = (event) => {
    event.persist();

    const handleFormType = (type) => {
      if (type === "file") {
        const imageFile = event.target.files[0];
        try {
          const display = URL.createObjectURL(imageFile);
          setImageDisplay(display);
        } catch (error) {}
        return imageFile;
      }
      return event.target.value;
    };

    setFormFields((previousState) => ({
      ...previousState,
      [event.target.name]: handleFormType(event.target.type),
    }));
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    editProject({ projectData: formFields });
  };

  const handleImageDisplay = () => {
    if (imageDisplay) {
      return imageDisplay;
    } else if (selectedProject?.projectLogoUrl) {
      return selectedProject.projectLogoUrl;
    } else {
      return addImage;
    }
  };

  console.log(imageDisplay);
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
          <Subtitle>Descrição</Subtitle>
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
          {loadingEditProject ? <Spinner /> : "Enviar"}
        </FormButton>

        <ErrorMessage>
          {editProjectError ? editProjectError : null}
        </ErrorMessage>
      </form>
      <GoBackButton />
    </PageContainer>
  );
};

export default connect(null, { editProject })(EditProjectPage);
