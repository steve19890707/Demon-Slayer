import React,{ useState, useEffect } from "react";
import { loader } from '../../components/DataLoader';
import { Spring } from 'react-spring/renderprops';
import { Sprite } from '@inlet/react-pixi/animated';

export const TanjirouSkill = ({
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
          const timeout = setTimeout(() => {
            setPosition(prev=>{return{ ...prev, x:550, y:50, tension:50 }});
          },3000);
          return timeout;
        };
        return start();
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

  // 展示用人物造型:
  switch (skillName) {
    case `斬擊`:
      return <Spring
          from={{ x:550, y:50 }}
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
            width={200}
            height={200}
            anchor={0.5}
            image={loader.resources[`${attackerName}-fight-typeA`].data}
            {...props}
          />}
        </Spring>
    default:
      return <Spring
        from={{ x:550, y:50 }}
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
          width={200}
          height={200}
          anchor={0.5}
          image={loader.resources[`${attackerName}-fight-typeB`].data}
          {...props}
        />}
      </Spring>
  };
};