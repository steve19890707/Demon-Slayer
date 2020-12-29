import React from 'react';
import { Sprite } from '@inlet/react-pixi/animated';
import { loader } from '../DataLoader';
// reducers
import { MoveSelect } from '../../reducer/map';
import { chessSelected, chessCheckStatus } from "../../reducer/chess";
// other part
import { ChessUIBoard } from "./ChessUIBoard";
import { ChessStatus } from "../Common/ChessStatus";

export const Chess = ({
  chessProps
})=>{
  const { 
    chess,
    enemyChess,
    moveStep=Boolean,
    setMoveStep,
    setCurrentChess,
    dispatch
  } = chessProps;
  return chess.map((value,key)=>{
    return <React.Fragment key={key}>
      {value.debut&&<Sprite
        interactive={moveStep}
        buttonMode={true}
        width={40}
        height={40}
        x={value.x*40}
        y={value.y*40}
        zIndex={2}
        pointerover={()=>{
          dispatch(MoveSelect({
            position:{ 
              x:value.x, 
              y:value.y,
            },
            step:value.step,
            changeColor:'0x06d6a0'
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
        pointertap={()=>{
          setMoveStep(false);
          dispatch(chessSelected({
            key:key
          }));
          dispatch(MoveSelect({
            position:{ 
              x:value.x, 
              y:value.y,
            },
            step:value.step,
            changeColor:'0x383838'
          }));
        }}
        image={loader.resources[`${value.name}-head-default`].data}
      />}
      {value.boardStatus&&<ChessUIBoard
        ChessData={chess}
        ChessVal={value}
        ChessKey={key}
        EnemyChessData={enemyChess}
        positionX={(value.x*40)+40}
        positionY={(value.y*40)}
        setCurrentChess={setCurrentChess}
        setMoveStep={setMoveStep}
        dispatch={dispatch}
      />}
      {value.checkStatus&&<ChessStatus
        ChessData={value}
        ChessKey={key}
        CheckStatus={chessCheckStatus}
        setMoveStep={setMoveStep}
        dispatch={dispatch}
      />}
    </React.Fragment>
  })
};