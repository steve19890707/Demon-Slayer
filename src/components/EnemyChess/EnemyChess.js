import React from 'react';
import { Sprite } from '@inlet/react-pixi/animated';
import { loader } from '../DataLoader';
// reducers
import { enemyChessSelected, enemyChessCheckStatus } from "../../reducer/enemyChess";
// other part
import { EnemyChessUIBoard } from "./EnemyChessUIBoard";
import { ChessStatus } from "../Common/ChessStatus";

export const EnemyChess = ({
  enemyChessProps
})=>{
  const { 
    enemyChess,
    moveStep=Boolean,
    setMoveStep,
    dispatch
  } = enemyChessProps;
  const filterCopyChessName = (name)=>{
    if(!!~name.indexOf('Nomanooni')){
      return 'Nomanooni';
    }else return name;
  };
  return enemyChess.map((value,key)=>{
    return <React.Fragment key={key}>
      {value.debut&&<Sprite
        interactive={moveStep}
        buttonMode={true}
        width={40}
        height={40}
        x={value.x*40}
        y={value.y*40}
        zIndex={2}
        pointertap={()=>{
          setMoveStep(false);
          dispatch(enemyChessSelected({
            key:key
          }));
        }}
        image={loader.resources[`${filterCopyChessName(value.name)}-head-default`].data}
      />}
      {value.boardStatus&&<EnemyChessUIBoard
        ChessKey={key}
        positionX={(value.x*40)+40}
        positionY={(value.y*40)}
        setMoveStep={setMoveStep}
        dispatch={dispatch}
      />}
      {value.checkStatus&&<ChessStatus
        ChessData={value}
        ChessKey={key}
        CheckStatus={enemyChessCheckStatus}
        setMoveStep={setMoveStep}
        dispatch={dispatch}
      />}
    </React.Fragment>
  })
};
