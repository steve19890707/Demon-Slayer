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
      hp:2000,
      sp:100,
      dodge:25,
      fullValue:{
        hp:2000,
        sp:100
      },
      skill:[{ 
        name:'胡亂毆打',
        atk:50,
        sp:0,
        hitfix:10
      },{ 
        name:'你是第十四個',
        atk:300,
        sp:10,
        hitfix:20
      }],
      ...basicCommon
    },{
      name:'Nomanooni',
      cn:'沼鬼',
      hp:1500,
      sp:200,
      dodge:30,
      fullValue:{
        hp:1500,
        sp:200
      },
      skill:[{ 
        name:'爪擊',
        atk:70,
        sp:0,
        hitfix:15
      },{ 
        name:'分身攻擊',
        atk:600,
        sp:15,
        hitfix:30
      }],
      ...basicCommon
    }
  ],
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
    enemyChessDead: (state, actions)=> {
      const { key } = actions.payload;
      state[key].debut = false;
      state[key].hp = state[key].fullValue.hp;
      state[key].sp = state[key].fullValue.sp;
    }
  }
});
export default enemyChess.reducer;
export const { enemyStageDebut, enemyChessSelected, enemyChessCheckStatus, enemyChessDefense, enemyChessDead } = enemyChess.actions;