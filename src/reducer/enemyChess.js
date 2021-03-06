import { createSlice } from '@reduxjs/toolkit';
const basicCommon = {
  x:0,
  y:0,
  checkStatus:false,
  boardStatus:false,
  debut:false,
  roundAttack:false,
};
const enemyChess = createSlice({
  name:'enemyChess',
  initialState:[
    {
      name:'Teoni',
      cn:'手鬼',
      id:1,
      hp:2000,
      sp:100,
      dodge:25,
      fullValue:{
        hp:2000,
        sp:100
      },
      skill:[{ 
        name:'胡亂毆打',
        atk:200,
        sp:0,
        hitfix:10,
        cd:0
      },{ 
        name:'你是第十四個',
        atk:500,
        sp:25,
        hitfix:20,
        cd:0
      }],
      ...basicCommon
    },{
      name:'Nomanooni',
      cn:'沼鬼(壹)',
      id:2,
      hp:1200,
      sp:120,
      dodge:25,
      fullValue:{
        hp:1200,
        sp:120
      },
      skill:[{ 
        name:'爪擊',
        atk:150,
        sp:0,
        hitfix:15,
        cd:0
      },{ 
        name:'分身攻擊',
        atk:300,
        sp:20,
        hitfix:30,
        cd:0
      }],
      ...basicCommon
    },{
      name:'Nomanooni-2',
      cn:'沼鬼(貳)',
      id:3,
      hp:1200,
      sp:120,
      dodge:25,
      fullValue:{
        hp:1200,
        sp:120
      },
      skill:[{ 
        name:'爪擊',
        atk:150,
        sp:0,
        hitfix:15,
        cd:0
      },{ 
        name:'分身攻擊',
        atk:300,
        sp:20,
        hitfix:30,
        cd:0
      }],
      ...basicCommon
    },{
      name:'Nomanooni-3',
      cn:'沼鬼(參)',
      id:4,
      hp:1200,
      sp:120,
      dodge:25,
      fullValue:{
        hp:1200,
        sp:120
      },
      skill:[{ 
        name:'爪擊',
        atk:150,
        sp:0,
        hitfix:15,
        cd:0
      },{ 
        name:'分身攻擊',
        atk:300,
        sp:20,
        hitfix:30,
        cd:0
      }],
      ...basicCommon
    },{
      name:'Hakuji',
      cn:'猗窩座',
      id:5,
      hp:4000,
      sp:200,
      dodge:40,
      fullValue:{
        hp:4000,
        sp:200
      },
      skill:[{ 
        name:'破壞殺攻擊',
        atk:400,
        sp:0,
        hitfix:20,
        cd:0
      },{ 
        name:'破壞殺―亂式',
        atk:600,
        sp:15,
        hitfix:30,
        cd:0
      },{ 
        name:'術式展開―破壞殺―羅針',
        atk:900,
        sp:30,
        hitfix:30,
        cd:0
      }],
      ...basicCommon
  }],
  reducers:{
    enemyStageDebut:(state, actions)=> {
      const { isDebutChess } = actions.payload;
      state.map((value,key)=>{
        return isDebutChess.map(v=>{
          if(value.name===v.get('name')){
            return (
              state[key].debut = true,
              state[key].x = v.get('x'),
              state[key].y = v.get('y')
            );
          }else return null;
        })
      })
    },
    enemyChessSelected: (state, actions)=>{
      const { key } = actions.payload;
      state[key].boardStatus = !state[key].boardStatus;
    },
    enemyChessCheckStatus: (state, actions)=> {
      const { key } = actions.payload;
      state[key].checkStatus = !state[key].checkStatus;
    },
    enemyChessDefense: (state, actions)=> {
      const { key, damage } = actions.payload;
      state[key].hp -= damage;
    },
    enemyChessAttackResult: (state, actions)=> {
      const { key, lessSp } = actions.payload;
      state[key].sp -= lessSp;
    },
    enemyChessDead: (state, actions)=> {
      const { key } = actions.payload;
      state[key].debut = false;
      state[key].hp = state[key].fullValue.hp;
      state[key].sp = state[key].fullValue.sp;
    },
  }
});
export default enemyChess.reducer;
export const { 
  enemyStageDebut, enemyChessSelected, enemyChessCheckStatus, enemyChessDefense, 
  enemyChessAttackResult, enemyChessDead 
} = enemyChess.actions;