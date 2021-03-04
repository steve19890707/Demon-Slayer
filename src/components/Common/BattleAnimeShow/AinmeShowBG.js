import React from 'react';
import { Sprite } from '@inlet/react-pixi/animated';
import { Spring } from 'react-spring/renderprops';
import { loader } from '../../DataLoader';

export const AnimeShowBG = ({
  props,
})=>{
  const { stageStatus, BGstatus, BGprop, SkBGprop, 
    setSkBGpops, setBGpops } = props;
  const filterBackgroundImg = (stageStatus)=>{
    switch (stageStatus){
      case 'stageTwo':
      case 'stageFour':
        return 'stageOne';
      default:
        return stageStatus;
    };
  };
  return <>
    {BGstatus.type==='STOP'&&<Sprite
      x={-400}
      y={-100}
      zIndex={1}
      width={1600}
      height={500}
      anchor={0.5}
      image={loader.resources[`${filterBackgroundImg(stageStatus)}-BG`].data}
    />}
    {BGstatus.type==='STANDBY'&&<Spring
      from={{ x:-400, y:-100 }}
      to={{ x: BGprop.toX, y:-100 }}
      config={{ duration: BGprop.duration }}
      onRest={()=>{
        if(BGprop.toX===-400){
          setBGpops({
            toX:400,
            duration: 20000
          });
        }else {
          setBGpops({
            toX:-400,
            duration:-1000
          });
        };
      }}
    >
      {props => 
        <Sprite
          zIndex={1}
          width={1600}
          height={500}
          anchor={0.5}
          image={loader.resources[`${filterBackgroundImg(stageStatus)}-BG`].data}
          {...props}
      />}
    </Spring>}
    {BGstatus.type==='ENEMYSTANDBY'&&<Spring
      from={{ x:400, y:-100 }}
      to={{ x: -BGprop.toX, y:-100 }}
      config={{ duration: BGprop.duration }}
      onRest={()=>{
        if(-BGprop.toX===400){
          setBGpops({
            toX:400,
            duration: 20000
          });
        }else {
          setBGpops({
            toX:-400,
            duration:-1000
          });
        };
      }}
    >
      {props => 
        <Sprite
          zIndex={1}
          width={1600}
          height={500}
          anchor={0.5}
          image={loader.resources[`${filterBackgroundImg(stageStatus)}-BG`].data}
          {...props}
      />}
    </Spring>}
    {BGstatus.type==='SKILL'&&<Spring
      from={{ x:-400, y:-100 }}
      to={{ x: SkBGprop.toX, y:-100 }}
      config={{ duration: SkBGprop.duration }}
      onRest={()=>{
        if(SkBGprop.toX===-400){
          setSkBGpops({
            toX:400,
            duration: 500
          });
        }else {
          setSkBGpops({
            toX:-400,
            duration:-1000
          });
        };
      }}
    >
      {props => 
        <Sprite
          zIndex={1}
          width={1600}
          height={500}
          anchor={0.5}
          image={loader.resources[`${filterBackgroundImg(stageStatus)}-BG`].data}
          {...props}
      />}
    </Spring>}
    {BGstatus.type==='ENEMYSKILL'&&<Spring
      from={{ x:400, y:-100 }}
      to={{ x: -SkBGprop.toX, y:-100 }}
      config={{ duration: SkBGprop.duration }}
      onRest={()=>{
        if(-SkBGprop.toX===400){
          setSkBGpops({
            toX:400,
            duration: 500
          });
        }else {
          setSkBGpops({
            toX:-400,
            duration:-1000
          });
        };
      }}
    >
      {props => 
        <Sprite
          zIndex={1}
          width={1600}
          height={500}
          anchor={0.5}
          image={loader.resources[`${filterBackgroundImg(stageStatus)}-BG`].data}
          {...props}
      />}
    </Spring>}
  </>
};