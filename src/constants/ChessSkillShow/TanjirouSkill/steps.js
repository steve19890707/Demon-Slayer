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
}) => {
  // 技能動畫:
  switch (skillName) {
    default:
      setPosition(prev=>{return{ ...prev, x:550,y:50,tension:100 }});
      const start = ()=>{
        setPosition(prev=>{return{ ...prev, x:250, y:50, tension:100 }});
        // callback
        return step1();
      };
      const step1 = ()=>{
        const timeout = setTimeout(() => {
          setPosition(prev=>{return{ ...prev, x:0, y:50, tension:100 }});
          setBGstatus({ type:'SKILL', defence:false });
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
          setBGstatus({ type:'STOP', defence:true });
          // callback
          step3();
        },3000);
        return timeout;
      };
      const step3 = ()=>{
        const timeout = setTimeout(() => {
          setPosition(prev=>{return{ ...prev, x:-250, y:50, tension:1000 }});
          // callback
          step4();
        },1000);
        return timeout;
      };
      const step4 = ()=>{
        const run = { number: targetLife };
        TweenMax.to(run, 0.8, {
          number: resultLife,
          onUpdate: () => {
            setTargetHp(numeral(run.number).format("0"))
          },
        });
        const timeout = setTimeout(() => {
          setPosition(prev=>{return{ ...prev, x:550, y:50, tension:50 }});
        },3000);
        return timeout;
      };
      return start();
  }
};