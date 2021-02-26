import React from "react";
import { TeoniSkill } from "./Teoni/Index";
import { HakujiSkill } from "./Hakuji/Index";
import { NomanooniSkill } from "./Nomanooni/Index";
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
  setLinesStatus,
  setShowSkill
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
    setLinesStatus: setLinesStatus,
    setShowSkill: setShowSkill
  }
  switch (attacker.name) {
    case `Teoni`:
      return <TeoniSkill {...defaultprops}/>
    case `Hakuji`:
      return <HakujiSkill {...defaultprops}/>
    case `Nomanooni`:
    case `Nomanooni-2`:
    case `Nomanooni-3`:
      return <NomanooniSkill {...defaultprops}/>
    default:
      return;
  };
};
