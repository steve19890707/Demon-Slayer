import React,{ useState, useEffect } from "react";
import { loader } from '../components/DataLoader';
import { Spring } from 'react-spring/renderprops';
import { Sprite } from '@inlet/react-pixi/animated';

export const ChessSkillShow = ({
  attacker={},
  skill={},
  setBGstatus
})=>{
  switch (attacker.name) {
    case `Tanjirou`:
      return <TanjirouSkill
        skillName={skill.name}
        attackerName={attacker.name}
        setBGstatus={setBGstatus}
      />
    default:
      return;
  };
};
// Tanjirou
const TanjirouSkill = ({
  skillName,
  attackerName,
  setBGstatus
})=>{
  const [ position, setPosition ] = useState({ x:0, y:0, tension:170 });
  const steps = (
    skillName,
    setPosition,
    setBGstatus
  ) => {
    switch (skillName) {
      default:
        setPosition({ x:550,y:50,tension:100 });
        const start = ()=>{
          const timeout = setTimeout(() => {
            setPosition({ x:250, y:50, tension:100 });
            // callback
            step1();
          },2000);
          return ()=> clearTimeout(timeout);
        };
        const step1 = ()=>{
          const timeout = setTimeout(() => {
            setPosition({ x:0, y:50, tension:100 });
            setBGstatus({ type:'SKILL' });
            // callback
            step2();
          },3000);
          return ()=> clearTimeout(timeout);
        };
        const step2 = ()=>{
          const timeout = setTimeout(() => {
            setPosition({ x:-250, y:50, tension:1000 });
            setBGstatus({ type:'STANDBY' });
            // callback
            step3();
          },3000);
          return ()=> clearTimeout(timeout);
        };
        const step3 = ()=>{
          const timeout = setTimeout(() => {
            setPosition({ x:550,y:50, tension:50 });
          },3000);
          return ()=> clearTimeout(timeout);
        };
        start();
        break;
    }
  };
  useEffect(()=>{
    steps(skillName,setPosition,setBGstatus);
  },[ skillName, setBGstatus ]);
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
            image={loader.resources[`${attackerName}-fight`].data}
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
          image={loader.resources[`${attackerName}-fight`].data}
          {...props}
        />}
      </Spring>
  };
};
