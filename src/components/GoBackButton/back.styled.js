import React from "react";
import styled from "styled-components";

export const GoBackButtonContainer = styled.div`
  position: fixed;
  left: 20px;
  bottom: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: orange;
  :hover {
    cursor: pointer;
  }

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledButton = styled.button`
  font-weight: bold;
  color: black;
  text-decoration: none;
`;
