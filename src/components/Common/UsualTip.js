import React,{ useState } from 'react';
// import { fromJS } from 'immutable';
import { Graphics, Text } from '@inlet/react-pixi/animated';
import * as PIXI from "pixi.js";
// rule
import { stageRule } from "../../constants/stageRule";

export const UsualTip = ({
  props,
})=> {
  const {
    stageStatus, chess, currentChess, enemyChess,
    usualTip, setMoveStep, setUsualTip, setCurrentChess } = props;
    const [ textColor, setTextColor ] = useState(['#ffffff', '#ffffff']);
  return <Graphics
    x={400}
    y={300}
    draw={g=> {
      g.lineStyle(1,`0xffffff`,1);
      g.beginFill(`0x22223b`);
      g.drawRoundedRect(-90,-50,180,100,8);
      g.endFill();
    }}
  >
    <Text
      text={usualTip.title}
      anchor={0.5}
      x={0}
      y={-20}
      style={new PIXI.TextStyle({
        fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
        fontSize: 20,
        fill: textColor,
      })}
    />
    <Text
      interactive={true}
      buttonMode={true}
      anchor={0.5}
      text={'確定'}
      x={0}
      y={20}
      style={new PIXI.TextStyle({
        fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
        fontSize: 20,
        fill:['#ffffff', '#ffffff'],
      })}
      pointertap={()=>{
        switch (currentChess.type) {
          case "ATTACK":
            const checkWin = stageRule.getIn([stageStatus,'isWin']);
            const checkLose = stageRule.getIn([stageStatus,'isLose']);
            if(checkWin(enemyChess)){
              setTextColor(['#ffffff', '#06d6a0']);
              setCurrentChess({
                key:0,
                type:"CHECKWIN"
              });
              setUsualTip({
                title:`作戰獲勝!`,
                status:true,
              });
            }else if(checkLose(chess)){
              setTextColor(['#dc2f02', '#d00000']);
              setCurrentChess({
                key:0,
                type:"CHECKLOSE"
              });
              setUsualTip({
                title:`作戰失敗!`,
                status:true,
              });
            }else {
              setMoveStep(true);
              setUsualTip({
                title:``,
                status:false,
              });
            }
            break;
          case "CHECKWIN":
            setMoveStep(true);
            setTextColor(['#ffffff', '#ffffff']);
            setUsualTip({
              title:``,
              status:false,
            });
            break;
          case "CHECKLOSE":
            setMoveStep(true);
            setTextColor(['#ffffff', '#ffffff']);
            setUsualTip({
              title:``,
              status:false,
            });
            break;
          default:
            return;
        }
      }}
    />
  </Graphics>
};