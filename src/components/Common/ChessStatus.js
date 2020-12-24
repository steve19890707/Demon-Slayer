import React from 'react';
import { Sprite, Graphics, Text } from '@inlet/react-pixi/animated';
import { loader } from '../DataLoader';
import * as PIXI from "pixi.js";

export const ChessStatus = ({
  ChessData,
  ChessKey,
  CheckStatus,
  setMoveStep,
  dispatch
})=> {
  const CreateSkillList = ()=>{
    return ChessData.skill.map((value,key)=>{
        return <React.Fragment key={key}>
        <Text
          x={-40}
          y={-70+(key*22)}
          text={`${value.name}`}
          style={new PIXI.TextStyle({
            fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
            fontSize: 16,
            fill:'#ffb700',
          })}
        />
        <Text
          x={-35+(value.name.length * 16)}
          y={-70+(key*22)}
          text={`ATK:${value.atk}(${value.sp}SP)`}
          style={new PIXI.TextStyle({
            fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
            fontSize: 14,
            fill:'#ffffff',
          })}
        />
      </React.Fragment>
    });  
  };
  return <Graphics
    x={400}
    y={300}
    zIndex={99}
    draw={g=> {
      g.lineStyle(1,`0xffffff`,1);
      g.beginFill(`0x22223b`);
      g.drawRoundedRect(-250,-150,500,300,8);
      g.endFill();
    }}
  >
    <Graphics
      x={220}
      y={-120}
      interactive={true}
      buttonMode={true}
      pointertap={(e)=>{
        setMoveStep(true);
        dispatch(CheckStatus({
          key:ChessKey
        }));
      }}
      draw={g=> {
        g.beginFill(`0x02040f`);
        g.drawRoundedRect(-15,-15,30,30,50);
        g.endFill();
      }}
    >
      <Text
        anchor={0.5}
        text={`X`}
        style={new PIXI.TextStyle({
          fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
          fontSize: 16,
          fill:'#ffffff',
        })}
      />
    </Graphics>
    <Sprite
      width={80}
      height={80}
      x={-200}
      y={-90}
      image={loader.resources[`${ChessData.name}-head-default`].data}
    />
    <Text
      x={-200}
      y={10}
      text={ChessData.cn}
      style={new PIXI.TextStyle({
        fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
        fontSize: 16,
        fill:'#ffffff',
      })}
    />
    <Text
      x={-200}
      y={35}
      text={`HP:`}
      style={new PIXI.TextStyle({
        fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
        fontSize: 16,
        fill:'#ffffff',
      })}
    />
    <Text
      x={-170}
      y={35}
      text={`${ChessData.hp} / ${ChessData.fullValue.hp}`}
      style={new PIXI.TextStyle({
        fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
        fontSize: 16,
        fill:'#ff6b6b',
      })}
    />
    <Text
      x={-200}
      y={60}
      text={`SP:`}
      style={new PIXI.TextStyle({
        fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
        fontSize: 16,
        fill:'#ffffff',
      })}
    />
    <Text
      x={-170}
      y={60}
      text={`${ChessData.sp} / ${ChessData.fullValue.sp}`}
      style={new PIXI.TextStyle({
        fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
        fontSize: 16,
        fill:'#0466c8',
      })}
    />
    <Text
      x={-50}
      y={-95}
      text={'招式'}
      style={new PIXI.TextStyle({
        fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
        fontSize: 16,
        fill:'#ffffff',
      })}
    />
    <CreateSkillList/>
  </Graphics>
};