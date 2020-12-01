import React from 'react';
import { Stage, Sprite } from '@inlet/react-pixi/animated';
import { CreateCheckerboard } from '../components/Checkerboard';
import { useSelector, useDispatch } from 'react-redux';
import { MoveSelect } from '../components/reducer/map';
import { loader } from './DataLoader';
export const Canvas = ()=> {
  const chessMap = useSelector(state=>state.chessMap);
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
    <CreateCheckerboard reduxProps={{ chessMap }}/>
    {chess.map((value,key)=>{
      return <Sprite
        interactive={true}
        buttonMode={true}
        key={key}
        width={40}
        height={40}
        x={value.x*40}
        y={value.y*40}
        pointerover={()=>{
          dispatch(MoveSelect({
            position:{ 
              x:value.x, 
              y:value.y,
            },
            step:value.step,
            changeColor:'0x8bc34a'
          }));
        }}
        pointerout={()=>{
          dispatch(MoveSelect({
            position:{ 
              x:value.x, 
              y:value.y,
            },
            step:value.step,
            changeColor:'0x383838'
          }));
        }}
        pointertap={()=>console.log(`click`)}
        image={loader.resources[`${value.name}-head-default`].data}
    />})}
  </Stage>
};