import React from 'react';
import { Container, Sprite, Graphics, Text } from '@inlet/react-pixi/animated';
import * as PIXI from "pixi.js";
import { loader } from '../../DataLoader';
export const TopBar = ({
  right={},
  left={},
  showType='',
  targetHp=0,
  attackerSp=0
})=> {
  const hpBarCount = (hp,full)=>{
    const leftVal =  Number(full) - Number(hp);
    const percentage = Number(full) / 200;
    const result = leftVal / percentage;
    return result;
  };
  const spBarCount = (sp,full)=>{
    const leftVal =  Number(full) - Number(sp);
    const percentage = Number(full) / 100;
    const result = leftVal / percentage;
    return result;
  };
  const filterCopyChessName = (name)=>{
    if(!!~name.indexOf('Nomanooni')){
      return 'Nomanooni';
    }else return name;
  };
  return <Graphics 
    x={-400}
    y={-300}
    zIndex={98}
    draw={g=> {
      g.clear();
      g.beginFill(`0x000f23`);
      g.drawRoundedRect(0,0,800,80,0);
      g.endFill();
    }}
  >
    <Container sortableChildren={true}>
      <Sprite
        width={42}
        height={42}
        x={370}
        y={40}
        anchor={0.5} 
        image={loader.resources[`${showType==="USER" ? 'defIcon' : 'atkIcon' }`].data}
      />
      <Sprite
        width={42}
        height={42}
        x={420}
        y={40}
        anchor={0.5} 
        image={loader.resources[`${showType==="USER" ? 'atkIcon' : 'defIcon' }`].data}
      />
      {/* left */}
      <Sprite
        width={50}
        height={50}
        x={50}
        y={15}
        image={loader.resources[`${filterCopyChessName(left.name)}-head-default`].data}
      />
      <Text 
        text={`${showType==="USER"?targetHp:left.hp} / ${left.fullValue.hp}`}
        anchor={{x:1,y:0}} 
        x={320} y={10}
        style={new PIXI.TextStyle({ fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
          fontSize: 18,
          fill:'#e71d36',
        })}/>
      <Graphics
        x={320} y={35}
        zIndex={1}
        draw={g=> {
          g.clear();
          g.beginFill(`0xe71d36`);
          g.drawRoundedRect(0,0,-200,10,0);
          g.endFill();
        }}
      />
      <Graphics
        x={320} y={35}
        zIndex={2}
        draw={g=> {
          g.clear();
          g.beginFill(`0x333533`);
          g.drawRoundedRect(-200,0,hpBarCount(showType==="USER"?targetHp:left.hp,left.fullValue.hp),10,0);
          g.endFill();
        }}
      />
      <Text 
        text={`${showType==="USER"? left.sp : attackerSp} / ${left.fullValue.sp}`}
        anchor={{x:1,y:0.3}} 
        x={210} y={55}
        style={new PIXI.TextStyle({ fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
          fontSize: 18,
          fill:'#4A86E8',
        })}/>
      <Graphics
        x={320} y={55}
        zIndex={1}
        draw={g=> {
          g.clear();
          g.beginFill(`0x4A86E8`);
          g.drawRoundedRect(0,0,-100,10,0);
          g.endFill();
        }}
      />
      <Graphics
        x={220} y={55}
        zIndex={2}
        draw={g=> {
          g.clear();
          g.beginFill(`0x333533`);
          g.drawRoundedRect(0,0,spBarCount(showType==="USER"?left.sp:attackerSp,left.fullValue.sp),10,0);
          g.endFill();
        }}
      />
      {/* right */}
      <Sprite
        width={50}
        height={50}
        x={690}
        y={15}
        image={loader.resources[`${filterCopyChessName(right.name)}-head-default`].data}
      />
      <Text 
        text={`${showType==="USER"?right.hp:targetHp} / ${right.fullValue.hp}`}
        anchor={{x:1,y:0}} 
        x={670} y={10}
        style={new PIXI.TextStyle({ fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
          fontSize: 18,
          fill:'#e71d36',
        })}/>
      <Graphics
        x={670} y={35}
        zIndex={1}
        draw={g=> {
          g.clear();
          g.beginFill(`0xe71d36`);
          g.drawRoundedRect(0,0,-200,10,0);
          g.endFill();
        }}
      />
      <Graphics
        x={670} y={35}
        zIndex={2}
        draw={g=> {
          g.clear();
          g.beginFill(`0x333533`);
          g.drawRoundedRect(-200,0,hpBarCount(showType==="USER"?right.hp:targetHp,right.fullValue.hp),10,0);
          g.endFill();
        }}
      />
      <Text 
        text={`${showType==="USER"? attackerSp : right.sp} / ${right.fullValue.sp}`}
        anchor={{x:1,y:0.3}} 
        x={560} y={55}
        style={new PIXI.TextStyle({ fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
          fontSize: 18,
          fill:'#4A86E8',
        })}/>
      <Graphics
        x={670} y={55}
        zIndex={1}
        draw={g=> {
          g.clear();
          g.beginFill(`0x4A86E8`);
          g.drawRoundedRect(0,0,-100,10,0);
          g.endFill();
        }}
      />
      <Graphics
        x={570} y={55}
        zIndex={2}
        draw={g=> {
          g.clear();
          g.beginFill(`0x333533`);
          g.drawRoundedRect(0,0,spBarCount(showType==="USER"?attackerSp:right.sp,right.fullValue.sp),10,0);
          g.endFill();
        }}
      />
    </Container>
  </Graphics>
};