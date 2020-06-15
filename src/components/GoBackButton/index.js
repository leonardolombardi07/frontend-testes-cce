import React from "react";
import { useHistory } from "react-router-dom";

import { StyledLink, GoBackButtonContainer } from "./back.styled";
import { MdNavigateBefore } from "react-icons/md";

const GoBackButton = () => {
  const history = useHistory();
  return (
    <StyledLink
      onClick={() => {
        history.goBack();
      }}
    >
      <GoBackButtonContainer>
        <MdNavigateBefore size={35} />
      </GoBackButtonContainer>
    </StyledLink>
  );
};

export default GoBackButton;
