import React,{ useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Stage, Sprite, Container } from '@inlet/react-pixi/animated';
import { loader } from './DataLoader';
// reducers
import { MoveSelect } from '../components/reducer/map';
import { stageDebut, chessSelected } from "../components/reducer/chess";
import { enemyStageDebut, enemyChessSelected } from "../components/reducer/enemyChess";
// other part
import { CreateCheckerboard } from '../components/Checkerboard';
import { ChessUIBoard } from "../components/ChessUIBoard";
import { EnemyChessUIBoard } from "../components/EnemyChessUIBoard";
import { ConfirmTip } from "../components/ConfirmTips";
import { ChessStatus } from "../components/ChessStatus";
// rule
import { stageRule } from "../components/constants/stageRule";
export const Canvas = ()=> {
  const [ stageStatus, setStageStatus ] = useState('stageOne');
  const [ currentChess, setCurrentChess ] = useState({
    key:0,
    type:"MOVE"
  });
  const [ tipStatus, setTipStatus ] = useState({
    title:``,
    status:false,
    position:{
      x:0,y:0
    },
  });
  const [ moveStep, setMoveStep ] = useState(true);
  const chessMap = useSelector(state=>state.chessMap);
  const chess = useSelector(state=>state.chess);
  const enemyChess = useSelector(state=>state.enemyChess);
  const dispatch = useDispatch();
  // debut
  useEffect(()=>{
    dispatch(stageDebut({ 
      isDebutChess:stageRule.getIn([stageStatus,'debutChess'])
    }));
    dispatch(enemyStageDebut({ 
      isDebutChess:stageRule.getIn([stageStatus,'debutEnemyChess'])
    }));
  },[ dispatch, stageStatus ])
  return <Stage
    width={800}
    height={600}
    options={{
      autoDensity: true, 
      antialias: true,
      backgroundColor:0x01262a
    }}>
    <CreateCheckerboard reduxProps={{ 
      chess,
      chessMap,
      currentChess,
      dispatch,
      setTipStatus
    }}/>
    <Container sortableChildren={true}>
      {chess.map((value,key)=>{
        return <React.Fragment key={key}>
          {value.debut&&<Sprite
            interactive={moveStep}
            buttonMode={true}
            width={40}
            height={40}
            x={value.x*40}
            y={value.y*40}
            zIndex={1}
            pointerover={()=>{
              dispatch(MoveSelect({
                position:{ 
                  x:value.x, 
                  y:value.y,
                },
                step:value.step,
                changeColor:'0x09bc8a'
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
            setMoveStep={setMoveStep}
            dispatch={dispatch}
          />}
        </React.Fragment>
      })}
      {enemyChess.map((value,key)=>{
        return <React.Fragment key={key}>
          {value.debut&&<Sprite
            interactive={moveStep}
            buttonMode={true}
            width={40}
            height={40}
            x={value.x*40}
            y={value.y*40}
            zIndex={1}
            pointertap={()=>{
              setMoveStep(false);
              dispatch(enemyChessSelected({
                key:key
              }));
            }}
            image={loader.resources[`${value.name}-head-default`].data}
          />}
          {value.boardStatus&&<EnemyChessUIBoard
            ChessKey={key}
            positionX={(value.x*40)+40}
            positionY={(value.y*40)}
            setMoveStep={setMoveStep}
            dispatch={dispatch}
          />}
        </React.Fragment>
      })}
    </Container>
    {tipStatus.status&&<ConfirmTip 
      props={{
        chess,
        currentChess,
        tipStatus,
        dispatch,
        setMoveStep,
        setTipStatus
      }}
    />}
  </Stage>
};