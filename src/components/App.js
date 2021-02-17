import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import device from "current-device";
import { Canvas } from './Canvas';
import { audioData, loader } from './DataLoader';
const isDesktop = device.desktop();
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
  canvas {
    width:${({ isDesktop })=>!isDesktop&&`
      75% !important
    `};
    height:${({ isDesktop })=>!isDesktop&&`
      100% !important
    `};
  }
`;
export const App = ()=> {
  const [ dataIsDone, setDataIsDone ] = useState(false);
  const [ gameStart, setGameStart ] = useState(false);
  const [ mobileResize, setMobileResize ] = useState((window.innerHeight > window.innerWidth));
  const [ progress, setProgress ] = useState(0);
  const [ mp3load, setMp3load ] = useState({
    open:false,
    KimetsuNoYaiba:false,
  });
  // mp3 load
  audioData.KimetsuNoYaiba.on('load', function(){
    setMp3load(prev=>{return{...prev,KimetsuNoYaiba:true}});
  });
  audioData.open.on('load', function(){
    setMp3load(prev=>{return{...prev,open:true}});
  });
  useEffect(()=>{
    loader.onProgress.add((loader)=>{
      setProgress(Math.floor(loader.progress));
    });
    loader.onComplete.add((loader,resources)=>{
      setProgress(100);
      setDataIsDone(true);
    });
  });
  useEffect(()=>{
    const handleResize = function(){
      const width = window.innerWidth;
      const height = window.innerHeight;
      setMobileResize(height > width);
    };
    window.addEventListener('resize',handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  },[]);
  useEffect(()=>{
    const state = 
      mp3load.KimetsuNoYaiba&&
      mp3load.open&&
      dataIsDone;
    if(state){
      setGameStart(true);
    }; 
  },[dataIsDone, mp3load]);
  return <StyledApp isDesktop={isDesktop}>
    <GlobalStyle/>
    {gameStart?<Canvas/>:
      <span className="loading">
        {dataIsDone ? `讀取音訊中...` :
        `Loading ${progress}%..`}
      </span>}
  </StyledApp>
};
