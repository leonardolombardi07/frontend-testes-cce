import React from "react";

import { StyledLink, CreateButtonContainer } from "./create.styled";
import { MdPlusOne } from "react-icons/md";

const CreateProjectButton = () => {
  return (
    <StyledLink to="/create-project">
      <CreateButtonContainer>
        <MdPlusOne size={33} />
      </CreateButtonContainer>
    </StyledLink>
  );
};

export default CreateProjectButton;
