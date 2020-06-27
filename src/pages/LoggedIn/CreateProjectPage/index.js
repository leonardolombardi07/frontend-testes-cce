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
import { Spinner } from "../../../components/Spinner";
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
    image: null,
    name: "",
    description: "",
    bugsReport: "",
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

  const handleFormSubmit = (event) => {
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
          {loadingCreateProject ? <Spinner /> : "Enviar"}
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
