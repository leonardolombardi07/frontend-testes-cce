import styled from "styled-components";

export const ProjectCardsContainer = styled.div`
  width: 100%;
  background: #ffffff;
  border: 1px solid lightgrey;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 650px) {
    display: grid;
    margin: auto;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
  }
`;
