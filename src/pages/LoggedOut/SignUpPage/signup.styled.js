import styled from "styled-components";

export const SignUpModal = styled.div`
  box-shadow: 0 0 35px 0 rgba(0, 0, 0, 0.5);
  max-width: 80%;
  margin: auto;
  padding: 30px 30px 30px 30px;
  background: white;

  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(p) => p.theme.secondaryBackground};

  @media (min-width: 650px) {
    min-width: 400px;
    max-width: 500px;
  }
`;

export const LogoFluxoContainer = styled.div`
  width: 80%;
  height: 100px;
  margin: 40px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const LogoFluxoImage = styled.img`
  border: 1px solid lightgrey;
  max-width: 100%;
  max-height: 100%;
  display: block;
  opacity: 1;
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

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

export const SignButton = styled.button`
  width: 45%;
  height: 50px;
  background: ${(p) =>
    p.login ? "black" : p.theme.loginButtonBackgroundColor};
  margin: 22px 0;
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
  color: red;
  text-align: center;
  margin: 5px 0px 0px 20px;
`;
