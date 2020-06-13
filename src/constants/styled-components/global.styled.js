import React from "react";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body, html {
    margin: 0;
    min-height: 100%;
    color: black;
    background: #F3F3F3;

    font-family: 'Lato', sans-serif;
    box-sizing: border-box;
  }

  ::-webkit-scrollbar {
    width: 9px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: lightgrey;
    border-radius: 10px;
  }
`;
