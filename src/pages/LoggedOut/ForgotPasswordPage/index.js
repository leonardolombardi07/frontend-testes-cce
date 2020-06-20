import React, { useState } from "react";

import { PageContainer } from "../../../constants/styled-components/page-container.styled";
import {
  SignInModal,
  IconContainer,
  Title,
  TextInput,
  SignButton,
  ErrorMessage,
} from "./forgot.styled";
import { Spinner } from "../../../components/Spinner";
import GoBackButton from "../../../components/GoBackButton";
import { AiFillLock } from "react-icons/ai";

import { forgotPassword } from "../../../redux/actions/authActions";
import { useSelector, connect } from "react-redux";

const ForgotPasswordPage = ({ forgotPassword }) => {
  const {
    loading: { loadingForgotPassword },
    error: { forgotPasswordError },
  } = useSelector((state) => state.requests);

  const [email, setEmail] = useState("");

  const handleInputChange = (event) => {
    event.persist();
    setEmail(event.target.value);
  };

  const handleSubmit = () => {
    forgotPassword({ email });
  };

  return (
    <PageContainer type="auth">
      <SignInModal>
        <IconContainer>
          <AiFillLock size={50} />
        </IconContainer>
        <Title>Redefinir minha senha</Title>
        <p>
          Insira o seu email e enviaremos um link para você voltar a acessar a
          sua conta.
        </p>
        <TextInput name="email" value={email} onChange={handleInputChange} />
        <SignButton onClick={handleSubmit}>
          {loadingForgotPassword ? <Spinner /> : "Enviar"}
        </SignButton>
        <ErrorMessage errorMessage={forgotPasswordError}>
          {forgotPasswordError ? forgotPasswordError : "..."}
        </ErrorMessage>
      </SignInModal>
      <GoBackButton path="signin" />
    </PageContainer>
  );
};

export default connect(null, { forgotPassword })(ForgotPasswordPage);
