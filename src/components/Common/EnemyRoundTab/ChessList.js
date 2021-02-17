import React from 'react';
import { Container, Graphics, Sprite } from '@inlet/react-pixi/animated';
import { loader } from '../../DataLoader';
export const ChessList = ({
  chessList,
  defChess,
  setDefChess
})=>{
  return <Container sortableChildren={true}>
    <Graphics
      x={-250}
      y={-180}
      zIndex={1}
      draw={g=> {
        g.clear();
        g.lineStyle(1,`0xffffff`,1);
        g.beginFill(`0x0f0f1b`);
        g.drawRoundedRect(0,0,100,360,8);
        g.endFill();
      }}
    />
    {chessList.map((v,k)=>{
      const distance = k * 85;
      return <React.Fragment key={k}>
        <Sprite
          interactive={true}
          buttonMode={true}
          width={65}
          height={65}
          anchor={0.5}
          zIndex={2}
          x={-200}
          y={-125 + distance}
          image={loader.resources[`${v.name}-head-default`].data}
          pointertap={()=>setDefChess(k)}
        />
        {k===defChess&&<Graphics
          anchor={0.5}
          x={-200}
          y={-125 + distance}
          zIndex={1}
          draw={g=> {
            g.clear();
            g.beginFill(`0x7b2cbf`);
            g.drawRoundedRect(-38,-38,76,76,5);
            g.endFill();
          }}
        />}
      </React.Fragment>
    })}
  </Container>
};