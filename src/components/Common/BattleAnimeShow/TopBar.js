import React from 'react';
import { Container, Sprite, Graphics, Text } from '@inlet/react-pixi/animated';
import * as PIXI from "pixi.js";
import { loader } from '../../DataLoader';
export const TopBar = ({
  right={},
  left={},
  showType='',
  targetHp=0,
})=> {
  return <Graphics 
    x={-400}
    y={-300}
    zIndex={98}
    draw={g=> {
      g.beginFill(`0x000f23`);
      g.drawRoundedRect(0,0,800,80,0);
      g.endFill();
    }}
  >
    <Container sortableChildren={true}>
      <Graphics
        x={370}
        y={40}
        draw={g=> {
          g.beginFill(`0x364958`);
          g.drawRoundedRect(-21,-21,42,42,50);
          g.endFill();
        }}
      >
        <Text 
          text={`守`} 
          x={0} y={0}
          anchor={0.5}
          style={new PIXI.TextStyle({ fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
            fontSize: 24,
            fill:'#ffffff',
          })}/>
      </Graphics>
      <Graphics
        x={420}
        y={40}
        draw={g=> {
          g.beginFill(`0xfe7f2d`);
          g.drawRoundedRect(-21,-21,42,42,50);
          g.endFill();
        }}
      >
        <Text 
          text={`攻`} 
          x={0} y={0}
          anchor={0.5}
          style={new PIXI.TextStyle({ fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
            fontSize: 24,
            fill:'#ffffff',
          })}/>
      </Graphics>
      {/* left */}
      <Sprite
        width={50}
        height={50}
        x={50}
        y={15}
        image={loader.resources[`${left.name}-head-default`].data}
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
          g.beginFill(`0x333533`);
          g.drawRoundedRect(0,0,-200,10,0);
          g.endFill();
        }}
      />
      <Graphics
        x={320} y={35}
        zIndex={2}
        draw={g=> {
          g.beginFill(`0xe71d36`);
          g.drawRoundedRect(0,0,-200,10,0);
          g.endFill();
        }}
      />
      {/* right */}
      <Sprite
        width={50}
        height={50}
        x={690}
        y={15}
        image={loader.resources[`${right.name}-head-default`].data}
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
          g.beginFill(`0x333533`);
          g.drawRoundedRect(0,0,-200,10,0);
          g.endFill();
        }}
      />
      <Graphics
        x={670} y={35}
        zIndex={2}
        draw={g=> {
          g.beginFill(`0xe71d36`);
          g.drawRoundedRect(0,0,-200,10,0);
          g.endFill();
        }}
      />
    </Container>
  </Graphics>
};