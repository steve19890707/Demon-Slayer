import React,{ useState, useEffect } from 'react';
import { Container, Graphics, Sprite } from '@inlet/react-pixi/animated';
import { chessDead, chessRoundRest } from "../../../reducer/chess";
import { enemyChessDead } from "../../../reducer/enemyChess";
import { loader } from '../../DataLoader';
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
  const { target, attacker } = animeShow;
  // CreateContent
  const CreateContent = ()=>{
    const [ BGstatus, setBGstatus ] = useState({ 
      type:'STANDBY',
      defence: false
    });
    const [ BGprop, setBGpops ] = useState({ toX:400, duration: 20000 });
    const [ SkBGprop, setSkBGpops ] = useState({ toX:400, duration: 500 });
    const [ targetHp, setTargetHp ] = useState(target.prevLife);
    const [ attackerSp, setAttackerSp ] = useState(attacker.prevSP);
    const [ animeIsDone, setAnimeIsDone ] = useState(false);
    const [ linesStatus, setLinesStatus ] = useState({ 
      character: animeShow.type,
      status:'default'
    });
    const fetchChessType = ( type='' )=>{
      switch (type) {
        case 'CHESS':
          if(animeShow.type==="USER"){
            return chess[typeof(animeShow.attacker.key)!=='number'?0:animeShow.attacker.key];
          }else return chess[typeof(animeShow.target.key)!=='number'?0:animeShow.target.key];
        case 'ENEMYCHESS':
          if(animeShow.type==="USER"){
            return enemyChess[typeof(animeShow.target.key)!=='number'?0:animeShow.target.key];
          }else return enemyChess[typeof(animeShow.attacker.key)!=='number'?0:animeShow.attacker.key];
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
      }else if(animeShow.type==="ENEMY" &&
        chess[target.key].hp <= 0
      ){
        dispatch(chessDead({ key:target.key }));
        setUsualTip({
          title:`${chess[target.key].cn} 戰敗`,
          status:true,
        });
      }else {
        setMoveStep(true);
      };
      if(animeShow.type==="ENEMY"){
        dispatch(chessRoundRest());
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
        attackerSp={attackerSp}
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
        targetLife={target.prevLife}
        attackerSp={attacker.prevSP}
        resultLife={
          target.prevLife -
          animeShow.attacker.skill.atk 
        }
        resultSp={
          attacker.prevSP -
          animeShow.attacker.skill.sp
        }
        setBGstatus={setBGstatus}
        setAnimeIsDone={setAnimeIsDone}
        setTargetHp={setTargetHp}
        setAttackerSp={setAttackerSp}
        setLinesStatus={setLinesStatus}
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
        targetLife={target.prevLife}
        attackerSp={attacker.prevSP}
        resultLife={
          target.prevLife -
          animeShow.attacker.skill.atk 
        }
        resultSp={
          attacker.prevSP -
          animeShow.attacker.skill.sp
        }
        setBGstatus={setBGstatus}
        setAnimeIsDone={setAnimeIsDone}
        setTargetHp={setTargetHp}
        setAttackerSp={setAttackerSp}
        setLinesStatus={setLinesStatus}
      />
      <BottomBar
        right={chess[typeof(animeShow.attacker.key)!=='number'?0:animeShow.attacker.key]}
        left={enemyChess[typeof(animeShow.target.key)!=='number'?0:animeShow.target.key]}
        linesStatus={linesStatus}
      />
      <Sprite
        zIndex={99}
        interactive={true}
        buttonMode={true}
        width={75}
        height={35}
        x={310}
        y={240}
        image={loader.resources[`fightOff`].data}
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
          }else if(animeShow.type==="ENEMY" &&
            chess[target.key].hp <= 0
          ){
            dispatch(chessDead({ key:target.key }));
            setUsualTip({
              title:`${chess[target.key].cn} 戰敗`,
              status:true,
            });
          }else {
            setMoveStep(true);
          };
          if(animeShow.type==="ENEMY"){
            dispatch(chessRoundRest());
          };
          const clearAllTimeouts = ()=>{
            let id = window.setTimeout(null,0);
            while (id--) { window.clearTimeout(id); };
          };
          clearAllTimeouts();
        }}
      />
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