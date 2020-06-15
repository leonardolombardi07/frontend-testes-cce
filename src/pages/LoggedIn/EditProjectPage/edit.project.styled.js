import styled from "styled-components";

export const ProjectHeaderContainer = styled.div`
  width: 100%;
  min-height: 300px;
  background: orange;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;

  padding: 20px 0px 0px 0px;
`;

export const ProjectLogoPlaceholder = styled.div`
  /* height: 200px;
  width: 200px; */
  width: 350px;
  max-width: 80%;
  height: 200px;
  max-height: 80%;

  border-radius: 10px;
  border: 1px solid lightgrey;
  background-image: url(${(p) => p.backgroundImage});
  background-size: cover;
  background-position: center center;
  background-color: #ffffff;
`;

export const ProjectLogoInput = styled.input`
  opacity: 0;
  top: 0;
  width: 100%;
  height: 100%;

  :hover {
    cursor: pointer;
  }
`;

export const ProjectNameInput = styled.input`
  width: 70%;
  height: 5px;
  border: 1px solid lightgrey;
  margin: 20px 0px;
  padding: 15px 25px;
  background: #ffffff;
  outline: 0;

  font-size: 20px;
  font-weight: bold;
  color: #002;
  text-align: center;

  @media (min-width: 650px) {
    width: 50%;
    font-size: 22px;
    height: 10px;
  }
`;

export const ProjectCardContainer = styled.div`
  width: 100%;
  min-height: 150px;
  background: ${(p) => p.theme.secondaryBackground};
  word-wrap: break-word;
  padding: 20px 0px;
  margin: 20px 0px;

  overflow: hidden;
`;

export const Subtitle = styled.h3`
  margin: 30px;
  margin-top: 30px;
`;

export const TextAreaInput = styled.textarea.attrs((p) => ({
  spellcheck: false,
  autoCorrect: false,
}))`
  width: calc(100% - 50px);
  min-height: 100px;
  margin: 10px 20px;
  padding: 15px 10px;
  border: 1px solid lightgrey;
  background: #ffffff;
  resize: vertical;
  outline: 0;

  font-size: 18px;
  color: #002;
`;

export const FormButton = styled.button`
  width: 150px;
  height: 45px;
  margin: 0px 20px;
  margin-bottom: 50px;
  background: ${(p) => p.theme.primaryTextColor};
  border-radius: 4px;

  font-size: 17px;
  color: ${(p) => p.theme.primaryBackground};
  font-weight: bold;
  :hover {
    cursor: pointer;
  }
`;

export const ErrorMessage = styled.p`
  font-size: 16px;
  font-style: italic;
  color: red;
  word-wrap: break;
  margin-top: 20px 0px;

  @media (min-width: 650px) {
    display: inline;
    font-size: 20px;
  }
`;
