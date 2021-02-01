import React from "react";
import { TeoniSkill } from "./TeoniSkill/Index";
export const EnemyChessSkillShow = ({
  attacker={},
  skill={},
  BGstatus,
  isHit=false,
  targetLife=0,
  attackerSp=0,
  resultLife=0,
  resultSp=0,
  setBGstatus,
  setAnimeIsDone,
  setTargetHp,
  setAttackerSp,
  setLinesStatus
})=>{
  const defaultprops = {
    skillName: skill.name,
    attackerName: attacker.name,
    isHit: isHit,
    targetLife: targetLife,
    attackerSp: attackerSp,
    resultLife: resultLife,
    resultSp: resultSp,
    BGstatus: BGstatus,
    setBGstatus: setBGstatus,
    setAnimeIsDone: setAnimeIsDone,
    setTargetHp: setTargetHp,
    setAttackerSp: setAttackerSp,
    setLinesStatus: setLinesStatus
  }
  switch (attacker.name) {
    case `Teoni`:
      return <TeoniSkill {...defaultprops}/>
    default:
      return;
  };
};
