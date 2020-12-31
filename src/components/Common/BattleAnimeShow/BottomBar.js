import React from 'react';
import { Graphics } from '@inlet/react-pixi/animated';
export const BottomBar = ()=> {
  return <Graphics 
    x={-400}
    y={150}
    zIndex={98}
    draw={g=> {
      g.beginFill(`0x000f23`);
      g.drawRoundedRect(0,0,800,150,0);
      g.endFill();
    }}
  ></Graphics>
};