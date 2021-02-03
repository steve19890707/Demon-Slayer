import React,{ useState } from 'react';
import { Graphics, Sprite } from '@inlet/react-pixi/animated';
import { loader } from '../../DataLoader';
import { ProbabilityCount } from "../../Common/ProbabilityCount";
// common part
import { EnemyList } from "./EnemyList";
import { ChessList } from "./ChessList";
import { Information } from "./Information";
export const EnemyRoundTab = ({ props })=> {
  const [ defChess, setDefChess ] = useState(0);
  const { enemyRoundTab, chessList, enemyList,
    setEnemyRoundTab, setAnimeShow } = props;
  const enemySkill = enemyList[enemyRoundTab.oder].skill;
  const enemySp = enemyList[enemyRoundTab.oder].sp;
  const getAtkSkill = ()=>{
    const totalSize = enemySkill.length-1;
    const random = Math.round(Math.random()*totalSize);
    const checkSp = (enemySp===0)||(enemySkill[random].sp>enemySp);
    return checkSp ? 0 : random;
  };
  const enemyRandomSkill = getAtkSkill();
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
    <ChessList
      chessList={chessList}
      defChess={defChess}
      setDefChess={setDefChess}
    />
    <Information
      defChess={defChess}
      chessList={chessList}
      atkEnemy={enemyList[enemyRoundTab.oder].skill[enemyRandomSkill]}
    />
    <EnemyList
      oder={enemyRoundTab.oder}
      enemyRandomSkill={enemyRandomSkill}
      enemyList={enemyList}
    />
    <Sprite
      interactive={true}
      buttonMode={true}
      width={90}
      height={42}
      anchor={0.5}
      zIndex={2}
      x={230}
      y={155}
      image={loader.resources[`fightDef`].data}
      pointertap={()=>{
        const isHit = ProbabilityCount(
          enemyList[enemyRoundTab.oder].skill[enemyRandomSkill].hitfix,
          chessList[defChess].dodge
        );
        setEnemyRoundTab(prev=>{return{...prev, status:false}});
        setAnimeShow({
          status:true,
          type:'ENEMY',
          isHit: isHit,
          attacker:{ 
            key: enemyRoundTab.oder,
            skill:enemyList[enemyRoundTab.oder].skill[enemyRandomSkill],
            prevSP:enemyList[enemyRoundTab.oder].sp
          },
          target:{ 
            key: defChess,
            isHit:isHit,
            prevLife:chessList[defChess].hp
          }
        });
      }}
    />
  </Graphics>
};