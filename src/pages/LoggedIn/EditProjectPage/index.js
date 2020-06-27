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

import { editProject, saveSelectedProject } from "../../../redux/actions";
import { useSelector, connect } from "react-redux";

const EditProjectPage = ({ editProject }) => {
  const { selectedProject } = useSelector((state) => state.projects);
  const {
    loading: { loadingEditProject },
    error: { editProjectError },
  } = useSelector((state) => state.requests);

  const [formFields, setFormFields] = useState({
    image: null,
    name: selectedProject.name,
    description: selectedProject.description,
    bugsReport: selectedProject.bugsReport,
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
    } else if (selectedProject?.logoUrl) {
      return selectedProject.logoUrl;
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
              name="image"
              onChange={handleFormChange}
            />
          </ProjectLogoPlaceholder>

          <ProjectNameInput
            name="name"
            value={formFields.name}
            onChange={handleFormChange}
          />
        </ProjectHeaderContainer>

        <ProjectCardContainer>
          <Subtitle>Descrição</Subtitle>
          <TextAreaInput
            name="description"
            value={formFields.description}
            onChange={handleFormChange}
          />
        </ProjectCardContainer>

        <ProjectCardContainer>
          <Subtitle>Bugs</Subtitle>
          <TextAreaInput
            name="bugsReport"
            value={formFields.bugsReport}
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
