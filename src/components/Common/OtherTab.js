import React from 'react';
import { Sprite, Graphics, Text } from '@inlet/react-pixi/animated';
import { loader } from '../DataLoader';
import * as PIXI from "pixi.js";
import { stageRule } from "../../constants/stageRule";
export const OtherTab = ({ props })=> {
  const {
    stageStatus='',
    roundNum=Number,
    setMoveStep,
    setOtherTab,
    setTipStatus,
    setCurrentChess
  } = props;
  const checkStageRound = ()=>{
    switch (stageStatus) {
      case 'stageOne':
        return 1;
      case 'stageTwo':
        return 2;
      case 'stageThree':
        return 3;
      case 'stageFour':
        return 4;
      default:
        return 1;
    };
  };
  return <Graphics
    x={400}
    y={300}
    draw={g=> {
      g.clear();
      g.lineStyle(1,`0xffffff`,1);
      g.beginFill(`0x22223b`);
      g.drawRoundedRect(-200,-150,400,300,8);
      g.endFill();
    }}
  >
    <Sprite
      interactive={true}
      buttonMode={true}
      width={30}
      height={30}
      anchor={0.5}
      x={173}
      y={-123}
      image={loader.resources[`closeIcon`].data}
      pointertap={()=>{
        setMoveStep(true);
        setOtherTab(false);
        setTipStatus(prev=>{
          return {...prev, status:false }
        });
      }}
    />
    <Sprite
      interactive={true}
      buttonMode={true}
      width={75}
      height={35}
      x={105}
      y={90}
      image={loader.resources[`endBtn`].data}
      pointertap={()=>{
        setCurrentChess({
          key:0,
          type:"ENDROUND"
        });
        setTipStatus(prev=>{
          return {...prev,
            title:`結束回合?`, 
            status:true
          }
        });
      }}
    />
    <Text
      text={`【 第 ${checkStageRound()} 話 】作戰目的`}
      x={-170}
      y={-125}
      style={new PIXI.TextStyle({
        fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
        fontSize: 18,
        fill:['#ffffff', '#00ff99'],
      })}
    />
    <Text
      text={stageRule.getIn([stageStatus,'ruleText','win'])}
      x={-150}
      y={-90}
      style={new PIXI.TextStyle({
        fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
        fontSize: 16,
        fill:['#ffffff', '#ffffff'],
      })}
    />
    <Text
      text={'戰敗條件'}
      x={-170}
      y={-40}
      style={new PIXI.TextStyle({
        fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
        fontSize: 18,
        fill:['#ffffff', '#ee6c4d'],
      })}
    />
    <Text
      text={stageRule.getIn([stageStatus,'ruleText','lose'])}
      x={-150}
      y={-5}
      style={new PIXI.TextStyle({
        fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
        fontSize: 16,
        fill:['#ffffff', '#ffffff'],
      })}
    />
    <Text
      text={'回合數'}
      x={-170}
      y={45}
      style={new PIXI.TextStyle({
        fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
        fontSize: 18,
        fill:['#ffffff', '#8d99ae'],
      })}
    />
    <Text
      text={`第 ${roundNum} 回`}
      x={-150}
      y={80}
      style={new PIXI.TextStyle({
        fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
        fontSize: 16,
        fill:['#ffffff', '#ffffff'],
      })}
    />
  </Graphics>
};

