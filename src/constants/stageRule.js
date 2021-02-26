import { fromJS } from "immutable";

export const stageRule = fromJS({
  stageOne: {
    debutChess:[
      { 
        name:'Tanjirou',
        x:6,
        y:7
      }
    ],
    debutEnemyChess:[
      {
        name:'Teoni',
        x:14,
        y:7
      }
    ],
    ruleText:{
      win:'擊敗手鬼。',
      lose:'竃門 碳治郎 戰敗。'
    },
    recap:'前情提要：碳治郎與鬼殺隊士們即將與「炎柱」煉獄杏壽郎見面，並協助他殺死潛伏在無限列車上的惡鬼。今日是無限列車出發的前一夜...。',
    story:[{
        character:'Tanjirou-talk-default',
        name:'竈門 炭治郎',
        color:'#00ff99',
        content:'提前一日到達車站了，想不到現在的東京已經這麼繁華，連夜晚到處都是燈光。'
      },{
        character:'Tanjirou-talk-default',
        name:'竈門 炭治郎',
        color:'#00ff99',
        content:'這一陣子的經歷，讓禰豆子妳也辛苦了..今天妳就好好休息吧。'
      },{
        character:'Nezuko-talk-dodge',
        name:'竈門 禰豆子',
        color:'#00ff99',
        content:'嗯...(點頭)'
      },{
        character:'Tanjirou-talk-default',
        name:'竈門 炭治郎',
        color:'#00ff99',
        content:'那麼我趁者明日的任務開始以前，先到市區外圍獨自修行一下吧!!'
      },{
        character:'Nezuko-talk-dodge',
        name:'竈門 禰豆子',
        color:'#00ff99',
        content:'嗯嗯.....(務必小心)'
      },{
        character:'Tanjirou-talk-default',
        name:'竈門 炭治郎',
        color:'#00ff99',
        content:'(步行到市區外圍)'
      },{
        character:'Tanjirou-talk-default',
        name:'竈門 炭治郎',
        color:'#00ff99',
        content:'想想至今很久沒有獨自揮刀修煉了! 真是懷念..哈哈。'
      },{
        character:'Tanjirou-talk-dodge',
        name:'竈門 炭治郎',
        color:'#00ff99',
        content:'(騷動聲)..!!'
      },{
        character:'Tanjirou-talk-dodge',
        name:'竈門 炭治郎',
        color:'#00ff99',
        content:'鬼的氣味!?..好熟悉?!!'
      },{
        character:'Teoni-talk-default',
        name:'手鬼',
        color:'#9d4edd',
        content:'獵鬼人?!! 真是剛好，眼前送來的食物!!'
      },{
        character:'Tanjirou-talk-def',
        name:'竈門 炭治郎',
        color:'#00ff99',
        content:'手鬼!!!??..不是在鬼殺隊試煉的時候就擊敗他了嗎??'
      },{
        character:'Teoni-talk-default',
        name:'手鬼',
        color:'#9d4edd',
        content:'看我吃了你!!!'
      },{
        character:'Tanjirou-talk-def',
        name:'竈門 炭治郎',
        color:'#00ff99',
        content:'真是奇怪!!..究竟是怎麼回事??..從沒聽到消息說這附近出現惡鬼，而且還是死過一次的手鬼..'
      },{
        character:'Tanjirou-talk-attack',
        name:'竈門 炭治郎',
        color:'#00ff99',
        content:'冷靜下來! 必須在這個地方打倒他!!'
    }],
    endStory:[{
        character:'Tanjirou-talk-def',
        name:'竈門 炭治郎',
        color:'#00ff99',
        content:'總算成功打倒他了!'
      },{
        character:'Tanjirou-talk-dodge',
        name:'竈門 炭治郎',
        color:'#00ff99',
        content:'手鬼看起來並不記得之前與我交手過的事..而且力量也比過往強大，想必是有什麼奇怪的事情發生了吧..'
      },{
        character:'Tanjirou-talk-dodge',
        name:'竈門 炭治郎',
        color:'#00ff99',
        content:'不知道伊之助與善逸是否平安....'
    }],
    isWin: enemyList => {
      let totalLife = 0;
        enemyList.map(v => {
          if(v.debut){
            return totalLife += v.hp;
          }return null;
        });
      return totalLife>0 ? false : true ;
    },
    isLose: chessList => {
      let totalLife = 0;
        chessList.map(v => {
          if(v.debut){
            return totalLife += v.hp;
          }return null;
        });
      return totalLife>0 ? false : true ;
    }
  },
  stageTwo: {
    debutChess:[
      { 
        name:'Zenitsu',
        x:6,
        y:6
      },{ 
        name:'Inosuke',
        x:6,
        y:8
      }
    ],
    debutEnemyChess:[
      {
        name:'Nomanooni',
        x:13,
        y:7
      }
    ],
    ruleText:{
      win:'擊敗手鬼。',
      lose:'竃門 碳治郎 戰敗。'
    },
    recap:'前情提要：碳治郎與鬼殺隊士們。',
    story:[{
        character:'Tanjirou-talk-default',
        name:'竈門 炭治郎',
        color:'#00ff99',
        content:'1:台詞測試'
      },{
        character:'Tanjirou-talk-default',
        name:'竈門 炭治郎',
        color:'#00ff99',
        content:'2:台詞測試'
      },{
        character:'Tanjirou-talk-default',
        name:'竈門 炭治郎',
        color:'#00ff99',
        content:'3:台詞測試'
      },{
        character:'Teoni-talk-default',
        name:'手鬼',
        color:'#9d4edd',
        content:'4:台詞測試!!!'
      },{
        character:'Tanjirou-talk-def',
        name:'竈門 炭治郎',
        color:'#00ff99',
        content:'5:台詞測試!!!'
      },{
        character:'Teoni-talk-default',
        name:'手鬼',
        color:'#9d4edd',
        content:'6:台詞測試!!!'
      },{
        character:'Tanjirou-talk-attack',
        name:'竈門 炭治郎',
        color:'#00ff99',
        content:'7:台詞測試!!!'
    }],
    endStory:[{
        character:'Tanjirou-talk-def',
        name:'竈門 炭治郎',
        color:'#00ff99',
        content:'打倒他了!'
      },{
        character:'Tanjirou-talk-def',
        name:'竈門 炭治郎',
        color:'#00ff99',
        content:'打倒他了!!!!!'
      },{
        character:'Tanjirou-talk-def',
        name:'竈門 炭治郎',
        color:'#00ff99',
        content:'打倒他了!!!!!!!!!'
    }],
    isWin: enemyList => {
      let totalLife = 0;
        enemyList.map(v => {
          if(v.debut){
            return totalLife += v.hp;
          }return null;
        });
      return totalLife>0 ? false : true ;
    },
    isLose: chessList => {
      let totalLife = 0;
        chessList.map(v => {
          if(v.debut){
            return totalLife += v.hp;
          }return null;
        });
      return totalLife>0 ? false : true ;
    }
  }
});