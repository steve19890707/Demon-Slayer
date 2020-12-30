import React from "react";
import { TeoniSkill } from "./TeoniSkill";
export const EnemyChessSkillShow = ({
  attacker={},
  skill={},
  BGstatus,
  isHit=false,
  resultLife=0,
  setBGstatus,
  setAnimeIsDone
})=>{
  const defualtprops = {
    skillName: skill.name,
    attackerName: attacker.name,
    isHit: isHit,
    resultLife: resultLife,
    BGstatus: BGstatus,
    setBGstatus: setBGstatus,
    setAnimeIsDone: setAnimeIsDone
  }
  switch (attacker.name) {
    case `Teoni`:
      return <TeoniSkill {...defualtprops}/>
    default:
      return;
  };
};
