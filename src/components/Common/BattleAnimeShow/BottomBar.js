import React, { useState } from 'react';
import { Container, Graphics, Sprite, Text } from '@inlet/react-pixi/animated';
import * as PIXI from "pixi.js";
import { loader } from '../../DataLoader';
import { lines } from "../../../constants/lines";
export const BottomBar = ({
  right={},
  left={},
  linesStatus={}
})=> {
  const showCharacter = linesStatus.character==="USER" ? right.name : left.name;
  const randomSize = lines.getIn([showCharacter,linesStatus.status]).size-1;
  const [ random ] = useState(Math.round(Math.random()*randomSize));
  return <Graphics 
    x={-400}
    y={150}
    zIndex={98}
    draw={g=> {
      g.beginFill(`0x000f23`);
      g.drawRoundedRect(0,0,800,150,0);
      g.endFill();
    }}
  >
    <Container sortableChildren={true}>
      <Sprite
        width={100}
        height={100}
        x={50}
        y={25}
        image={loader.resources[`${showCharacter}-talk-${linesStatus.status}`].data}
      />
      <Text 
        text={lines.getIn([showCharacter,linesStatus.status,random])}
        anchor={{x:0,y:0}} 
        x={170} y={60}
        style={new PIXI.TextStyle({ fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
          fontSize: 18,
          fill:'#ffff',
        })}/>
    </Container>
  </Graphics>
};