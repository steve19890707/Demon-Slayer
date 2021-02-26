import React from 'react';
import { Container, Sprite, Text } from '@inlet/react-pixi/animated';
import { loader } from '../../DataLoader';
import * as PIXI from "pixi.js";
export const EnemyList = ({ 
  oder=0,
  enemyRandomSkill=0,
  enemyList=[]
})=>{
  const skill = enemyList[oder].skill;
  const filterCopyChessName = (name)=>{
    if(!!~name.indexOf('Nomanooni')){
      return 'Nomanooni';
    }else return name;
  };
  return <Container sortableChildren={true}>
    <Sprite
      width={65}
      height={65}
      anchor={0.5}
      x={175}
      y={-75}
      image={loader.resources[`${filterCopyChessName(enemyList[oder].name)}-head-default`].data}
    />
    <Text 
      text={`${enemyList[oder].cn} / 技能`}
      anchor={{x:0.5}}
      x={175} y={-30}
      style={new PIXI.TextStyle({ fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
        fontSize: 18,
        fill:'#ffffff',
      })}/>
    <Text 
      text={`${skill[enemyRandomSkill].name}`}
      anchor={{x:0.5}}
      x={175} y={10}
      style={new PIXI.TextStyle({ fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
        fontSize: 20,
        fill:['#f15bb5','#e0aaff'],
      })}/>
    <Text 
      text={`ATK / ${skill[enemyRandomSkill].atk}`}
      anchor={{x:0.5}}
      x={175} y={40}
      style={new PIXI.TextStyle({ fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
        fontSize: 18,
        fill:['#f15bb5','#e0aaff'],
      })}/>
  </Container>
};