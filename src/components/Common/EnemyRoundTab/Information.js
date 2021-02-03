import React from 'react';
import { Container, Graphics, Text } from '@inlet/react-pixi/animated';
import * as PIXI from "pixi.js";

export const Information = ({
  defChess, chessList, atkEnemy
})=>{
  return <Container sortableChildren={true}>
    <Graphics
      x={-125} y={-150}
    >
      <Text 
        text={`選擇防禦：${chessList[defChess].cn}`}
        anchor={{x:0}}
        style={new PIXI.TextStyle({ fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
          fontSize: 18,
          fill:'#ffffff',
        })}/>
      <Text 
        text={`HP：${chessList[defChess].hp}`}
        anchor={{x:0}}
        y={30}
        style={new PIXI.TextStyle({ fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
          fontSize: 18,
          fill:'#ff6b6b',
        })}/>
      <Text 
        text={`迴避率：${chessList[defChess].dodge - atkEnemy.hitfix}%`}
        anchor={{x:0}}
        y={60}
        style={new PIXI.TextStyle({ fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
          fontSize: 18,
          fill:['#ffffff', '#4cc9f0'],
        })}/>
    </Graphics>
  </Container>
}