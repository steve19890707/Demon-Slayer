import React,{ useState } from 'react';
import { fromJS } from 'immutable';
import { Graphics, Text } from '@inlet/react-pixi/animated';
import { GetMove } from '../components/reducer/map';
import { chessSelected } from "../components/reducer/chess";
import * as PIXI from "pixi.js";

export const ChessUIBoard = ({
  ChessData,
  ChessVal,
  ChessKey,
  positionX,
  positionY,
  setCurrentChess,
  setMoveStep,
  dispatch
})=> {
  const currentChessPositions = [];
  const [textInforArray, setTextInforArray] = useState(fromJS([{
      id:1, 
      title:"移動",
      textColor:['#ffffff', '#ffffff']
    },{ 
      id:2,
      title:"攻擊",
      textColor:['#ffffff', '#ffffff']
    },{ 
      id:3,
      title:"戰技",
      textColor:['#ffffff', '#ffffff']
    },{ 
      id:4,
      title:"返回",
      textColor:['#ffffff', '#ffffff']
  }]));
  ChessData.map((v)=>{
    return currentChessPositions.push({
      x:v.x,
      y:v.y
    });
  });
  const CreateText = ({ noop })=>{
    return textInforArray.map((val,key)=>{
      return <Text
        key={key}
        interactive={true}
        buttonMode={true}
        text={val.get('title')}
        x={10}
        y={5+(25*key)}
        style={new PIXI.TextStyle({
          fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
          fontSize: 20,
          fill:val.get('textColor').toJS(),
        })}
        pointerover={()=>{
          setTextInforArray(prev=>
            prev.setIn([key,'textColor',1],'#00ff99')
          );
        }}
        pointerout={()=>{
          setTextInforArray(prev=>
            prev.setIn([key,'textColor',1],'#ffffff')
          );
        }}
        pointertap={(e)=>{
          switch (val.get('id')) {
            case 1:
              setCurrentChess({ 
                key:ChessKey,
                type:"MOVE"
              });
              dispatch(GetMove({
                position:{ 
                  x:ChessVal.x, 
                  y:ChessVal.y,
                },
                step:ChessVal.step,
                changeColor:'0x4361ee',
                currentChessPositions: currentChessPositions
              }));
              dispatch(chessSelected({
                key:ChessKey
              }));
              break;
            case 4 :
              setMoveStep(true);
              dispatch(chessSelected({
                key:ChessKey
              }));
              break;
            default:
              return console.log(e.target)
          };
        }}
      />
    }
  )};
  return <Graphics
    x={positionX}
    y={positionY}
    zIndex={2}
    draw={g=> {
      g.lineStyle(1,`0xffffff`,1);
      g.beginFill(`0x22223b`);
      g.drawRoundedRect(0,0,60,110,8);
      g.endFill();
    }}
  ><CreateText/></Graphics>
};