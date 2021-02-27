import React from 'react';
// import { fromJS } from 'immutable';
import { Graphics, Text } from '@inlet/react-pixi/animated';
import { chessMove, chessMoved } from "../../reducer/chess";
import { MoveSelect } from '../../reducer/map';
import * as PIXI from "pixi.js";

export const ConfirmTip = ({
  props,
})=> {
  const { 
    chess,
    currentChess,
    tipStatus,
    currentBGM,
    dispatch,
    setMoveStep, 
    setTipStatus,
    setOtherTab,
    setRoundNum,
    setUsualTip,
    setFadeBGM
  } = props;
  return <Graphics
    x={400}
    y={300}
    draw={g=> {
      g.clear();
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
      x={-32}
      y={20}
      style={new PIXI.TextStyle({
        fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
        fontSize: 24,
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
            dispatch(chessMoved({
              key: currentChess.key,
            }));
            dispatch(MoveSelect({
              position:{ 
                x:chess[currentChess.key].x, 
                y:chess[currentChess.key].y,
              },
              step:chess[currentChess.key].step,
              changeColor:'0x383838',
              alphaVal:0
            }));
            setMoveStep(true);
            setTipStatus(prev=>{
              return {...prev, status:false }
            });
            break;
          case "ENDROUND":
            setOtherTab(false);
            setRoundNum(prev=>prev+=1);
            setTipStatus(prev=>{
              return {...prev, status:false }
            });
            setUsualTip({
              title:'敵方回合',
              status:true
            });
            setFadeBGM(currentBGM);
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
      x={32}
      y={20}
      style={new PIXI.TextStyle({
        fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
        fontSize: 24,
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
              changeColor:'0x383838',
              alphaVal:0
            }));
            setMoveStep(true);
            setTipStatus(prev=>{
              return {...prev, status:false }
            });
            break;
          case "ENDROUND":
            setTipStatus(prev=>{
              return {...prev, status:false }
            });
            break;
          default:
            return;
        }
      }}
    />
  </Graphics>
};