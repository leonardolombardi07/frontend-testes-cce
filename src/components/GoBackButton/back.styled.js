import styled from "styled-components";

export const StyledButton = styled.button`
  position: fixed;
  left: 20px;
  bottom: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border-width: 0;
  background: orange;
  :hover {
    cursor: pointer;
  }

  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: black;
  text-decoration: none;
`;
