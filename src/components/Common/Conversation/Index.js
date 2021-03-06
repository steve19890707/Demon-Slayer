import React,{ useState } from 'react';
import * as PIXI from "pixi.js";
import { loader } from '../../DataLoader';
import { stageRule } from '../../../constants/stageRule';
import { Container, Graphics, Sprite, Text } from '@inlet/react-pixi/animated';
import { Spring } from 'react-spring/renderprops';
import { audioData } from "../../DataLoader";
// reducers
import { chessDone } from '../../../reducer/chess';
export const Conversation = ({ props })=> {
  const { stageStatus, setRoundStart, setOtherTab } = props;
  const currentConversation = stageRule.getIn([stageStatus,'story']);
  const currentRecap = stageRule.getIn([stageStatus,'recap']);
  const [ isRecap, setIsRecap ] = useState(true);
  const [ textRest, setTextRest ] = useState(false);
  const [ currentStory, setCurrentStory ] = useState(0);
  const checkStageRound = ()=>{
    switch (stageStatus) {
      case 'stageOne':
        return 1;
      case 'stageTwo':
        return 2;
      case 'stageThree':
        return 3;
      case 'stageFour':
        return 4;
      default:
        return 1;
    };
  };
  return <Graphics
    x={400}
    y={300}
    zIndex={99}
    draw={g=> {
      g.clear();
      g.beginFill(`0x011627`);
      g.drawRoundedRect(-300,-125,600,250,5);
      g.endFill();
    }}
  >
    <Container sortableChildren={true}>
      <Text
        text={`【 第 ${checkStageRound()} 話 】`}
        anchor={0.5}
        x={0}
        y={-80}
        style={new PIXI.TextStyle({ fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
          fontSize: 20,
          fill:'#ffffff'
        })}
      />
      {isRecap ?
        <>
          <Spring
            from={{ x:0, y:0, alpha:0 }}
            to={{ x:0, y:-50, alpha:1 }}
            config={{ duration: 1000 }}
          >
            {props =>
              <Text
                text={currentRecap}
                anchor={{x:0.5}}
                style={new PIXI.TextStyle({ fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
                  fontSize: 16,
                  fill:'#ffffff',
                  lineHeight:24,
                  breakWords: true,
                  wordWrap: true,
                  wordWrapWidth:500
                })}
                {...props}
              />
            }
          </Spring>
          <Sprite
            width={40}
            height={30}
            anchor={0.5}
            y={90}
            interactive={true}
            buttonMode={true}
            image={loader.resources[`next`].data}
            pointertap={()=>setIsRecap(false)}
          />
        </>:
        <>
          <Sprite
            width={85}
            height={85}
            x={-250}
            y={0}
            anchor={{y:0.5}}
            image={loader.resources[`${currentConversation.getIn([currentStory,'character'])}`].data}
          />
          <Text
            text={currentConversation.getIn([currentStory,'name'])}
            anchor={{y:0.5}}
            x={-250}
            y={65}
            style={new PIXI.TextStyle({ fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
              fontSize: 18,
              fill:['#ffffff', currentConversation.getIn([currentStory,'color'])],
            })}
          />
          <Spring
            from={{ x:-140, y: 25, alpha:0 }}
            to={{ x:-140, y:0, alpha:1 }}
            config={{ duration: 250 }}
            reset={textRest}
            onStart={()=>setTextRest(false)}
          >
            {props =>
              <Text
                text={currentConversation.getIn([currentStory,'content'])}
                anchor={{y:0.5}}
                style={new PIXI.TextStyle({ fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
                  fontSize: 18,
                  fill:'#ffffff',
                  breakWords: true,
                  wordWrap: true,
                  wordWrapWidth:400
                })}
                {...props}
              />
            }
          </Spring>
          <Sprite
            width={40}
            height={30}
            anchor={0.5}
            x={255}
            y={90}
            interactive={true}
            buttonMode={true}
            image={loader.resources[`next`].data}
            pointertap={()=>{
              const converLength = currentConversation.size-1;
              if(currentStory<converLength){
                setCurrentStory(prev=>prev+=1);
                setTextRest(true);
              }else {
                setRoundStart(true);
                setOtherTab(true);
              };    
            }}
          />
        </>
      }
    </Container>
  </Graphics>
};
export const RoundEndConversation = ({ props })=> {
  const { stageStatus, currentBGM, 
    setFadeBGM, setRoundStart, setStageStatus, setRoundEnd, 
    setRoundNum, setStageClear, setCurrentBGM, dispatch } = props;
  const currentConversation = stageRule.getIn([stageStatus,'endStory']);
  const [ textRest, setTextRest ] = useState(false);
  const [ currentEndStory, setCurrentEndStory ] = useState(0);
  return <Graphics
    x={400}
    y={300}
    zIndex={99}
    draw={g=> {
      g.clear();
      g.beginFill(`0x011627`);
      g.drawRoundedRect(-300,-125,600,250,5);
      g.endFill();
    }}
  >
    <Container sortableChildren={true}>
      <Sprite
        width={85}
        height={85}
        x={-250}
        y={-20}
        anchor={{y:0.5}}
        image={loader.resources[`${currentConversation.getIn([currentEndStory,'character'])}`].data}
      />
      <Text
        text={currentConversation.getIn([currentEndStory,'name'])}
        anchor={{y:0.5}}
        x={-250}
        y={45}
        style={new PIXI.TextStyle({ fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
          fontSize: 18,
          fill:['#ffffff', currentConversation.getIn([currentEndStory,'color'])],
        })}
      />
      <Spring
        from={{ x:-140, y: 5, alpha:0 }}
        to={{ x:-140, y:-20, alpha:1 }}
        config={{ duration: 250 }}
        reset={textRest}
        onStart={()=>setTextRest(false)}
      >
        {props =>
          <Text
            text={currentConversation.getIn([currentEndStory,'content'])}
            anchor={{y:0.5}}
            style={new PIXI.TextStyle({ fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
              fontSize: 18,
              fill:'#ffffff',
              breakWords: true,
              wordWrap: true,
              wordWrapWidth:400
            })}
            {...props}
          />
        }
      </Spring>
      {!(currentEndStory<(currentConversation.size-1))&&<Text
        text={'下一話'}
        anchor={{y:0.5}}
        x={160}
        y={85}
        style={new PIXI.TextStyle({ fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
          fontSize: 18,
          fill:['#ffffff', '#ffffff'],
        })}
      />}
      <Sprite
        width={40}
        height={30}
        anchor={0.5}
        x={255}
        y={90}
        interactive={true}
        buttonMode={true}
        image={loader.resources[`next`].data}
        pointertap={()=>{
          const converLength = currentConversation.size-1;
          if(currentEndStory<converLength){
            setCurrentEndStory(prev=>prev+=1);
            setTextRest(true);
          }else {
            setRoundEnd(false);
            // stage clear
            if(stageStatus==='stageFour'){
              audioData[currentBGM].fade(0.6,0,1000);
              audioData.open.stop();
              audioData.open.volume(1);
              audioData.open.play();
              setRoundNum(1);
              dispatch(chessDone());
              setStageClear(true);
              setFadeBGM('');
              setCurrentBGM('');
              return;
            };
            setRoundStart(false);
            setStageStatus(prev=>{
              switch (prev){
                case 'stageOne':
                  return 'stageTwo'
                case 'stageTwo':
                  return 'stageThree'
                case 'stageThree':
                  return 'stageFour'
                default:
                  return prev;
              }
            });
            setFadeBGM(currentBGM);
            setRoundNum(1);
            dispatch(chessDone());
          };    
        }}
      />
    </Container>
  </Graphics>
};
export const StageClear = ({ props })=> {
  const { setStageStatus, setStageStart, setStageClear, setRoundStart, setCurrentBGM } = props;
  return <Graphics
    x={400}
    y={300}
    zIndex={99}
    draw={g=> {
      g.clear();
      g.beginFill(`0x011627`);
      g.drawRoundedRect(-300,-125,600,250,5);
      g.endFill();
    }}
  >
    <Container sortableChildren={true}>
      <Text
        text={`恭喜您完成挑戰!!`}
        anchor={0.5}
        y={-70}
        style={new PIXI.TextStyle({ fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
          fontSize: 22,
          fill:['#ffffff', '#00bcd4'],
          lineHeight:24,
          breakWords: true,
          wordWrap: true,
          wordWrapWidth:500
        })}
      />
      <Spring
        from={{ x:0, y:25, alpha:0 }}
        to={{ x:0, y:0, alpha:1 }}
        config={{ duration: 1000 }}
      >
        {props =>
          <Text
            text={`本篇創作已完結，未來將可能持續創作更新遊戲新篇章，敬請期待。 感謝您的遊玩!!`}
            anchor={0.5}
            style={new PIXI.TextStyle({ fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
              fontSize: 16,
              fill:'#ffffff',
              lineHeight:24,
              breakWords: true,
              wordWrap: true,
              wordWrapWidth:500
            })}
            {...props}
          />
        }
      </Spring>
      <Text
        text={`2021 Steve © Present`}
        anchor={0.5}
        x={0}
        y={85}
        style={new PIXI.TextStyle({ fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
          fontSize: 16,
          fill:['#ffffff', '#ffffff'],
        })}
      />
      <Text
        text={`重新開始`}
        anchor={{y:0.5}}
        x={150}
        y={85}
        style={new PIXI.TextStyle({ fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
          fontSize: 18,
          fill:['#ffffff', '#ffffff'],
        })}
      />
      <Sprite
        width={40}
        height={30}
        anchor={0.5}
        x={255}
        y={90}
        interactive={true}
        buttonMode={true}
        image={loader.resources[`next`].data}
        pointertap={()=>{
          audioData.open.fade(0.6,0,1000);
          setStageClear(false);
          setStageStart(true);
          setRoundStart(false);
          setStageStatus('stageOne');
          setCurrentBGM('userRounds');
        }}
      />
    </Container>
  </Graphics>
};