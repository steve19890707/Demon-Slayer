import React,{ useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Stage, Container } from '@inlet/react-pixi/animated';
// reducers
import { stageDebut } from "../reducer/chess";
import { enemyStageDebut } from "../reducer/enemyChess";
// other part
import { CreateCheckerboard } from './Common/Checkerboard';
import { ConfirmTip } from "./Common/ConfirmTips";
import { BattleBoard } from "./Common/BattleBoard";
import { Chess } from "../components/Chess/Chess";
import { EnemyChess } from "../components/EnemyChess/EnemyChess";
// rule
import { stageRule } from "../constants/stageRule";
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
  const [ battleInfo, setBattleInfo ] = useState({
    status:false,
    attaker:{ key:'' },
    target:{ key:'' }
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
    <Container sortableChildren={true}>
      <CreateCheckerboard reduxProps={{ 
        chess,
        enemyChess,
        chessMap,
        currentChess,
        dispatch,
        setTipStatus,
        setMoveStep,
        setBattleInfo
      }}/>
      <Chess chessProps={{
        chess,
        enemyChess,
        moveStep,
        setMoveStep,
        setCurrentChess,
        dispatch
      }}/>
      <EnemyChess enemyChessProps={{
         enemyChess,
         moveStep,
         setMoveStep,
         dispatch
      }}/>
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
    {battleInfo.status&&
      <BattleBoard
        props={{
          battleInfo,
          setMoveStep,
          setBattleInfo
        }}
      />}
  </Stage>
};