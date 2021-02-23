import React from "react";
// part
import { SkillShowProtoType } from "../../SkillShowProtoType";
import { steps } from "./steps";
import { ShowType } from "./ShowType";

export const ZenitsuSkill = ( props )=>{
  return <SkillShowProtoType 
    {...props}
    defXPostion={550}
    steps={steps}
    ShowType={ShowType}
  />
};