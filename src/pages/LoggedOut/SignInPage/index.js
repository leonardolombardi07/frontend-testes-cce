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
  StyledLink,
} from "./signin.styled";
import { Spinner } from "../../../components/Spinner";
import logoFluxo from "../../../assets/images/fluxo-logo.png";
import logoPodio from "../../../assets/images/podio-logo-transparent.png";

import { useHistory } from "react-router-dom";
import { useSelector, connect } from "react-redux";
import { podioSignIn, signIn } from "../../../redux/actions";

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
        {/* <PodioButtonContainer onClick={podioSignIn}>
          <LogoPodioImage src={logoPodio} alt="podio signin" />
          <PodioButtonText>
            {loadingPodioSignIn ? <Spinner /> : "Conecte-se com o Pódio"}
          </PodioButtonText>
        </PodioButtonContainer> */}

        <form onSubmit={handleFormSubmit}>
          <InputLabel>E-mail</InputLabel>
          <TextInput
            name="email"
            value={formFields.email}
            onChange={handleFormChange}
          />
          <InputLabel>Senha</InputLabel>
          <TextInput
            type="password"
            name="password"
            value={formFields.password}
            onChange={handleFormChange}
          />
          <ButtonsContainer>
            <SignButton login={true} onClick={handleFormSubmit}>
              {loadingSignIn ? <Spinner /> : "Login"}
            </SignButton>
            <SignButton
              type="button"
              onClick={() => {
                history.push("/signup");
              }}
            >
              Cadastro
            </SignButton>
          </ButtonsContainer>
          <ErrorMessage errorMessage={signInError}>
            {signInError ? signInError : "..."}
          </ErrorMessage>
        </form>
        <StyledLink to="/forgot-password">Esqueceu sua senha?</StyledLink>
      </SignInModal>
    </PageContainer>
  );
};

export default connect(null, { podioSignIn, signIn })(SignInPage);
