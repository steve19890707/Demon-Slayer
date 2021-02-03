import React,{ useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Stage, Container, Sprite } from '@inlet/react-pixi/animated';
// reducers
import { stageDebut } from "../reducer/chess";
import { enemyStageDebut } from "../reducer/enemyChess";
// other part
import { CreateCheckerboard } from './Common/Checkerboard';
import { ConfirmTip } from "./Common/ConfirmTips";
import { UsualTip } from "./Common/UsualTip";
import { BattleBoard } from "./Common/BattleBoard";
import { BattleAnimeShow } from "./Common/BattleAnimeShow/Index";
import { OtherTab } from "./Common/OtherTab";
import { EnemyRoundTab } from "./Common/EnemyRoundTab/Index";
import { Chess } from "../components/Chess/Chess";
import { EnemyChess } from "../components/EnemyChess/EnemyChess";
// rule
import { stageRule } from "../constants/stageRule";
import { loader } from './DataLoader';
export const Canvas = ()=> {
  const [ stageStatus, setStageStatus ] = useState('stageOne');
  const [ roundNum, setRoundNum ] = useState(1);
  const [ otherTab, setOtherTab ] = useState(false);
  const [ enemyRoundTab, setEnemyRoundTab ] = useState({
    oder:0,
    status:false
  });
  const [ currentChess, setCurrentChess ] = useState({
    key:0,
    type:"MOVE"
  });
  const [ usualTip, setUsualTip ] = useState({
    title:``,
    status:false,
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
    attacker:{ key:'' },
    target:{ key:'' }
  });

  const [ animeShow, setAnimeShow ] = useState({
    status:false,
    type:'',
    attacker:{ key:'', skill:{}, prevSP:0 },
    target:{ key:'', isHit:false, prevLife:0 }
  });
  const [ moveStep, setMoveStep ] = useState(true);
 
  // const [ animeShow, setAnimeShow ] = useState({
  //   status:true,
  //   type:'ENEMY',
  //   isHit:true,
  //   attacker:{ key:0, skill:{
  //     name: "", atk: 1300, sp: 15, hitfix: 0
  //   }, prevSP:125 },
  //   target:{ key:0, isHit:false, prevLife:2000 }
  // });
  // const [ moveStep, setMoveStep ] = useState(false);

  const chessMap = useSelector(state=>state.chessMap);
  const chess = useSelector(state=>state.chess);
  const enemyChess = useSelector(state=>state.enemyChess);
  const chessList = chess.filter(v=>v.debut);
  const enemyList = enemyChess.filter(v=>v.debut);
  const dispatch = useDispatch();
  // debut
  useEffect(()=>{
    dispatch(stageDebut({ 
      isDebutChess:stageRule.getIn([stageStatus,'debutChess'])
    }));
    dispatch(enemyStageDebut({ 
      isDebutChess:stageRule.getIn([stageStatus,'debutEnemyChess'])
    }));
  },[ dispatch, stageStatus ]);
  return <Stage
    width={800}
    height={600}
    options={{
      autoDensity: true, 
      antialias: true,
      backgroundColor:0x01262a
    }}>
    <Container sortableChildren={true}>
      <Sprite
        width={30}
        height={30}
        anchor={0.5} 
        x={760}
        y={40}
        zIndex={99}
        interactive={moveStep}
        buttonMode={true}
        image={loader.resources[`otherIcon`].data}
        pointertap={()=>{
          setOtherTab(true);
          setMoveStep(false);
        }}
      />
      <Sprite
        width={800}
        height={600}
        zIndex={1}
        image={loader.resources[`${stageStatus}-main-BG`].data}
      />
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
    {otherTab&&
      <OtherTab
        props={{
          stageStatus,
          roundNum,
          setMoveStep,
          setOtherTab,
          setTipStatus,
          setCurrentChess
        }}
      />}
    {tipStatus.status&&
      <ConfirmTip 
        props={{
          chess,
          currentChess,
          tipStatus,
          dispatch,
          setMoveStep,
          setTipStatus,
          setOtherTab,
          setRoundNum,
          setUsualTip
        }}
      />}
    {usualTip.status&&
      <UsualTip
        props={{
          stageStatus,
          chess,
          currentChess,
          enemyChess,
          usualTip,
          setMoveStep,
          setUsualTip,
          setCurrentChess,
          setEnemyRoundTab
        }}
      />}
    {battleInfo.status&&
      <BattleBoard
        props={{
          battleInfo,
          setMoveStep,
          setBattleInfo,
          setAnimeShow,
          dispatch
        }}
      />}
    {animeShow.status&&
      <BattleAnimeShow 
        props={{
          stageStatus,
          animeShow,
          chess,
          enemyChess,
          setMoveStep,
          setAnimeShow,
          setUsualTip,
          dispatch
        }}
      />}
    {enemyRoundTab.status&&
      <EnemyRoundTab
        props={{
          enemyRoundTab,
          chessList,
          enemyList,
          setEnemyRoundTab,
          setAnimeShow
        }}
      />}
  </Stage>
};