import { createSlice } from '@reduxjs/toolkit';
const basicCommon = {
  x:0,
  y:0,
  boardStatus:false,
  debut:false,
};
const enemyChess = createSlice({
  name:'enemyChess',
  initialState:[
    {
      name:'Teoni',
      ...basicCommon
    },{
      name:'Nomanooni',
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
    }
  }
});
export default enemyChess.reducer;
export const { enemyStageDebut, enemyChessSelected } = enemyChess.actions;