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

const SignInPage = () => {
  return (
    <PageContainer type="auth">
      <SignInModal>
        <LogoFluxoContainer>
          <LogoFluxoImage src={logoFluxo} alt="logo fluxo" />
        </LogoFluxoContainer>
        <PodioButtonContainer>
          <LogoPodioImage src={logoPodio} alt="podio signin" />
          <PodioButtonText>Conecte-se com o Pódio</PodioButtonText>
        </PodioButtonContainer>

        <form>
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

export default SignInPage;
