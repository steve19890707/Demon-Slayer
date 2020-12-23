import React,{ useState } from 'react';
import { fromJS } from 'immutable';
import { Graphics, Text } from '@inlet/react-pixi/animated';
import { enemyChessSelected } from "../components/reducer/enemyChess";
import * as PIXI from "pixi.js";

export const EnemyChessUIBoard = ({
  ChessKey,
  positionX,
  positionY,
  setMoveStep,
  dispatch
})=> {
  const specialPosition = {
    x: 720,
    y: 535
  };
  const [textInforArray, setTextInforArray] = useState(fromJS([{
      id:1,
      title:"狀態",
      textColor:['#ffffff', '#ffffff']
    },{ 
      id:2,
      title:"返回",
      textColor:['#ffffff', '#ffffff']
  }]));
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
            prev.setIn([key,'textColor',1],'#9d4edd')
          );
        }}
        pointerout={()=>{
          setTextInforArray(prev=>
            prev.setIn([key,'textColor',1],'#ffffff')
          );
        }}
        pointertap={(e)=>{
          switch (val.get('id')) {
            case 2 :
              setMoveStep(true);
              dispatch(enemyChessSelected({
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
    x={positionX!==800?positionX:specialPosition.x}
    y={positionY!==560?positionY:specialPosition.y}
    zIndex={2}
    draw={g=> {
      g.lineStyle(1,`0xffffff`,1);
      g.beginFill(`0x22223b`);
      g.drawRoundedRect(0,0,60,62,8);
      g.endFill();
    }}
  ><CreateText/></Graphics>
}