import { createSlice } from '@reduxjs/toolkit';
const basicCommon = {
  x:0,
  y:0,
  checkStatus:false,
  boardStatus:false,
  debut:false,
  roundAttack:false,
};
const chess = createSlice({
  name:'chess',
  initialState:[
    {
      name:'Tanjirou',
      cn:'竃門 碳治郎',
      step:3,
      hp:1000,
      sp:100,
      fullValue:{
        hp:1000,
        sp:100
      },
      skill:[{ 
        name:'斬擊',
        atk:20,
        sp:0
      },{ 
        name:'叄之型―流流舞',
        atk:120,
        sp:5
      },{ 
        name:'捌之型―滝壺',
        atk:120,
        sp:5
      },{
        name:'拾之型―生生流轉',
        atk:250,
        sp:10
      }],
      ...basicCommon
    },{
      name:'Nezuko',
      step:2,
      ...basicCommon
    },{
      name:'Inosuke',
      step:4,
      ...basicCommon
    }
  ],
  reducers:{
    stageDebut:(state, actions)=> {
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
    chessMove: (state, actions)=>{
      const { key, changeX, changeY } = actions.payload;
      state[key].x = changeX;
      state[key].y = changeY;
    },
    chessSelected: (state, actions)=>{
      const { key } = actions.payload;
      state[key].boardStatus = !state[key].boardStatus;
    },
    chessCheckStatus: (state, actions)=> {
      const { key } = actions.payload;
      state[key].checkStatus = !state[key].checkStatus;
    }
  }
});
export default chess.reducer;
export const { 
  stageDebut, chessMove, chessSelected, chessCheckStatus 
} = chess.actions;