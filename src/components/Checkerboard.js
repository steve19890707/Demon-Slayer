import React, {} from 'react';
import * as PIXI from "pixi.js";
import { Sprite, Container } from '@inlet/react-pixi';
import { MoveSelect } from '../components/reducer/map';
const texture = PIXI.Texture.WHITE;
export const CreateCheckerboard = ({
  reduxProps
})=>{
  const { 
    chess, chessMap, currentChess, dispatch, setTipStatus
  } = reduxProps;
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
          pointertap={()=>{
            switch (currentChess.type) {
              case "MOVE":
                setTipStatus({
                  title:'確定移動?',
                  status:true,
                  position:{
                    x:v.x, y:v.y
                  }
                });
                dispatch(MoveSelect({
                  position:{ 
                    x:chess[currentChess.key].x, 
                    y:chess[currentChess.key].y,
                  },
                  step:chess[currentChess.key].step,
                  changeColor:'0x4361ee'
                }));
                break;
              default:
                return;
            }; 
          }}
        />
      });
    })}
  </Container>
};