import React, {} from 'react';
import * as PIXI from "pixi.js";
import { Sprite, Container } from '@inlet/react-pixi';
const texture = PIXI.Texture.WHITE;
export const CreateCheckerboard = ({
  reduxProps
})=>{
  const { chessMap } = reduxProps;
  return <Container>
    {chessMap.map((value,key)=> {
      return value.map((v,k)=>{
        return <Sprite
          interactive={v.isInteractive}
          buttonMode={v.isInteractive}
          key={k}
          width={40}
          height={40}
          x={v.x*40}
          y={v.y*40}
          tint={v.color}
          texture={texture}
        />
      });
    })}
  </Container>
};