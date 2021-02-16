import React,{ useState, useEffect } from 'react';
import * as PIXI from "pixi.js";
import { audioData, loader } from '../../DataLoader';
import { Container, Text, Graphics, Sprite, useTick } from '@inlet/react-pixi/animated';
export const GameStart = ({
  props
})=>{
  const { setRoundStart, setCurrentBGM } = props;
  const [ logoWidth, setLogoWidth ] = useState(200);
  const [ start, setStart ] = useState(false);
  const [ startBtn, setStartBtn ] = useState(false);
  let i = 0;
  useTick(delta=>{
    const add = i += 0.25 * delta;
    if(logoWidth<350){
      setLogoWidth(prev=>{return prev+=Math.floor(add)});
    };
  });
  useEffect(()=>{
    (logoWidth>=350)&&setStartBtn(true);
  },[logoWidth])
  return <Container sortableChildren={true}>
    {!start?<>
      <Graphics
        interactive={true}
        buttonMode={true}
        x={0} y={0}
        zIndex={1}
        draw={g=> {
          g.beginFill(`0x0000`);
          g.drawRoundedRect(0,0,800,600,0);
          g.endFill();
        }}
        pointertap={()=>{
          audioData.open.play();
          setStart(true);
        }}
      />
      <Text
        text={`任意點擊`}
        zIndex={2}
        anchor={0.5}
        x={400}
        y={300}
        style={new PIXI.TextStyle({ fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
          fontSize: 24,
          fill:'#ffffff',
        })}
      />
    </>:<>
      <Sprite
        anchor={0.5}
        x={400}
        y={250}
        width={logoWidth}
        height={logoWidth}
        image={loader.resources[`logo`].data}
      />
      {startBtn&&
        <Sprite
          interactive={true}
          buttonMode={true}
          anchor={0.5}
          x={400}
          y={450}
          width={120}
          height={56}
          image={loader.resources[`startBtn`].data}
          pointertap={()=>{
            audioData.open.fade(1,0,1000)
            setRoundStart(true);
            setCurrentBGM('userRounds');
          }}
        />
      }
    </>
  }
  </Container>
}