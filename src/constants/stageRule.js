import { fromJS } from "immutable";

export const stageRule = fromJS({
  stageOne: {
    debutChess:[
      { 
        name:'Tanjirou',
        x:6,
        y:7
      },{ 
        name:'Rengoku',
        x:10,
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
        name:'Tanjirou',
        x:7,
        y:7
      },{ 
        name:'Nezuko',
        x:5,
        y:7
      },{ 
        name:'Zenitsu',
        x:6,
        y:6
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