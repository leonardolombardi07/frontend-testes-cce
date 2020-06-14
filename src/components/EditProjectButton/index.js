import React from "react";

import { StyledLink, EditButtonContainer } from "./edit.styled";
import { MdCreate } from "react-icons/md";

const EditProjectButton = () => {
  return (
    <StyledLink>
      <EditButtonContainer>
        <MdCreate size={35} />
      </EditButtonContainer>
    </StyledLink>
  );
};

export default EditProjectButton;
