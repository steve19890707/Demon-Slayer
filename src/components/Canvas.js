import React from 'react';
import { Stage } from '@inlet/react-pixi/animated';
import { CreateCheckerboard } from '../components/Checkerboard';

export const Canvas = ()=> {
  return <Stage
    width={800}
    height={600}
    options={{
      autoDensity: true, 
      antialias: true,
      backgroundColor:0x01262a
    }}>
    <CreateCheckerboard/>
  </Stage>
};