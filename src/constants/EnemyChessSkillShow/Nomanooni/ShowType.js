import React from "react";
import { loader } from '../../../components/DataLoader';
import { Spring } from 'react-spring/renderprops';
import { Sprite } from '@inlet/react-pixi/animated';

export const ShowType = ({
  skillName,
  attackerName,
  position,
}) =>{
  const filterCopyChessName = (name)=>{
    if(!!~name.indexOf('Nomanooni')){
      return 'Nomanooni';
    }else return name;
  };
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
          width={280}
          height={280}
          anchor={0.5}
          alpha={position.alpha}
          tint={position.tint}
          image={loader.resources[`${filterCopyChessName(attackerName)}-fight`].data}
          {...props}
        />}
      </Spring>
    default:
      return <Spring
        from={{ x:-600, y:25 }}
        to={{ x:position.x, y:position.y }}
        config={{ 
          mass:1,
          tension: position.tension,
          friction:20,
        }}
      >
      {props => 
        <Sprite
          zIndex={3}
          width={280}
          height={280}
          anchor={0.5}
          image={loader.resources[`${filterCopyChessName(attackerName)}-fight`].data}
          {...props}
        />}
      </Spring>
  }
};