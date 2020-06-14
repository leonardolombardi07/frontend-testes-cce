import styled from "styled-components";

export const ShowErrorContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${(p) => p.theme.secondaryBackground};
`;

export const MessageContainer = styled.div`
  align-self: flex-start;
  margin: 20px 20px;
  font-style: italic;
  color: ${(p) => p.theme.primaryTextColor};

  p {
    font-size: 20px;
    @media (min-width: 650px) {
      font-size: 30px;
    }
  }
`;

export const ErrorImageContainer = styled.img`
  max-height: 400px;
  max-width: 400px;
`;
