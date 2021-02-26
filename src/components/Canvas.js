import React,{ useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Stage, Container, Sprite } from '@inlet/react-pixi/animated';
import { Howler } from 'howler';
// reducers
import { stageDebut } from "../reducer/chess";
import { enemyStageDebut } from "../reducer/enemyChess";
// other part
import { GameStart } from './Common/GameStart/Index';
import { CreateCheckerboard } from './Common/Checkerboard';
import { ConfirmTip } from "./Common/ConfirmTips";
import { UsualTip } from "./Common/UsualTip";
import { BattleBoard } from "./Common/BattleBoard";
import { BattleAnimeShow } from "./Common/BattleAnimeShow/Index";
import { OtherTab } from "./Common/OtherTab";
import { EnemyRoundTab } from "./Common/EnemyRoundTab/Index";
import { Chess } from "../components/Chess/Chess";
import { EnemyChess } from "../components/EnemyChess/EnemyChess";
import { Conversation, RoundEndConversation } from "../components/Common/Conversation/Index";
// rule
import { stageRule } from "../constants/stageRule";
import { loader } from './DataLoader';
import { currentBGMStatus, fadeBGMStatus } from './BGMStatus';
export const Canvas = ()=> {
  const [ roundStart, setRoundStart ] = useState(false);
  const [ stageStart, setStageStart ] = useState(false);
  const [ roundEnd, setRoundEnd ] = useState(false);
  const [ stageStatus, setStageStatus ] = useState('stageOne');
  const [ roundNum, setRoundNum ] = useState(1);
  const [ otherTab, setOtherTab ] = useState(false);
  const [ volume, setVolume ] = useState(true);
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
  const [ moveStep, setMoveStep ] = useState(false);
  const [ currentBGM, setCurrentBGM ] = useState('');
  const [ fadeBGM, setFadeBGM ] = useState('');
  const chessMap = useSelector(state=>state.chessMap);
  const chess = useSelector(state=>state.chess);
  const enemyChess = useSelector(state=>state.enemyChess);
  const dispatch = useDispatch();
  const filterBackgroundImg = (stageStatus)=>{
    switch (stageStatus){
      case 'stageTwo':
        return 'stageOne';
      default:
        return stageStatus;
    };
  };
  // bgm
  useEffect(()=>{
    currentBGMStatus(currentBGM);
  },[ currentBGM ]);
  useEffect(()=>{
    fadeBGMStatus(fadeBGM,setCurrentBGM);
  },[ fadeBGM, stageStatus ]);
  // debut
  useEffect(()=>{
    if(roundStart){
      dispatch(stageDebut({ 
        isDebutChess:stageRule.getIn([stageStatus,'debutChess'])
      }));
      dispatch(enemyStageDebut({ 
        isDebutChess:stageRule.getIn([stageStatus,'debutEnemyChess'])
      }));
    };
  },[ dispatch, roundStart, stageStatus ]);
  return <Stage
    width={800}
    height={600}
    options={{
      autoDensity: true, 
      antialias: true,
      backgroundColor:0x01262a
    }}>
    <Container sortableChildren={true}>
      {roundStart&&<Sprite
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
      />}
      <Sprite
        width={30}
        height={30}
        anchor={0.5} 
        x={40}
        y={40}
        zIndex={99}
        interactive={!animeShow.status}
        buttonMode={true}
        image={loader.resources[volume?`volumeIcon`:`muteIcon`].data}
        pointertap={()=>{
          setVolume(prev=>!prev);
          volume ? Howler.volume(0): Howler.volume(1);
        }}
      />
      <Sprite
        width={800}
        height={600}
        zIndex={1}
        image={loader.resources[`${filterBackgroundImg(stageStatus)}-main-BG`].data}
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
          currentBGM,
          dispatch,
          setMoveStep,
          setTipStatus,
          setOtherTab,
          setRoundNum,
          setUsualTip,
          setFadeBGM
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
          currentBGM,
          animeShow,
          setMoveStep,
          setUsualTip,
          setCurrentChess,
          setFadeBGM,
          setEnemyRoundTab,
          setRoundEnd
        }}
      />}
    {battleInfo.status&&
      <BattleBoard
        props={{
          battleInfo,
          setMoveStep,
          setBattleInfo,
          setAnimeShow,
          setCurrentBGM,
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
          enemyRoundTab,
          setMoveStep,
          setAnimeShow,
          setUsualTip,
          setCurrentChess,
          setEnemyRoundTab,
          dispatch
        }}
      />}
    {enemyRoundTab.status&&
      <EnemyRoundTab
        props={{
          enemyRoundTab,
          chess,
          enemyChess,
          setEnemyRoundTab,
          setAnimeShow,
          setCurrentChess,
          setCurrentBGM,
          dispatch
        }}
      />}
    {(stageStart&&!roundStart)&&
      <Conversation
        props={{
          stageStatus,
          setRoundStart,
          setOtherTab
        }}
      />}
    {roundEnd&&<RoundEndConversation 
      props={{
        stageStatus,
        currentBGM,
        setFadeBGM,
        setRoundStart,
        setStageStatus,
        setRoundEnd,
        setRoundNum,
        dispatch
      }}
    />}
    {!stageStart&&
      <GameStart 
        props={{
          setStageStart,
          setCurrentBGM
        }}
      />}
  </Stage>
};