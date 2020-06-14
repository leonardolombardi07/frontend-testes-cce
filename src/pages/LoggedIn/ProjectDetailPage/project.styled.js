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

  padding: 20px 0px 0px 0px;
`;

export const ProjectLogo = styled.img`
  max-height: 200px;
  border-radius: 10px;
`;

export const ProjectTitle = styled.h2`
  font-weight: 600;
  margin-bottom: 5px;
`;

export const ProjectCardContainer = styled.div`
  width: 100%;
  min-height: 150px;
  background: #ffffff;
  word-wrap: break-word;
  padding: 20px 0px;
  margin: 20px 0px;
`;

export const Subtitle = styled.h3`
  margin: 20px;
  margin-top: 30px;
`;

export const Text = styled.p`
  margin: 20px;
`;
