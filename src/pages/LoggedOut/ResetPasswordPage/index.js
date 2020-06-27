import React, { useState } from "react";

import { PageContainer } from "../../../constants/styled-components/page-container.styled";
import {
  SignInModal,
  InputLabel,
  TextInput,
  SignButton,
  ErrorMessage,
} from "./reset.styled";
import { Spinner } from "../../../components/Spinner";

import { resetPassword } from "../../../redux/actions/authActions";
import { useSelector, connect } from "react-redux";

const ResetPasswordPage = ({ resetPassword }) => {
  const {
    loading: { loadingResetPassword },
    error: { resetPasswordError },
  } = useSelector((state) => state.requests);

  const [formFields, setFormFields] = useState({
    newPassword: "",
    confirmNewPassword: "",
  });

  const handleInputChange = (event) => {
    event.persist();
    setFormFields((previousState) => ({
      ...previousState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = () => {
    resetPassword({
      newPassword: formFields.newPassword,
      confirmNewPassword: formFields.confirmNewPassword,
    });
  };

  return (
    <PageContainer type="auth">
      <SignInModal>
        <InputLabel>Nova Senha</InputLabel>
        <TextInput
          name="newPassword"
          value={formFields.newPassword}
          onChange={handleInputChange}
        />

        <InputLabel>Confirmar Nova Senha</InputLabel>
        <TextInput
          name="confirmNewPassword"
          value={formFields.confirmNewPassword}
          onChange={handleInputChange}
        />

        <SignButton onClick={handleSubmit}>
          {loadingResetPassword ? <Spinner /> : "Atualizar Senha"}
        </SignButton>

        <ErrorMessage errorMessage={resetPasswordError}>
          {resetPasswordError ? resetPasswordError : "..."}
        </ErrorMessage>
      </SignInModal>
    </PageContainer>
  );
};

export default connect(null, { resetPassword })(ResetPasswordPage);
