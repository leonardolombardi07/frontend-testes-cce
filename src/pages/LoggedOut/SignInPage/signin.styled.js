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

export const PodioButtonContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 55px;
  margin-bottom: 40px;
  background: #e8f0fe;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  :hover {
    cursor: pointer;
  }
`;

export const LogoPodioImage = styled.img`
  max-width: 70%;
  max-height: 70%;
  margin-left: 10px;
  display: block;
  opacity: 1;
`;

export const PodioButtonText = styled.h2`
  padding: 0px;
  margin: 0px 20px;
  margin: 0 0 0px 20px;
  color: #666;
  font-weight: 400;
  font-size: 16px;

  @media (min-width: 650px) {
    font-size: 20px;
  }
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
  justify-content: space-between;
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
