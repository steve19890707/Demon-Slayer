import { fromJS } from "immutable";

export const stageRule = fromJS({
  stageOne: {
    debutChess:[
      { 
        name:'Tanjirou',
        x:3,
        y:7
      },
    ],
    debutEnemyChess:[
      {
        name:'Teoni',
        x:16,
        y:7
      },
    ],
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
        x:3,
        y:9
      }, { 
        name:'Nezuko',
        x:3,
        y:11
      }
    ],
    debutEnemyChess:[
      {
        name:'Nomanooni',
        x:16,
        y:7
      }
    ]
  }
});