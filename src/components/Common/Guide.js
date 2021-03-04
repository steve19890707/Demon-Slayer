import React,{ useState } from 'react';
import * as PIXI from "pixi.js";
import { loader } from '../DataLoader';
import { Container, Graphics, Sprite, Text } from '@inlet/react-pixi/animated';
import { Spring } from 'react-spring/renderprops';

export const Guide = ({ props })=> {
  const { setOpenGuide } = props;
  const [ guideStep, setGuideStep ] = useState(0);
  const [ textRest, setTextRest ] = useState(false);
  const guideList = [
    {
      title:'一、基礎操作',
      content:'音樂啟用/關閉、我/敵方戰棋選擇、回合狀態視窗開啟/關閉'
    },{
      title:'二、戰棋狀態',
      content:'點選戰棋[狀態]，查看戰棋詳情。'
    },{
      title:'三、回合狀態',
      content:'點擊視窗右上角開啟/關閉，查看/操作[回合狀態]詳情。'
    },{
      title:'四、戰棋攻擊',
      content:'選擇攻擊目標後，點擊左列技能欄位之技能(擇一)進行攻擊。'
    },{
      title:'五、戰棋防禦',
      content:'選擇戰旗進行防禦。(敵方回合之敵方戰棋僅進行攻擊*無攻擊距離限制*，回合期間不進行戰棋移動。)'
    },
  ]
  return <Graphics
    x={400}
    y={300}
    zIndex={99}
    draw={g=> {
      g.clear();
      g.beginFill(`0x011627`);
      g.drawRoundedRect(-400,-300,800,600,0);
      g.endFill();
    }}
  >
    <Container sortableChildren={true}>
      <Text
        text={guideList[guideStep].title}
        anchor={{y:0.5}}
        x={-270}
        y={-245}
        style={new PIXI.TextStyle({ fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
          fontSize: 28,
          fill:['#ffffff', '#00bcd4'],
        })}
      />
      <Sprite
        anchor={0.5}
        x={0}
        y={0}
        width={540}
        height={405}
        image={loader.resources[`guide-${guideStep+1}`].data}
      />
      <Spring
        from={{ x:0, y:250, alpha:0 }}
        to={{ x:0, y:230, alpha:1 }}
        config={{ duration: 250 }}
        reset={textRest}
        onStart={()=>setTextRest(false)}
      >
        {props =>
          <Text
            text={guideList[guideStep].content}
            anchor={{x:0.5}}
            style={new PIXI.TextStyle({ fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
              fontSize: 16,
              fill:['#ffffff', '#00bcd4'],
              breakWords: true,
              wordWrap: true,
              wordWrapWidth:500
            })}
            {...props}
          />
        }
      </Spring>
      <Text
        text={guideStep===4?'返回':'下一步'}
        anchor={{y:0.5}}
        x={guideStep===4?265:250}
        y={255}
        style={new PIXI.TextStyle({ fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
          fontSize: 18,
          fill:['#ffffff', '#ffffff'],
        })}
      />
      <Sprite
        width={40}
        height={30}
        anchor={0.5}
        x={335}
        y={260}
        interactive={true}
        buttonMode={true}
        image={loader.resources[`next`].data}
        pointertap={()=>{
          if(guideStep===4){ 
            setOpenGuide(false);
            return; 
          }else {
            setGuideStep(prev=>prev+=1);
            setTextRest(true);
          };
        }}
      />
    </Container>
  </Graphics>
};