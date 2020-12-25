import React, {} from 'react';
import * as PIXI from "pixi.js";
import { Sprite } from '@inlet/react-pixi';
import { MoveSelect } from '../../reducer/map';
const texture = PIXI.Texture.WHITE;
export const CreateCheckerboard = ({
  reduxProps
})=>{
  const { 
    chess, enemyChess, chessMap, currentChess, dispatch, 
    setTipStatus, setMoveStep, setBattleInfo
  } = reduxProps;
  const checkMatchAttackPosition = (x,y)=>{
    let isMatch = false;
    enemyChess.map(v=>{
      const checkMatch = v.debut&&(x===v.x)&&(y===v.y);
      if(checkMatch){
        return isMatch=true;
      }else return null;
    });
    return isMatch;
  };
  const getCurrentEnemy = (x,y)=>{
    let item = {};
    enemyChess.map((v,k)=>{
      const checkMatch = v.debut&&(x===v.x)&&(y===v.y);
      if(checkMatch){
        return item={...v,key:k}
      }else return null;
    });
    return item;
  };
  return <React.Fragment>
    {chessMap.map(value=> {
      return value.map((v,k)=>{
        return <Sprite
          interactive={v.isInteractive}
          buttonMode={v.isInteractive}
          zIndex={v.zIndex}
          key={k}
          width={40}
          height={40}
          x={v.x*40}
          y={v.y*40}
          tint={v.color}
          alpha={v.alpha}
          texture={texture}
          pointertap={()=>{
            switch (currentChess.type) {
              case "MOVE":
                setTipStatus({
                  title:'確定移動?',
                  status:true,
                  position:{
                    x:v.x, y:v.y
                  }
                });
                dispatch(MoveSelect({
                  position:{ 
                    x:chess[currentChess.key].x, 
                    y:chess[currentChess.key].y,
                  },
                  step:chess[currentChess.key].step,
                  changeColor:'0x06d6a0'
                }));
                break;
              case "ATTACK":
                if(checkMatchAttackPosition(v.x,v.y)){
                  const targetData = getCurrentEnemy(v.x,v.y);
                  setBattleInfo({
                    status:true,
                    attaker:{ 
                      key: currentChess.key,
                      ...chess[currentChess.key]
                    },
                    target:{
                      key: targetData.key,
                      ...targetData
                    }
                  });
                  dispatch(MoveSelect({
                    position:{ 
                      x:chess[currentChess.key].x, 
                      y:chess[currentChess.key].y,
                    },
                    step:chess[currentChess.key].attack,
                    changeColor:'0x383838',
                  }));
                }else {
                  setMoveStep(true);
                  dispatch(MoveSelect({
                    position:{ 
                      x:chess[currentChess.key].x, 
                      y:chess[currentChess.key].y,
                    },
                    step:chess[currentChess.key].acttack,
                    changeColor:'0x383838'
                  }));
                };
                break;
              default:
                return;
            }; 
          }}
        />
      });
    })}
  </React.Fragment>
};