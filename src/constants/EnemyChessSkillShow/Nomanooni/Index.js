import React from "react";
// part
import { SkillShowProtoType } from "../../SkillShowProtoType";
import { steps } from "./steps";
import { ShowType } from "./ShowType";

export const NomanooniSkill = ( props )=>{
  return <SkillShowProtoType 
    {...props}
    defXPostion={-600}
    steps={steps}
    ShowType={ShowType}
  />
};
