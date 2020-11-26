import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
  body { background:#1d2430; }
`
const StyledApp = styled.div`
  color:#fff;
`;
export const App = ()=> {
  return (
    <React.Fragment>
      <GlobalStyle/>
      <StyledApp>APP</StyledApp>
    </React.Fragment>
    
  );
}
