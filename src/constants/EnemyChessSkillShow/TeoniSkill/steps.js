export const steps = ({
  skillName='',
  isHit=false,
  targetLife=0,
  resultLife=0,
  BGstatus={},
  setBGstatus=null,
  setAnimeIsDone=null,
  setTargetHp=null,
  setPosition=null,
}) => {
  switch (skillName) {
    case '防禦':
      setPosition(prev=>{return{ ...prev, x:-200, tension:150 }});
      const start = ()=>{
        if(isHit){
          return isHitStep();
        }else return isDodge();
      };
      const isHitStep = ()=> {
        const timeout = setTimeout(() => {
          setPosition(prev=>{return{ ...prev, x:-235, y:20, mass:2, 
            friction:5, tension:1000, tint:0xd00000}});
          // callback
          if(resultLife<=0){
            return isDead();
          }else return next();
        },1200);
        return timeout;
      }
      const isDodge = ()=>{
        const timeout = setTimeout(() => {
          setPosition(prev=>{return{ ...prev, x:-235, y:-10 }});
          // callback
          next();
        },1200);
        return timeout;
      };
      const isDead = ()=> {
        const timeout = setTimeout(() => {
          setPosition(prev=>{return{ ...prev, x:-200, y:10, 
            friction:2, tint:0x03071e
          }});
          // callback
          isDeadStep2();
        },5000);
        return timeout;
      };
      const isDeadStep2 = ()=>{
        const timeout = setTimeout(() => {
          setPosition(prev=>{return { ...prev, alpha:0 }});
          // callback
          end();
        },3000);
        return timeout;
      }
      const next = ()=>{
        const timeout = setTimeout(() => {
          setPosition(prev=>{return{ ...prev, x:-200, y:10, mass:1, 
            friction:20, tension:170, tint:0xffffff}});
          // callback
          end();
        },5000);
        return timeout;
      }
      const end = ()=> {
        const timeout = setTimeout(() => {
          // callback
          setAnimeIsDone(true);
        },3000);
        return timeout;
      };
      return start();
    default:
      break;
  }
};