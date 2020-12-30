import React from "react";
import { TanjirouSkill } from "./TanjirouSkill";

export const ChessSkillShow = ({
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
    case `Tanjirou`:
      return <TanjirouSkill {...defualtprops}/>
    default:
      return;
  };
};

