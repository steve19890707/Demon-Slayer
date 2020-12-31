import React from "react";
import { TanjirouSkill } from "./TanjirouSkill/Index";

export const ChessSkillShow = ({
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
    case `Tanjirou`:
      return <TanjirouSkill {...defualtprops}/>
    default:
      return;
  };
};

