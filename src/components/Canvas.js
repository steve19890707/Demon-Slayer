import React from 'react';
import { Stage, Sprite } from '@inlet/react-pixi/animated';
import { CreateCheckerboard } from '../components/Checkerboard';
import { useSelector, useDispatch } from 'react-redux';
import { loader } from './DataLoader';
export const Canvas = ()=> {
  const map = useSelector(state=>state.map);
  const chess = useSelector(state=>state.chess);
  const dispatch = useDispatch();
  return <Stage
    width={800}
    height={600}
    options={{
      autoDensity: true, 
      antialias: true,
      backgroundColor:0x01262a
    }}>
    <CreateCheckerboard reduxProps={{ map }}/>
    {chess.map((value,key)=>{
      return <Sprite
        interactive={true}
        buttonMode={true}
        key={key}
        width={40}
        height={40}
        x={value.x*40}
        y={value.y*40}
        alpha={1}
        pointerover={(e)=>{
          e.currentTarget.alpha = 0.5;
          dispatch({ 
            type:'MoveSelect', 
            position:{ x:value.x, y:value.y },
            pmove:value.move
          })
        }}
        pointerout={(e)=>{
          e.currentTarget.alpha = 1;
        }}
        pointertap={()=>console.log(`click`)}
        image={loader.resources[`${value.name}-head-default`].data}
    />})}
  </Stage>
};