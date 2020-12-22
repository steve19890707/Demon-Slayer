import React from 'react';
// import { fromJS } from 'immutable';
import { Graphics, Text } from '@inlet/react-pixi/animated';
import { chessMove } from "../components/reducer/chess";
import { MoveSelect } from '../components/reducer/map';
import * as PIXI from "pixi.js";

export const ConfirmTip = ({
  props,
})=> {
  const { 
    chess,
    currentChess,
    tipStatus,
    dispatch,
    setMoveStep, 
    setTipStatus
  } = props;
  return <Graphics
    x={400}
    y={300}
    zIndex={99}
    draw={g=> {
      g.lineStyle(1,`0xffffff`,1);
      g.beginFill(`0x22223b`);
      g.drawRoundedRect(-90,-50,180,100,8);
      g.endFill();
    }}
  >
    <Text
      text={tipStatus.title}
      anchor={0.5}
      x={0}
      y={-20}
      style={new PIXI.TextStyle({
        fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
        fontSize: 20,
        fill:['#ffffff', '#ffffff'],
      })}
    />
    <Text
      interactive={true}
      buttonMode={true}
      anchor={0.5}
      text={'確定'}
      x={-30}
      y={20}
      style={new PIXI.TextStyle({
        fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
        fontSize: 20,
        fill:['#ffffff', '#ffffff'],
      })}
      pointertap={()=>{
        switch (currentChess.type) {
          case "MOVE":
            dispatch(chessMove({
              key: currentChess.key,
              changeX:tipStatus.position.x,
              changeY:tipStatus.position.y
            }));
            dispatch(MoveSelect({
              position:{ 
                x:chess[currentChess.key].x, 
                y:chess[currentChess.key].y,
              },
              step:chess[currentChess.key].step,
              changeColor:'0x383838'
            }));
            setMoveStep(true);
            setTipStatus(prev=>{
              return {...prev, status:false }
            });
            break;
          default:
            return;
        }
      }}
    />
    <Text
      interactive={true}
      buttonMode={true}
      anchor={0.5}
      text={'取消'}
      x={30}
      y={20}
      style={new PIXI.TextStyle({
        fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
        fontSize: 20,
        fill:['#ffffff', '#ffffff'],
      })}
      pointertap={()=>{
        switch (currentChess.type) {
          case "MOVE":
            dispatch(MoveSelect({
              position:{ 
                x:chess[currentChess.key].x, 
                y:chess[currentChess.key].y,
              },
              step:chess[currentChess.key].step,
              changeColor:'0x383838'
            }));
            setMoveStep(true);
            setTipStatus(prev=>{
              return {...prev, status:false }
            })
            break;
          default:
            return;
        }
      }}
    />
  </Graphics>
};