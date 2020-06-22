import styled from "styled-components";

export const SignInModal = styled.div`
  box-shadow: 0 0 35px 0 rgba(0, 0, 0, 0.5);
  max-width: 80%;
  margin: auto;
  padding: 30px 30px 30px 30px;
  background: white;

  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(p) => p.theme.secondaryBackground};
  text-align: center;

  @media (min-width: 650px) {
    min-width: 400px;
    max-width: 500px;
  }
`;

export const IconContainer = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  border: 1px solid black;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h2`
  color: black;
`;

export const InputLabel = styled.label`
  color: ${(p) => p.theme.primaryTextColor};
  font-size: 17px;
  font-weight: bold;
  margin-left: 11px;
  align-self: flex-start;
`;

export const TextInput = styled.input`
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  border: 1px solid lightgrey;
  border-radius: 2px;
  outline: none;
  padding: 0 12px;
  margin: 17px 0;

  font-size: 17px;
`;

export const SignButton = styled.button`
  width: 100%;
  height: 50px;
  background: ${(p) =>
    p.login ? "black" : p.theme.loginButtonBackgroundColor};
  border-radius: 4px;

  font-size: 17px;
  color: ${(p) => (p.login ? "#FFFFFF" : p.theme.secondaryTextColor)};
  font-weight: bold;
  :hover {
    cursor: pointer;
  }
`;

export const ErrorMessage = styled.p`
  font-size: 17px;
  font-style: italic;
  color: ${(p) => (p.errorMessage ? "red" : p.theme.primaryBackground)};
  text-align: center;
  margin: 20px 0px 0px 20px;
`;
