import React from "react";
import { useHistory } from "react-router-dom";

import { StyledButton } from "./back.styled";
import { MdNavigateBefore } from "react-icons/md";

const GoBackButton = ({ path }) => {
  const history = useHistory();

  const handleNavigation = () => {
    if (path) {
      return history.push(path);
    }
    history.goBack();
  };

  return (
    <StyledButton onClick={handleNavigation}>
      <MdNavigateBefore size={35} />
    </StyledButton>
  );
};

export default GoBackButton;
