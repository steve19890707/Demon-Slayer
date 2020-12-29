import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Canvas } from './Canvas';
import { loader } from './DataLoader';
const GlobalStyle = createGlobalStyle`
  body { background:#1d2430; }
`;
const StyledApp = styled.div`
  position: relative;
  display:flex;
  align-items:center;
  justify-content:center;
  width:100%;
  height:100vh;
  .loading {
    color: #fff;
    font-size:24px;
  }
`;
export const App = ()=> {
  const [ dataIsDone, setDataIsDone ] = useState(false);
  useEffect(()=>{
    loader.onComplete.add(()=>{
      setDataIsDone(true);
    });
  });
  return <StyledApp>
    <GlobalStyle/>
    {dataIsDone?<Canvas />:
      <span className="loading">Loading..</span>}
  </StyledApp>
};