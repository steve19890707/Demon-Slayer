import { createSlice } from '@reduxjs/toolkit';
const chess = createSlice({
  name:'chess',
  initialState:[
    {
      name:'Tanjirou',
      x:3,
      y:10,
      step:3,
      boardStatus:false
    },{
      name:'Nezuko',
      x:3,
      y:12,
      step:2,
      boardStatus:false
    },{
      name:'Inosuke',
      x:4,
      y:11,
      step:4,
      boardStatus:false
    }
  ],
  reducers:{
    chessMove: (state, actions)=>{
      const { key, changeX, changeY } = actions.payload;
      state[key].x = changeX;
      state[key].y = changeY;
    },
    chessSelected: (state, actions)=>{
      const { key } = actions.payload;
      state[key].boardStatus = !state[key].boardStatus;
    }
  }
});
export default chess.reducer;
export const { chessMove, chessSelected } = chess.actions;