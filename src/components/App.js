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
  .mobile-cover {
    @keyframes trun {
      0% { transform: translate(-50%,-50%)rotate(0deg) }
      75% { transform: translate(0%,-50%)rotate(90deg) }
      100% { transform: translate(0%,-50%)rotate(90deg) }
    }
    position: fixed;
    width:100%;
    height:100vh;
    z-index:99;
    background-color:#000;
    img { 
      position: absolute;
      transform:translate(-50%,-50%);
      top:40%;
      left:50%;
      width:15%;
      max-width:75px;
      animation:trun 2s infinite;
    }
    .subtitle {
      position: absolute;
      transform:translate(-50%,-50%);
      top:50%;
      left:50%;
      color:#f90;
      font-size:18px;
    }
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
    {(mobileResize&&!isDesktop) &&
      <div className="mobile-cover">
        <img alt=''src={loader.resources[`trun`].url}/>
        <div className="subtitle">請橫放裝置</div>
      </div>}
  </StyledApp>
};
