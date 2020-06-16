import React, { useState } from "react";

import { PageContainer } from "../../../constants/styled-components";
import {
  SignInModal,
  LogoFluxoContainer,
  LogoFluxoImage,
  PodioButtonContainer,
  LogoPodioImage,
  PodioButtonText,
  InputLabel,
  TextInput,
  ButtonsContainer,
  SignButton,
  ErrorMessage,
} from "./signin.styled";
import logoFluxo from "../../../assets/images/fluxo-logo.png";
import logoPodio from "../../../assets/images/podio-logo-transparent.png";

import { useSelector, connect } from "react-redux";
import { podioSignIn, signIn } from "../../../redux/actions";

import { useHistory } from "react-router-dom";
const SignInPage = ({ podioSignIn, signIn }) => {
  const history = useHistory();
  const {
    loading: { loadingPodioSignIn, loadingSignIn },
    error: { podioSignInError, signInError },
  } = useSelector((state) => state.requests);

  const [formFields, setFormFields] = useState({
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
    signIn({
      email: formFields.email,
      password: formFields.password,
    });
  };

  return (
    <PageContainer type="auth">
      <SignInModal>
        <LogoFluxoContainer>
          <LogoFluxoImage src={logoFluxo} alt="logo fluxo" />
        </LogoFluxoContainer>
        <PodioButtonContainer onClick={podioSignIn}>
          <LogoPodioImage src={logoPodio} alt="podio signin" />
          <PodioButtonText>
            {loadingPodioSignIn ? "..." : "Conecte-se com o Pódio"}
          </PodioButtonText>
        </PodioButtonContainer>

        <form onSubmit={handleFormSubmit}>
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
            <SignButton login={true} onClick={handleFormSubmit}>
              {loadingSignIn ? "..." : "Login"}
            </SignButton>
            <SignButton
              onClick={() => {
                history.push("/signup");
              }}
            >
              Cadastro
            </SignButton>
          </ButtonsContainer>
          <ErrorMessage>{signInError ? signInError : null}</ErrorMessage>
        </form>
      </SignInModal>
    </PageContainer>
  );
};

export default connect(null, { podioSignIn, signIn })(SignInPage);
