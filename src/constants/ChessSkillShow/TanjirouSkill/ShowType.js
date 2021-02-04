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
          zIndex={3}
          width={200}
          height={200}
          anchor={0.5}
          image={loader.resources[`${attackerName}-fight-typeA`].data}
          {...props}
        />}
      </Spring>
    case `防禦`:
      return <Spring
        from={{ x:650, y:50 }}
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
          alpha={position.alpha}
          tint={position.tint}
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