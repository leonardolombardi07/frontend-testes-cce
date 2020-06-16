import React, { useState } from "react";

import { PageContainer } from "../../../constants/styled-components";
import {
  SignUpModal,
  LogoFluxoContainer,
  LogoFluxoImage,
  InputLabel,
  TextInput,
  ButtonsContainer,
  SignButton,
  ErrorMessage,
} from "./signup.styled";
import { Spinner } from "../../../components/Spinner";
import GoBackButton from "../../../components/GoBackButton";
import logoFluxo from "../../../assets/images/fluxo-logo.png";

import { signUp } from "../../../redux/actions";
import { useSelector, connect } from "react-redux";

const SignUpPage = ({ signUp }) => {
  const {
    loading: { loadingSignUp },
    error: { signUpError },
  } = useSelector((state) => state.requests);

  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleFormChange = (event) => {
    event.persist();

    setFormFields((previousState) => ({
      ...previousState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    signUp({
      name: formFields.name,
      email: formFields.email,
      password: formFields.password,
    });
  };

  return (
    <PageContainer type="auth">
      <SignUpModal>
        <LogoFluxoContainer>
          <LogoFluxoImage src={logoFluxo} />
        </LogoFluxoContainer>

        <form>
          <InputLabel>Nome</InputLabel>
          <TextInput
            name="name"
            value={formFields.name}
            onChange={handleFormChange}
          />

          <InputLabel>E-mail</InputLabel>
          <TextInput
            name="email"
            value={formFields.email}
            onChange={handleFormChange}
          />

          <InputLabel>Senha</InputLabel>
          <TextInput
            name="password"
            value={formFields.password}
            onChange={handleFormChange}
          />

          <ButtonsContainer>
            <SignButton onClick={handleFormSubmit}>
              {loadingSignUp ? <Spinner /> : "Cadastrar"}
            </SignButton>
          </ButtonsContainer>
          <ErrorMessage>{signUpError ? signUpError : null}</ErrorMessage>
        </form>
      </SignUpModal>
      <GoBackButton />
    </PageContainer>
  );
};

export default connect(null, { signUp })(SignUpPage);
