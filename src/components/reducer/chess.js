import { createSlice } from '@reduxjs/toolkit';
const chess = createSlice({
  name:'chess',
  initialState:[
    {
      name:'Tanjirou',
      x:3,
      y:10,
      step:3
    },{
      name:'Nezuko',
      x:3,
      y:12,
      step:2
    },{
      name:'Inosuke',
      x:4,
      y:11,
      step:4
    }
  ],
  reducers:{
    chessMove: (state, action)=>{
      console.log(state)
    }
  }
});
export default chess.reducer;
export const { chessMove } = chess.actions;