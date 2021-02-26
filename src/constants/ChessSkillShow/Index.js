import React from "react";
import { TanjirouSkill } from "./Tanjirou/Index";
import { NezukoSkill } from "./Nezuko/Index";
import { ZenitsuSkill } from "./Zenitsu/Index";
import { InosukeSkill } from "./Inosuke/Index"
import { RengokuSkill } from "./Rengoku/Index";
export const ChessSkillShow = ({
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
    case `Tanjirou`:
      return <TanjirouSkill {...defaultprops}/>
    case `Nezuko`:
      return <NezukoSkill {...defaultprops}/>
    case `Zenitsu`:
      return <ZenitsuSkill {...defaultprops}/>
    case `Inosuke`:
      return <InosukeSkill {...defaultprops}/>
    case `Rengoku`:
      return <RengokuSkill {...defaultprops}/>
    default:
      return;
  };
};

