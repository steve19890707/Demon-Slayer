import React,{ useState, useEffect } from 'react';
import * as PIXI from "pixi.js";
import { audioData, loader } from '../../DataLoader';
import { Container, Text, Graphics, Sprite, useTick } from '@inlet/react-pixi/animated';
const Logo = ({
  logoWidth=200,
  startBtn,
  setLogoWidth
}) =>{
  let i = 0;
  useTick(delta=>{
    if(!startBtn){
      const add = i += 0.28 * delta;
      setLogoWidth(prev=>{return prev+=Math.floor(add)});
    }else return;
  });
  return <Sprite
    anchor={0.5}
    x={400}
    y={250}
    width={logoWidth}
    height={logoWidth}
    image={loader.resources[`logo`].data}
  />
};
export const GameStart = ({
  props
})=>{
  const { setStageStart, setCurrentBGM } = props;
  const [ logoWidth, setLogoWidth ] = useState(200);
  const [ start, setStart ] = useState(false);
  const [ startBtn, setStartBtn ] = useState(false);
  useEffect(()=>{
    (logoWidth>=350)&&setStartBtn(true);
  },[logoWidth]);
  return <Container sortableChildren={true}>
    {!start?<>
      <Graphics
        interactive={true}
        buttonMode={true}
        x={0} y={0}
        zIndex={1}
        draw={g=> {
          g.clear();
          g.beginFill(0x0000);
          g.drawRoundedRect(0,0,800,600,0);
          g.endFill();
        }}
        pointertap={()=>{
          audioData.open.play();
          setStart(true);
        }}
        alpha={0.5}
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
      <Logo
        logoWidth={logoWidth}
        startBtn={startBtn}
        setLogoWidth={setLogoWidth}
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
            setStageStart(true);
            setCurrentBGM('userRounds');
          }}
        />
      }
    </>
  }
  </Container>
}