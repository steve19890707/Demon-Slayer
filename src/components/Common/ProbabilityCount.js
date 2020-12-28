export const ProbabilityCount = (
  attackerHit,
  targetDodge
)=>{
  const basicHit = 100;
  const hitProbability = basicHit + attackerHit - targetDodge;
  const checkRamdom = Math.round(Math.random()*100 + 1);
  if(hitProbability < checkRamdom) {
    return false
  }else return true;
};