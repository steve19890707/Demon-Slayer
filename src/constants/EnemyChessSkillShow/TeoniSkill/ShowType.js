import React from "react";
import { loader } from '../../../components/DataLoader';
import { Spring } from 'react-spring/renderprops';
import { Sprite } from '@inlet/react-pixi/animated';

export const ShowType = ({
  skillName,
  attackerName,
  position,
}) =>{
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
        from={{ x:-600, y:50 }}
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