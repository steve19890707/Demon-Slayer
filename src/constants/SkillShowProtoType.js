import React,{ useState, useEffect } from "react";
export const SkillShowProtoType = ({
  skillName,
  attackerName,
  isHit,
  targetLife,
  attackerSp,
  resultLife,
  resultSp,
  BGstatus,
  setBGstatus,
  setAnimeIsDone,
  setTargetHp,
  setAttackerSp,
  setLinesStatus,
  defXPostion,
  steps,
  ShowType
})=>{
  const [ position, setPosition ] = useState({ x:0, y:0, tint:0xffffff, alpha:1, mass:1, friction:20, tension:170 });
  // def
  useEffect(()=>{
    if(BGstatus.defence && skillName==='防禦'){
      const timeout = steps({
        skillName:skillName,
        isHit:isHit,
        resultLife:resultLife,
        setAnimeIsDone:setAnimeIsDone,
        setLinesStatus:setLinesStatus,
        setPosition:setPosition,
      });
      return ()=> clearTimeout(timeout);
    };
  },[ BGstatus.defence, skillName, isHit, resultLife, setAnimeIsDone, steps, setLinesStatus ])
  // atk
  useEffect(()=>{
    if(skillName==='防禦'){ 
      setPosition(prev=>{return{ ...prev, x: defXPostion, y:10 }});
      return;
    };
    const timeout = steps({
      skillName:skillName,
      targetLife:targetLife,
      attackerSp:attackerSp,
      resultLife:resultLife,
      resultSp:resultSp,
      setBGstatus:setBGstatus,
      setTargetHp:setTargetHp,
      setAttackerSp:setAttackerSp,
      setLinesStatus:setLinesStatus,
      setPosition:setPosition
    });
    return ()=> clearTimeout(timeout);
  },[ skillName, targetLife, attackerSp, resultLife, resultSp,
    setBGstatus, setTargetHp, setAttackerSp, defXPostion, steps, setLinesStatus ]);
  return <ShowType
    skillName={skillName}
    attackerName={attackerName}
    position={position}
  />
};
