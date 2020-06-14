import styled from "styled-components";
import { AiFillFileImage } from "react-icons/ai";

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

  padding: 20px 0px 0px 0px;
`;

export const ProjectLogoPlaceholder = styled.div`
  height: 200px;
  width: 200px;
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

export const ProjectCardContainer = styled.div`
  width: 100%;
  height: 200px;
  background: ${(p) => p.theme.secondaryBackground};
  word-wrap: break-word;
  margin-top: 100px;
  background: red;
`;

export const Subtitle = styled.h3`
  margin: 20px;
  margin-top: 30px;
`;

export const Text = styled.p`
  margin: 20px;
`;
