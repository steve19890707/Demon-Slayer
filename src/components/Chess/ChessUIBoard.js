import React,{ useState } from 'react';
import { fromJS } from 'immutable';
import { Graphics, Text } from '@inlet/react-pixi/animated';
import { GetMove, GetAttack } from '../../reducer/map';
import { chessSelected, chessCheckStatus } from "../../reducer/chess";
import * as PIXI from "pixi.js";

export const ChessUIBoard = ({
  ChessData,
  ChessVal,
  ChessKey,
  EnemyChessData,
  positionX,
  positionY,
  setCurrentChess,
  setMoveStep,
  dispatch
})=> {
  const specialPosition = {
    x: 720,
    y: 490
  };
  const forMoveArray = [];
  const forAttackArray = [];
  const [textInforArray, setTextInforArray] = useState(fromJS([{
      id:1, 
      title:"移動",
      textColor:['#ffffff', '#ffffff']
    },{ 
      id:2,
      title:"攻擊",
      textColor:['#ffffff', '#ffffff']
    },{ 
      id:3,
      title:"狀態",
      textColor:['#ffffff', '#ffffff']
    },{ 
      id:4,
      title:"返回",
      textColor:['#ffffff', '#ffffff']
  }]));
  ChessData.map((v)=>{
    return (
      forMoveArray.push({ x:v.x, y:v.y }),
      forAttackArray.push({ x:v.x, y:v.y })
    );
  });
  EnemyChessData.map((v)=>{
    return forMoveArray.push({ x:v.x, y:v.y });
  });
  const compareAttack = (
    chessX,
    chessY,
    chessAtk
  )=>{
    let isAttack = false;
    const isDebutEnemy = EnemyChessData.filter(v=>v.debut);
    const limitPosition = { x:19, y:14 };
    const positionRange = [];
    for(let i=0; i < chessAtk; i++){
      const getaddX = (chessX+(i+1)>=limitPosition.x) ? limitPosition.x : chessX+(i+1);
      const getaddY = (chessY+(i+1)>=limitPosition.y) ? limitPosition.y : chessY+(i+1);
      const getlessX = (chessX-(i+1)<=0) ? 0 : chessX-(i+1);
      const getlessY = (chessY-(i+1)<=0) ? 0 : chessY-(i+1);
      positionRange.push(
        { x:getaddX, y:chessY },
        { x:getlessX, y:chessY },
        { x:chessX, y:getaddY },
        { x:chessX, y:getlessY }
      );
    };
    isDebutEnemy.map(val=>{
      return positionRange.map(v=>{
        if(val.x===v.x&&val.y===v.y){
          return isAttack = true;
        }else return null
      })
    });
    return isAttack;
  };
  const compareUsed = (
    chessX,
    chessY,
    checkType
  )=>{
    let isUnused = false;
    const isDebutChess = ChessData.filter(v=>v.debut);
    isDebutChess.map(val=>{
      if(val.x===chessX&&val.y===chessY){
        switch (checkType) {
          case 'MOVE':
          case 'ATTACK':
            const moved = val.roundMove>0;
            return isUnused = moved;
          default:
            return true;
        };
      }else return null;
    });
    return isUnused;
  };
  const CreateText = ({ noop })=>{
    const isAttack = compareAttack(ChessVal.x,ChessVal.y,ChessVal.attack);
    return textInforArray.map((val,key)=>{
      const fetchInteractive = ()=>{
        switch (val.get('id')) {
          case 1:
            return compareUsed(ChessVal.x,ChessVal.y,'MOVE');
          case 2:
            const result = isAttack && compareUsed(ChessVal.x,ChessVal.y,'ATTACK');
            return result;
          default:
            return true;
        };
      }
      return <Text
        key={key}
        interactive={fetchInteractive()}
        buttonMode={true}
        text={val.get('title')}
        x={10}
        y={5+(25*key)}
        style={new PIXI.TextStyle({
          fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
          fontSize: 20,
          fill:fetchInteractive()?val.get('textColor').toJS():'#8d99ae',
        })}
        pointerover={()=>{
          setTextInforArray(prev=>
            prev.setIn([key,'textColor',1],'#00ff99')
          );
        }}
        pointerout={()=>{
          setTextInforArray(prev=>
            prev.setIn([key,'textColor',1],'#ffffff')
          );
        }}
        pointertap={(e)=>{
          switch (val.get('id')) {
            case 1:
              setCurrentChess({ 
                key:ChessKey,
                type:"MOVE"
              });
              dispatch(GetMove({
                position:{ 
                  x:ChessVal.x, 
                  y:ChessVal.y,
                },
                step:ChessVal.step,
                changeColor:'0x06d6a0',
                currentChessPositions: forMoveArray
              }));
              dispatch(chessSelected({
                key:ChessKey
              }));
              break;
            case 2:
              setCurrentChess({ 
                key:ChessKey,
                type:"ATTACK"
              });
              dispatch(chessSelected({
                key:ChessKey
              }));
              dispatch(GetAttack({
                position:{ 
                  x:ChessVal.x, 
                  y:ChessVal.y,
                },
                step:ChessVal.attack,
                changeColor:'0x00bbf9',
                currentChessPositions: forAttackArray
              }));
              break;
            case 3:
              setCurrentChess({ 
                key:ChessKey,
                type:"STATUS"
              });
              dispatch(chessCheckStatus({
                key:ChessKey
              }));
              dispatch(chessSelected({
                key:ChessKey
              }));
              break;
            case 4 :
              setMoveStep(true);
              dispatch(chessSelected({
                key:ChessKey
              }));
              break;
            default:
              return console.log(e.target)
          };
        }}
      />
    }
  )};
  return <Graphics
    x={positionX!==800?positionX:specialPosition.x}
    y={(positionY!==560&&positionY!==520)?positionY:specialPosition.y}
    zIndex={3}
    draw={g=> {
      g.lineStyle(1,`0xffffff`,1);
      g.beginFill(`0x22223b`);
      g.drawRoundedRect(0,0,60,110,8);
      g.endFill();
    }}
  ><CreateText/></Graphics>
};