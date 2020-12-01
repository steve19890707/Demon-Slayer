import { createSlice } from '@reduxjs/toolkit';
const mapLimit = { x:20, y:15 };
const createTraverseLine = (traverse=0,color='')=>{
  const list = [];
  for(let i=0;i<mapLimit.x;i++){
    list.push({
      x:i,
      y:traverse,
      color:color,
      isInteractive:false
    });
  };
  return list;
};
const createStraightLine = ( method=()=>{} )=>{
  const list = [];
  for(let i=0;i<mapLimit.y;i++){
    list.push(method(i,'0x383838'));
  };
  return list;
};
const createInitialState = createStraightLine(createTraverseLine);
const chessMap = createSlice({
  name:'chessMap',
  initialState: createInitialState,
  reducers:{
    MoveSelect: (state, action)=>{
      const { position, step, changeColor } = action.payload;
      for(let i=0;i<(step+1);i++){
        if(position.x+i<=(mapLimit.x-1)){
          state[position.y][position.x+i].color=changeColor;
        };
        if(position.y+i<=(mapLimit.y-1)){
          state[position.y+i][position.x].color=changeColor;
        };
        if(position.x-i>=0){
          state[position.y][position.x-i].color=changeColor;
        };
        if(position.y-i>=0){
          state[position.y-i][position.x].color=changeColor;
        };
      }
    }
  }
});
export default chessMap.reducer;
export const { MoveSelect } = chessMap.actions;
