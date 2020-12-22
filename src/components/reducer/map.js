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
    MoveSelect:(state, action)=>{
      const { position, step, changeColor } = action.payload;
      for(let i=0;i<(step+1);i++){
        if(position.x+i<=(mapLimit.x-1)){
          state[position.y][position.x+i].color=changeColor;
          state[position.y][position.x+i].isInteractive=false;
        };
        if(position.y+i<=(mapLimit.y-1)){
          state[position.y+i][position.x].color=changeColor;
          state[position.y+i][position.x].isInteractive=false;
        };
        if(position.x-i>=0){
          state[position.y][position.x-i].color=changeColor;
          state[position.y][position.x-i].isInteractive=false;
        };
        if(position.y-i>=0){
          state[position.y-i][position.x].color=changeColor;
          state[position.y-i][position.x].isInteractive=false;
        };
      }
    },
    GetMove:(state, action)=>{
      const { position, step, changeColor, currentChessPositions } = action.payload;
      for(let i=0;i<(step+1);i++){
        if(position.x+i<=(mapLimit.x-1)){
          state[position.y][position.x+i].color=changeColor;
          state[position.y][position.x+i].isInteractive=true;
        };
        if(position.y+i<=(mapLimit.y-1)){
          state[position.y+i][position.x].color=changeColor;
          state[position.y+i][position.x].isInteractive=true;
        };
        if(position.x-i>=0){
          state[position.y][position.x-i].color=changeColor;
          state[position.y][position.x-i].isInteractive=true;
        };
        if(position.y-i>=0){
          state[position.y-i][position.x].color=changeColor;
          state[position.y-i][position.x].isInteractive=true;
        };
      }
      currentChessPositions.map(v=>{
        return state[v.y][v.x].isInteractive=false;
      });
    }
  }
});
export default chessMap.reducer;
export const { MoveSelect, GetMove } = chessMap.actions;
