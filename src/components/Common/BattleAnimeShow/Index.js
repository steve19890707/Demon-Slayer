import React,{ useState, useEffect } from 'react';
import { Container, Graphics, Text } from '@inlet/react-pixi/animated';
import * as PIXI from "pixi.js";
import { enemyChessDead } from "../../../reducer/enemyChess";
// part
import { AnimeShowBG } from "./AinmeShowBG";
import { TopBar } from "./TopBar";
import { BottomBar } from "./BottomBar";
// skill
import { ChessSkillShow } from "../../../constants/ChessSkillShow/Index";
import { EnemyChessSkillShow } from "../../../constants/EnemyChessSkillShow/Index";

export const BattleAnimeShow = ({
  props
}) =>{
  const { stageStatus, animeShow, chess, enemyChess, 
    setMoveStep, setAnimeShow, setUsualTip, dispatch } = props;
  const { target } = animeShow;
  // CreateContent
  const CreateContent = ()=>{
    const [ BGstatus, setBGstatus ] = useState({ 
      type:'STANDBY',
      defence: false
    });
    const [ BGprop, setBGpops ] = useState({ toX:400, duration: 20000 });
    const [ SkBGprop, setSkBGpops ] = useState({ toX:400, duration: 500 });
    const [ targetHp, setTargetHp ] = useState(target.prevLife);
    const [ animeIsDone, setAnimeIsDone ] = useState(false);
    const fetchChessType = ( type='' )=>{
      switch (type) {
        case 'CHESS':
          if(animeShow.type==="USER"){
            return chess[typeof(animeShow.attacker.key)!=='number'?0:animeShow.attacker.key];
          }else return enemyChess[typeof(animeShow.target.key)!=='number'?0:animeShow.target.key];
        case 'ENEMYCHESS':
          if(animeShow.type==="USER"){
            return enemyChess[typeof(animeShow.target.key)!=='number'?0:animeShow.target.key];
          }else return chess[typeof(animeShow.attacker.key)!=='number'?0:animeShow.attacker.key];
        default:
          break;
      }; 
    };
    //  關閉動畫判斷
    useEffect(()=>{
      if(!animeIsDone){ return };
      setAnimeShow({
        status:false,
        type:'',
        isHit:false,
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
    },[ animeIsDone ]);
    return <Container sortableChildren={true}>
      <AnimeShowBG
        props={{stageStatus, BGstatus, BGprop, SkBGprop, setBGpops, setSkBGpops}}
      />
      <TopBar
        right={chess[typeof(animeShow.attacker.key)!=='number'?0:animeShow.attacker.key]}
        left={enemyChess[typeof(animeShow.target.key)!=='number'?0:animeShow.target.key]}
        showType={animeShow.type}
        targetHp={targetHp}
      />
      <ChessSkillShow
        attacker={fetchChessType('CHESS')}
        skill={
          animeShow.type==="USER"?
          animeShow.attacker.skill:
          { name:'防禦' }
        }
        BGstatus={BGstatus}
        isHit={animeShow.isHit}
        resultLife={
          target.prevLife -
          animeShow.attacker.skill.atk 
        }
        setBGstatus={setBGstatus}
        setAnimeIsDone={setAnimeIsDone}
        setTargetHp={setTargetHp}
      />
      <EnemyChessSkillShow
        attacker={fetchChessType('ENEMYCHESS')}
        skill={
          animeShow.type==="USER"?
          { name:'防禦' }:
          animeShow.attacker.skill
        }
        BGstatus={BGstatus}
        isHit={animeShow.isHit}
        resultLife={
          target.prevLife -
          animeShow.attacker.skill.atk 
        }
        setBGstatus={setBGstatus}
        setAnimeIsDone={setAnimeIsDone}
        setTargetHp={setTargetHp}
      />
      <BottomBar/>
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
            isHit:false,
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