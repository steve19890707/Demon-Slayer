import { fromJS } from "immutable";

export const stageRule = fromJS({
  stageOne: {
    debutChess:[
      { 
        name:'Tanjirou',
        x:3,
        y:7
      }
    ],
    debutEnemyChess:[
      {
        name:'Teoni',
        x:16,
        y:7
      }
    ]
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