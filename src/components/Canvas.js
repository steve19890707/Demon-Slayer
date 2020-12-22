import React,{ useState } from 'react';
import { Stage, Sprite, Container } from '@inlet/react-pixi/animated';
import { CreateCheckerboard } from '../components/Checkerboard';
import { useSelector, useDispatch } from 'react-redux';
import { MoveSelect } from '../components/reducer/map';
import { chessSelected } from "../components/reducer/chess";
import { loader } from './DataLoader';
// other part
import { ChessUIBoard } from "../components/ChessUIBoard";
import { ConfirmTip } from "../components/ConfirmTips";
export const Canvas = ()=> {
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
  const dispatch = useDispatch();
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
          <Sprite
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
          />
          {value.boardStatus&&<ChessUIBoard
            ChessData={chess}
            ChessVal={value}
            ChessKey={key}
            positionX={(value.x*40)+40}
            positionY={(value.y*40)}
            setCurrentChess={setCurrentChess}
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