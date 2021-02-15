import React,{ useState } from 'react';
import { Container, Sprite, Graphics, Text } from '@inlet/react-pixi/animated';
import { loader } from '../DataLoader';
import * as PIXI from "pixi.js";
import { ProbabilityCount } from "../Common/ProbabilityCount";
import { chessAttackResult, chessMoved } from "../../reducer/chess";
import { enemyChessDefense } from "../../reducer/enemyChess";

export const BattleBoard = ({ props })=>{
  const { 
    battleInfo, setMoveStep, setBattleInfo, setAnimeShow, setCurrentBGM, dispatch
  } = props;
  const [ atkSelectd, setAtkSelectd ] = useState({
    key:0,
  });
  const CreateAttackerInfo = ({ pX=0, pY=0, data })=>{
    return <Container x={pX} y={pY} sortableChildren={true}>
      <Text
        text={'攻'}
        x={220}
        y={0}
        style={new PIXI.TextStyle({ fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
          fontSize: 30,
          fill:['#ffffff', '#00ff99'],
        })}
      />
      <Text
        text={data.cn}
        x={60}
        y={-3}
        style={new PIXI.TextStyle({ fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
          fontSize: 16,
          fill:'#ffffff',
        })}
      />
      <Text
        text={`${data.hp} / ${data.fullValue.hp}`}
        x={60}
        y={17}
        style={new PIXI.TextStyle({ fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
          fontSize: 16,
          fill:'#ff6b6b',
        })}
      />
      <Text
        text={`${data.sp} / ${data.fullValue.sp}`}
        x={60}
        y={34}
        style={new PIXI.TextStyle({ fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
          fontSize: 16,
          fill:'#0466c8',
        })}
      />
      <Sprite
        width={50}
        height={50}
        x={0}
        y={0}
        image={loader.resources[`${data.name}-head-default`].data}
      />
      <Text
        text={`招式選擇：`}
        x={0}
        y={80}
        style={new PIXI.TextStyle({ fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
          fontSize: 16,
          fill:'#ffffff',
        })}
      />
      <Graphics
        x={0}
        y={115}
        zIndex={1}
        draw={g=> {
          g.lineStyle(1,`0xffffff`,1);
          g.beginFill(`0x0f0f1b`);
          g.drawRoundedRect(0,0,240,180,8);
          g.endFill();
        }}
      />
      {data.skill.map((value,key)=>{
        const skillCanUse = data.sp - value.sp >= 0;
        return <React.Fragment key={key}>
          <Text
            zIndex={2}
            interactive={skillCanUse}
            buttonMode={true}
            text={value.name}
            x={20}
            y={130+(key*24)}
            style={new PIXI.TextStyle({ fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
              fontSize: 16,
              fill: ((atkSelectd.key===key)&&skillCanUse) ? ['#ffffff', '#00ff99'] :  
                skillCanUse ? '#ffffff' : '#8d99ae',
              fontWeight: (atkSelectd.key===key) ? 600 : 300
            })}
            pointertap={()=>setAtkSelectd({
              key: key
            })}
          />
        </React.Fragment>
      })}
    </Container>
  };
  const CreateTargetInfo = ({ pX=0, pY=0, data })=>{
    return <Container x={pX} y={pY} sortableChildren={true}>
      <Text
        text={'防'}
        x={0}
        y={0}
        style={new PIXI.TextStyle({ fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
          fontSize: 30,
          fill:['#ffffff', '#ee6c4d'],
        })}
      />
      <Text
        text={data.cn}
        anchor={{x:1,y:0}}
        x={190}
        y={-3}
        style={new PIXI.TextStyle({ fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
          fontSize: 16,
          fill:'#ffffff',
        })}
      />
      <Text
        text={`${data.hp} / ${data.fullValue.hp}`}
        anchor={{x:1,y:0}}
        x={190}
        y={17}
        style={new PIXI.TextStyle({ fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
          fontSize: 16,
          fill:'#ff6b6b',
        })}
      />
      <Text
        text={`${data.sp} / ${data.fullValue.sp}`}
        anchor={{x:1,y:0}}
        x={190}
        y={34}
        style={new PIXI.TextStyle({ fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
          fontSize: 16,
          fill:'#0466c8',
        })}
      />
      <Sprite
        width={50}
        height={50}
        x={200}
        y={0}
        image={loader.resources[`${data.name}-head-default`].data}
      />
    </Container>
  };
  const ForecastInfo = ({ pX, pY, data })=>{
    return <Container x={pX} y={pY} sortableChildren={true}>
      <Graphics
        x={0}
        y={0}
        zIndex={1}
        draw={g=> {
          g.lineStyle(1,`0x00ff99`,1);
          g.beginFill(`0x0f0f1b`);
          g.drawRoundedRect(0,0,265,215,8);
          g.endFill();
        }}
      />
      <Text
        text={`招式：`}
        zIndex={2}
        x={20}
        y={20}
        style={new PIXI.TextStyle({ fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
          fontSize: 20,
          fill:'#ffffff'
        })}
      />
      <Text
        text={`${data.attacker.skill[atkSelectd.key].name}`}
        zIndex={2}
        x={80}
        y={22}
        style={new PIXI.TextStyle({ fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
          fontSize: 16,
          fill:'#00ff99'
        })}
      />
      <Text
        text={`攻擊力：`}
        zIndex={2}
        x={20}
        y={50}
        style={new PIXI.TextStyle({ fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
          fontSize: 20,
          fill:'#ffffff'
        })}
      />
      <Text
        text={`${data.attacker.skill[atkSelectd.key].atk}`}
        zIndex={2}
        x={100}
        y={52}
        style={new PIXI.TextStyle({ fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
          fontSize: 18,
          fill:'#fdc500'
        })}
      />
      <Text
        text={`命中率：`}
        zIndex={2}
        x={20}
        y={80}
        style={new PIXI.TextStyle({ fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
          fontSize: 20,
          fill:'#ffffff'
        })}
      />
      <Text
        text={`${
          100 +
          ((data.attacker.skill[atkSelectd.key].hitfix - data.target.dodge)>=0 ? 0 :
            (data.attacker.skill[atkSelectd.key].hitfix - data.target.dodge))
        }%`}
        zIndex={2}
        x={100}
        y={82}
        style={new PIXI.TextStyle({ fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
          fontSize: 18,
          fill:'#ffffff'
        })}
      />
      <Text
        text={`消耗：`}
        zIndex={2}
        x={20}
        y={110}
        style={new PIXI.TextStyle({ fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
          fontSize: 20,
          fill:'#ffffff'
        })}
      />
      <Text
        text={`${data.attacker.skill[atkSelectd.key].sp}`}
        zIndex={2}
        x={80}
        y={110}
        style={new PIXI.TextStyle({ fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
          fontSize: 18,
          fill:'#0466c8'
        })}
      />
    </Container>
  };
  return <Graphics
    x={400}
    y={300}
    zIndex={99}
    draw={g=> {
      g.lineStyle(1,`0xffffff`,1);
      g.beginFill(`0x22223b`);
      g.drawRoundedRect(-300,-200,600,400,8);
      g.endFill();
    }}
  >
    <CreateAttackerInfo
      pX={-270}
      pY={-180}
      data={battleInfo.attacker}
    />
    <CreateTargetInfo
      pX={20}
      pY={-180}
      data={battleInfo.target}
    />
    <ForecastInfo
      pX={0}
      pY={-100}
      data={battleInfo}
    />
    <Text
      interactive={true}
      buttonMode={true}
      text={'攻擊'}
      anchor={0.5}
      x={180}
      y={160}
      style={new PIXI.TextStyle({
        fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
        fontSize: 20,
        fill:'#ffffff',
      })}
      pointertap={()=>{
        setCurrentBGM('KimetsuNoYaiba');
        const isHit = ProbabilityCount(
          battleInfo.attacker.skill[atkSelectd.key].hitfix,
          battleInfo.target.dodge
        );
        dispatch(chessAttackResult({
          key: battleInfo.attacker.key,
          lessSp: battleInfo.attacker.skill[atkSelectd.key].sp
        }));
        dispatch(chessMoved({
          key: battleInfo.attacker.key,
        }));
        if(isHit){
          dispatch(enemyChessDefense({
            key: battleInfo.target.key,
            damage: battleInfo.attacker.skill[atkSelectd.key].atk
          }));
        };
        setAnimeShow({
          status:true,
          type:'USER',
          isHit: isHit,
          attacker:{ 
            key:battleInfo.attacker.key,
            skill:battleInfo.attacker.skill[atkSelectd.key],
            prevSP:battleInfo.attacker.sp
          },
          target:{ 
            key:battleInfo.target.key,
            isHit:isHit,
            prevLife:battleInfo.target.hp
          }
        });
        setBattleInfo({
          status:false,
          attacker:{ key:'' },
          target:{ key:'' }
        });
      }}
    />
    <Text
      interactive={true}
      buttonMode={true}
      text={'取消'}
      anchor={0.5}
      x={240}
      y={160}
      style={new PIXI.TextStyle({
        fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
        fontSize: 20,
        fill:'#ffffff',
      })}
      pointertap={()=>{
        setMoveStep(true);
        setBattleInfo({
          status:false,
          attacker:{ key:'' },
          target:{ key:'' }
        })
      }}
    />
  </Graphics>
};