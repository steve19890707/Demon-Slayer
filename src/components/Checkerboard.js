import React from 'react';
import * as PIXI from "pixi.js";
import { Sprite, Container } from '@inlet/react-pixi';
import { createStore } from 'redux';
import reducer from './reducer/index';
import { loader } from './DataLoader';

const texture = PIXI.Texture.WHITE;
export const CreateCheckerboard = ()=>{
  const store = createStore(reducer);
  const { chess, map } = store.getState();
  map.map((value,key)=> {
    return value.map((v,k)=>{
      return Object.keys(chess).map((chessVal)=>{
        if(chess[chessVal].x===k+1&&chess[chessVal].y===key+1){
          return store.dispatch({ type:'IsChess', Xkey:k, Ykey:key, name: chessVal});
        }else return null;
      })
    })
  });
  return <Container>
    {map.map((value,key)=> {
      return value.map((v,k)=>{
        if(v.name !== 'none'){
          return <Sprite
            interactive={true}
            buttonMode={true}
            key={k}
            width={40}
            height={40}
            x={v.x*40}
            y={v.y*40}
            pointerover={(e)=>e.currentTarget.alpha = 1}
            pointerout={(e)=>e.currentTarget.alpha = 0.5}
            pointertap={()=>console.log(`x: ${k+1}, y: ${key+1}`,map)}
            image={loader.resources[`${v.name}-head-default`].data}
          />
        }else return <Sprite
          key={k}
          width={40}
          height={40}
          x={v.x*40}
          y={v.y*40}
          tint={'0x383838'}
          texture={texture}
        />
        });
      })}
  </Container>
};