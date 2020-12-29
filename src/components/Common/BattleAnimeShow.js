import React,{ useState } from 'react';
import { Container, Sprite, Graphics, Text } from '@inlet/react-pixi/animated';
import { loader } from '../DataLoader';
import * as PIXI from "pixi.js";
import { Spring } from 'react-spring/renderprops';
import { enemyChessDead } from "../../reducer/enemyChess";
// skill
import { ChessSkillShow } from "../../constants/ChessSkillShow";

export const BattleAnimeShow = ({
  props
}) =>{
  const { stageStatus, animeShow, chess, enemyChess, 
    setMoveStep, setAnimeShow, setUsualTip, dispatch } = props;
  const { target } = animeShow;
  const [ targetHp, setTargetHp ] = useState(animeShow.target.prevLife);
  // TopBar
  const TopBar = ({
    attacker={},
    target={},
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
        {/* target */}
        <Sprite
          width={50}
          height={50}
          x={50}
          y={15}
          image={loader.resources[`${target.name}-head-default`].data}
        />
        <Text 
          text={`${targetHp} / ${target.fullValue.hp}`}
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
        {/* attacker */}
        <Sprite
          width={50}
          height={50}
          x={690}
          y={15}
          image={loader.resources[`${attacker.name}-head-default`].data}
        />
        <Text 
          text={`${attacker.hp} / ${attacker.fullValue.hp}`}
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
  // Bottombar
  const Bottombar = ()=> {
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
  // CreateContent
  const CreateContent = ()=>{
    const [ BGstatus, setBGstatus ] = useState({ type:'STANDBY' });
    const [ BGprop, setBGpops ] = useState({ toX:400, duration: 20000 });
    const [ SkBGprop, setSkBGpops ] = useState({ toX:400, duration: 500 });
    return <Container sortableChildren={true}>
      {BGstatus.type==='STANDBY'&&<Spring
        from={{ x:-400, y:-100 }}
        to={{ x: BGprop.toX, y:-100 }}
        config={{ duration: BGprop.duration }}
        onRest={()=>{
          if(BGprop.toX===-400){
            setBGpops({
              toX:400,
              duration: 20000
            });
          }else {
            setBGpops({
              toX:-400,
              duration:-1000
            });
          };
        }}
      >
        {props => 
          <Sprite
            zIndex={1}
            width={1600}
            height={500}
            anchor={0.5}
            image={loader.resources[`${stageStatus}-BG`].data}
            {...props}
        />}
      </Spring>}
      {BGstatus.type==='SKILL'&&<Spring
        from={{ x:-400, y:-100 }}
        to={{ x: SkBGprop.toX, y:-100 }}
        config={{ duration: SkBGprop.duration }}
        onRest={()=>{
          if(SkBGprop.toX===-400){
            setSkBGpops({
              toX:400,
              duration: 500
            });
          }else {
            setSkBGpops({
              toX:-400,
              duration:-1000
            });
          };
        }}
      >
        {props => 
          <Sprite
            zIndex={1}
            width={1600}
            height={500}
            anchor={0.5}
            image={loader.resources[`${stageStatus}-BG`].data}
            {...props}
        />}
      </Spring>}
      {animeShow.type==="USER"?
        <TopBar
          attacker={chess[typeof(animeShow.attacker.key)!=='number'?0:animeShow.attacker.key]}
          target={enemyChess[typeof(animeShow.target.key)!=='number'?0:animeShow.target.key]}
        />:
        <TopBar
          attacker={enemyChess[typeof(animeShow.target.key)!=='number'?0:animeShow.target.key]}
          target={chess[typeof(animeShow.attacker.key)!=='number'?0:animeShow.attacker.key]}
        />
      }
      <ChessSkillShow
        attacker={chess[typeof(animeShow.attacker.key)!=='number'?0:animeShow.attacker.key]}
        skill={animeShow.attacker.skill}
        setBGstatus={setBGstatus}
      />
      <Bottombar/>
      <Graphics
        zIndex={99}
        interactive={true}
        buttonMode={true}
        x={315}
        y={255}
        draw={g=> {
          g.beginFill(`0x586f7c`);
          g.drawRoundedRect(-6,-3,75,30,6);
          g.endFill();
        }}
        pointertap={()=>{
          setAnimeShow({
            status:false,
            type:'',
            attacker:{ key:'', skill:{}, prevSP:0 },
            target:{ key:'', isHit:false, prevLife:0 }
          });
          // result check line
          if(animeShow.type==="USER" &&
            enemyChess[target.key].hp <= 0
          ){
            dispatch(enemyChessDead({ key:target.key }));
            setUsualTip({
              title:`已擊敗 ${enemyChess[target.key].cn}!`,
              status:true,
            });
          }else {
            setMoveStep(true);
          };
        }}
      >
        <Text text={`戰鬥 off`} x={0} y={0}
          style={new PIXI.TextStyle({ fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
            fontSize: 18,
            fill:'#c0fdff',
          })}
        />
      </Graphics>
    </Container>
  };
  return <Graphics
    x={400}
    y={300}
    zIndex={99}
    draw={g=> {
      g.beginFill(`0x011627`);
      g.drawRoundedRect(-400,-300,800,600,0);
      g.endFill();
    }}
  >
    <CreateContent/>
  </Graphics>
};