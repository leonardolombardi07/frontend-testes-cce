import React from "react";
import { useHistory } from "react-router-dom";

import { StyledButton, GoBackButtonContainer } from "./back.styled";
import { MdNavigateBefore } from "react-icons/md";

const GoBackButton = () => {
  const history = useHistory();
  return (
    <StyledButton
      onClick={() => {
        history.goBack();
      }}
    >
      <MdNavigateBefore size={35} />
    </StyledButton>
  );
};

export default GoBackButton;
