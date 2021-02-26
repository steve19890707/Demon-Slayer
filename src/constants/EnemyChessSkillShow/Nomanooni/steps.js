import { TweenMax } from 'gsap';
import numeral from "numeral";
export const steps = ({
  skillName='',
  isHit=false,
  targetLife=0,
  attackerSp=0,
  resultLife=0,
  resultSp=0,
  BGstatus={},
  setBGstatus=null,
  setAnimeIsDone=null,
  setTargetHp=null,
  setAttackerSp=null,
  setLinesStatus=null,
  setPosition=null,
  setShowSkill=null
}) => {
  switch (skillName) {
    case '防禦':
      setPosition(prev=>{return{ ...prev, x:-200, tension:150 }});
      const defStart = ()=>{
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
            return isDead({ type:'dead' });
          }else return next({ type:'def' });
        },BGstatus.seconds);
        return timeout;
      }
      const isDodge = ()=>{
        const timeout = setTimeout(() => {
          setPosition(prev=>{return{ ...prev, x:-235, y:-10 }});
          // callback
          next({ type:'dodge' });
        },BGstatus.seconds);
        return timeout;
      };
      const isDead = ({ type })=> {
        const timeout = setTimeout(() => {
          setPosition(prev=>{return{ ...prev, x:-200, y:10, 
            friction:2, tint:0x03071e
          }});
          setLinesStatus(prev=>{ 
            return { 
              status: type,
              character: prev.character==="USER" ? "ENEMY" : "USER"
            };
          });
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
      };
      const next = ({ type })=>{
        const timeout = setTimeout(() => {
          setPosition(prev=>{return{ ...prev, x:-200, y:10, mass:1, 
            friction:20, tension:170, tint:0xffffff}});
          setLinesStatus(prev=>{ 
            return { 
              status: type,
              character: prev.character==="USER" ? "ENEMY" : "USER"
            };
          });
          // callback
          end();
        },5000);
        return timeout;
      };
      const end = ()=> {
        const timeout = setTimeout(() => {
          // callback
          setAnimeIsDone(true);
        },3000);
        return timeout;
      };
      return defStart();
    // ATK
    default:
      setBGstatus({ type:'ENEMYSTANDBY', defence:false, seconds:1200 });
      setPosition(prev=>{return{ ...prev, x:-600, y:40, tension:100 }});
      const atkStart = ()=>{
        setPosition(prev=>{
          return{ ...prev, x:-200, tension:100 }});
        // callback
        return step1();
      };
      const step1 = ()=>{
        const timeout = setTimeout(() => {
          setPosition(prev=>{return{ ...prev, x:0, tension:100 }});
          setBGstatus(prev=>{return{ ...prev, type:'ENEMYSKILL' }});
          // callback
          step2();
        },3000);
        return timeout;
      };
      const step2 = ()=>{
        const run =  { number: attackerSp };
        TweenMax.to(run, 0.8, {
          number: resultSp,
          onUpdate: () => {
            setAttackerSp(numeral(run.number).format("0"))
          },
        });
        setLinesStatus(prev=>{ return { ...prev, status:'attack' }});
        const timeout = setTimeout(() => {
          setBGstatus(prev=>{return{ ...prev, type:'STOP', defence:true }});
          // callback
          step3();
        },3000);
        return timeout;
      };
      const step3 = ()=>{
        const timeout = setTimeout(() => {
          setPosition(prev=>{return{ ...prev, x:175, tension:1000 }});
          // callback
          step4();
        },1000);
        return timeout;
      };
      const step4 = ()=>{
        const run = { number: targetLife };
        if(isHit) {
          TweenMax.to(run, 0.8, {
            number: resultLife<0 ? 0 : resultLife,
            onUpdate: () => {
              setTargetHp(numeral(run.number).format("0"))
            },
          });
        };
        const timeout = setTimeout(() => {
          setPosition(prev=>{return{ ...prev, x:-600, tension:50 }});
        },3000);
        return timeout;
      };
      return atkStart();
  }
};