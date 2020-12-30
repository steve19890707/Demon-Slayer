import React,{ useState, useEffect } from "react";
import { loader } from '../../components/DataLoader';
import { Spring } from 'react-spring/renderprops';
import { Sprite } from '@inlet/react-pixi/animated';

export const TeoniSkill = ({
  skillName,
  attackerName,
  isHit,
  resultLife,
  BGstatus,
  setBGstatus,
  setAnimeIsDone
})=>{
  const [ position, setPosition ] = useState({ 
    x:0, y:0, tint:0xffffff, alpha:1, mass:1, friction:20, tension:170 });
  const steps = ({
    skillName='',
    isHit=false,
    resultLife=0,
    BGstatus={},
    setPosition=null,
    setBGstatus=null,
    setAnimeIsDone=null
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
  // def
  useEffect(()=>{
    if(BGstatus.defence && skillName==='防禦'){
      const timeout = steps({
        skillName:skillName,
        isHit:isHit,
        resultLife:resultLife,
        setAnimeIsDone:setAnimeIsDone,
        setPosition:setPosition,
      });
      return ()=> clearTimeout(timeout);
    };
  },[ BGstatus.defence, skillName, isHit, resultLife, setAnimeIsDone ])
  // atk
  useEffect(()=>{
    if(skillName==='防禦'){ 
      setPosition(prev=>{return{ ...prev, x:-600, y:10 }});
      return;
    };
    const timeout = steps({
      skillName:skillName,
      setBGstatus:setBGstatus,
      setPosition:setPosition,
    });
    return ()=> clearTimeout(timeout);
  },[ skillName, setBGstatus ]);
  switch (skillName) {
    case '防禦':
      return <Spring
        from={{ x:-600, y:10 }}
        to={{ x:position.x, y:position.y }}
        config={{ 
          mass: position.mass,
          tension: position.tension,
          friction: position.friction,
        }}
      >
      {props => 
        <Sprite
          zIndex={2}
          width={300}
          height={300}
          anchor={0.5}
          alpha={position.alpha}
          tint={position.tint}
          image={loader.resources[`${attackerName}-fight`].data}
          {...props}
        />}
      </Spring>
    default:
      return <Spring
        from={{ x:0, y:50 }}
        to={{ x:position.x, y:position.y }}
        config={{ 
          mass:1,
          tension: position.tension,
          friction:20,
        }}
      >
      {props => 
        <Sprite
          zIndex={2}
          width={300}
          height={300}
          anchor={0.5}
          image={loader.resources[`${attackerName}-fight`].data}
          {...props}
        />}
      </Spring>
    
  }
};