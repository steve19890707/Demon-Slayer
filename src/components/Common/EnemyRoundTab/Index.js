import React,{ useState } from 'react';
import { Graphics, Text } from '@inlet/react-pixi/animated';
// common part
import { EnemyList } from "./EnemyList";
import { ChessList } from "./ChessList";
export const EnemyRoundTab = ({ props })=> {
  const [ defChess, setDefChess ] = useState(0);
  const { enemyRoundTab, chessList, enemyList } = props;
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
    <EnemyList
      oder={enemyRoundTab.oder}
      enemyRandomSkill={enemyRandomSkill}
      enemyList={enemyList}
    />
  </Graphics>
};