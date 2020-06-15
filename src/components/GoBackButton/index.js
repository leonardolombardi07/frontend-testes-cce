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
      <GoBackButtonContainer>
        <MdNavigateBefore size={35} />
      </GoBackButtonContainer>
    </StyledButton>
  );
};

export default GoBackButton;
