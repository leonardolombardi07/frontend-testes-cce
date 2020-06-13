import React from "react";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body, html {
    background: blue;
    margin: 0;
    min-height: 100%;
    color: black;

    font-family: 'Lato', sans-serif;
  }
`;
