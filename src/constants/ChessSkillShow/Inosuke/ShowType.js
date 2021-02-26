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
          width={250}
          height={250}
          anchor={{x:0.5,y:0.6}}
          image={loader.resources[`${attackerName}-fight`].data}
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
          width={250}
          height={250}
          anchor={{x:0.5,y:0.6}}
          alpha={position.alpha}
          tint={position.tint}
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
          zIndex={3}
          width={250}
          height={250}
          anchor={{x:0.5,y:0.6}}
          image={loader.resources[`${attackerName}-fight`].data}
          {...props}
        />}
      </Spring>
    };
};