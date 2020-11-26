import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Canvas } from './Canvas';

const GlobalStyle = createGlobalStyle`
  body { background:#1d2430; }
`
const StyledApp = styled.div`
  position: relative;
  display:flex;
  align-items:center;
  justify-content:center;
  width:100%;
  height:100vh;
`;
export const App = ()=> {
  return <StyledApp>
    <GlobalStyle/>
    <Canvas/>
  </StyledApp>
};
