import React from "react";
import {
  ShowErrorContainer,
  MessageContainer,
  ErrorImageContainer,
} from "./error.styled";
import sadSkull from "../../assets/images/sad-skull.png";

const ShowError = () => {
  return (
    <ShowErrorContainer>
      <MessageContainer>
        <h1>Uoops</h1>
        <p>
          Nosso servidor não conseguiu entregar os dados dos projetos... O
          culpado? quem fez o back!
        </p>
      </MessageContainer>
      <ErrorImageContainer src={sadSkull} />
    </ShowErrorContainer>
  );
};

export default ShowError;
