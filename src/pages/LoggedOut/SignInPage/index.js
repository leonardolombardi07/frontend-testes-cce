import React from "react";

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
} from "./signin.styled";
import logoFluxo from "../../../assets/images/fluxo-logo.png";
import logoPodio from "../../../assets/images/podio-logo-transparent.png";

import { useSelector, connect } from "react-redux";
import { podioSignIn, signIn } from "../../../redux/actions";

const SignInPage = ({ podioSignIn, signIn }) => {
  const {
    loading: { loadingPodioSignIn },
    error: { podioSignInError },
  } = useSelector((state) => state.requests);

  const state = useSelector((state) => state.auth);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    signIn();
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
          <TextInput />
          <InputLabel>Senha</InputLabel>
          <TextInput />
          <ButtonsContainer>
            <SignButton login={true}>Login</SignButton>
            <SignButton>Cadastro</SignButton>
          </ButtonsContainer>
        </form>
      </SignInModal>
    </PageContainer>
  );
};

export default connect(null, { podioSignIn, signIn })(SignInPage);
