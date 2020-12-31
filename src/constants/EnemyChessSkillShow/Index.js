import React from "react";
import { TeoniSkill } from "./TeoniSkill/Index";
export const EnemyChessSkillShow = ({
  attacker={},
  skill={},
  BGstatus,
  isHit=false,
  resultLife=0,
  setBGstatus,
  setAnimeIsDone,
  setTargetHp
})=>{
  const defualtprops = {
    skillName: skill.name,
    attackerName: attacker.name,
    isHit: isHit,
    resultLife: resultLife,
    BGstatus: BGstatus,
    setBGstatus: setBGstatus,
    setAnimeIsDone: setAnimeIsDone,
    setTargetHp: setTargetHp
  }
  switch (attacker.name) {
    case `Teoni`:
      return <TeoniSkill {...defualtprops}/>
    default:
      return;
  };
};
