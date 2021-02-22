import React,{ useState } from 'react';
import * as PIXI from "pixi.js";
import { loader } from '../../DataLoader';
import { stageRule } from '../../../constants/stageRule';
import { Container, Graphics, Sprite, Text } from '@inlet/react-pixi/animated';
import { Spring } from 'react-spring/renderprops';
export const Conversation = ({ props })=> {
  const { stageStatus, setRoundStart } = props;
  const currentConversation = stageRule.getIn([stageStatus,'story']);
  const currentRecap = stageRule.getIn([stageStatus,'recap']);
  const [ isRecap, setIsRecap ] = useState(true);
  const [ currentStory, setCurrentStory ] = useState(0);
  const checkStageRound = ()=>{
    switch (stageStatus) {
      case 'stageOne':
        return 1;
      case 'stageTwo':
        return 2;
      case 'stageThree':
        return 3;
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
                  fontSize: 15,
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
            width={24}
            height={14}
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
              fontSize: 16,
              fill:['#ffffff', '#00ff99'],
            })}
          />
          <Spring
            from={{ x:-140, y: 25, alpha:0 }}
            to={{ x:-140, y:0, alpha:1 }}
            config={{ duration: 250 }}
            reset={true}
          >
            {props =>
              <Text
                text={currentConversation.getIn([currentStory,'content'])}
                anchor={{y:0.5}}
                style={new PIXI.TextStyle({ fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
                  fontSize: 16,
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
            width={24}
            height={14}
            anchor={0.5}
            y={90}
            interactive={true}
            buttonMode={true}
            image={loader.resources[`next`].data}
            pointertap={()=>{
              const converLength = currentConversation.size-1;
              if(currentStory<converLength){
                setCurrentStory(prev=>prev+=1);
              }else {
                setRoundStart(true);
              };    
            }}
          />
        </>
      }
    </Container>
  </Graphics>
};