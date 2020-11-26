import React from 'react';
import * as PIXI from "pixi.js";
import { Sprite, Container } from '@inlet/react-pixi';
const StraightLine = (lineX=0)=>{
  const texture = PIXI.Texture.WHITE;
  const list = [];
  for(let i=0;i<15;i++){
    list.push(i)
  };
  return list.map((val,key)=>{
    return <Sprite
      interactive={true}
      buttonMode={true}
      key={key}
      width={40}
      height={40}
      x={lineX*40}
      y={key*40}
      alpha={0.5}
      pointerover={(e)=>e.currentTarget.alpha = 1}
      pointerout={(e)=>e.currentTarget.alpha = 0.5}
      pointertap={()=>console.log(`x: ${lineX+1}, y: ${key+1}`)}
      tint={'0x00bcd4'}
      texture={texture}
      // image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png"
    />
  });
};
export const CreateCheckerboard = ()=>{
  const list = [];
  for(let i=0;i<20;i++){
    list.push(i)
  };
  return <Container>
    {list.map((val,key)=>{
      return StraightLine(key)
    })}
  </Container>
};
