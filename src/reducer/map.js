import { createSlice } from '@reduxjs/toolkit';
const mapLimit = { x:20, y:15 };
const createTraverseLine = (traverse=0,color='')=>{
  const list = [];
  for(let i=0;i<mapLimit.x;i++){
    list.push({
      x:i,
      y:traverse,
      color:color,
      alpha:0,
      zIndex:1,
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
      const { position, step, changeColor, alphaVal=1} = action.payload;
      for(let i=0;i<(step+1);i++){
        if(position.x+i<=(mapLimit.x-1)){
          state[position.y][position.x+i].color=changeColor;
          state[position.y][position.x+i].isInteractive=false;
          state[position.y][position.x+i].alpha=alphaVal;
          state[position.y][position.x+i].zIndex=1;
        };
        if(position.y+i<=(mapLimit.y-1)){
          state[position.y+i][position.x].color=changeColor;
          state[position.y+i][position.x].isInteractive=false;
          state[position.y+i][position.x].alpha=alphaVal;
          state[position.y+i][position.x].zIndex=1;
        };
        if(position.x-i>=0){
          state[position.y][position.x-i].color=changeColor;
          state[position.y][position.x-i].isInteractive=false;
          state[position.y][position.x-i].alpha=alphaVal;
          state[position.y][position.x-i].zIndex=1;
        };
        if(position.y-i>=0){
          state[position.y-i][position.x].color=changeColor;
          state[position.y-i][position.x].isInteractive=false;
          state[position.y-i][position.x].alpha=alphaVal;
          state[position.y-i][position.x].zIndex=1;
        };
      }
    },
    GetMove:(state, action)=>{
      const { position, step, changeColor, currentChessPositions } = action.payload;
      for(let i=0;i<(step+1);i++){
        if(position.x+i<=(mapLimit.x-1)){
          state[position.y][position.x+i].color=changeColor;
          state[position.y][position.x+i].isInteractive=true;
          state[position.y][position.x+i].alpha=0.5;
          state[position.y][position.x+i].zIndex=1;
        };
        if(position.y+i<=(mapLimit.y-1)){
          state[position.y+i][position.x].color=changeColor;
          state[position.y+i][position.x].isInteractive=true;
          state[position.y+i][position.x].alpha=0.5;
          state[position.y+i][position.x].zIndex=1;
          state[position.y][position.x-i].alpha=0.5;
          state[position.y][position.x-i].zIndex=1;
        };
        if(position.x-i>=0){
          state[position.y][position.x-i].color=changeColor;
          state[position.y][position.x-i].isInteractive=true;
        };
        if(position.y-i>=0){
          state[position.y-i][position.x].color=changeColor;
          state[position.y-i][position.x].isInteractive=true;
          state[position.y-i][position.x].alpha=0.5;
          state[position.y-i][position.x].zIndex=1;
        };
      }
      currentChessPositions.map(v=>{
        return state[v.y][v.x].isInteractive=false;
      });
    },
    GetAttack:(state, action)=>{
      const { position, step, changeColor, currentChessPositions } = action.payload;
      for(let i=0;i<(step+1);i++){
        if(position.x+i<=(mapLimit.x-1)){
          state[position.y][position.x+i].color=changeColor;
          state[position.y][position.x+i].isInteractive=true;
          state[position.y][position.x+i].alpha=0.5;
          state[position.y][position.x+i].zIndex=3;
        };
        if(position.y+i<=(mapLimit.y-1)){
          state[position.y+i][position.x].color=changeColor;
          state[position.y+i][position.x].isInteractive=true;
          state[position.y+i][position.x].alpha=0.5;
          state[position.y+i][position.x].zIndex=3;
        };
        if(position.x-i>=0){
          state[position.y][position.x-i].color=changeColor;
          state[position.y][position.x-i].isInteractive=true;
          state[position.y][position.x-i].alpha=0.5;
          state[position.y][position.x-i].zIndex=3;
        };
        if(position.y-i>=0){
          state[position.y-i][position.x].color=changeColor;
          state[position.y-i][position.x].isInteractive=true;
          state[position.y-i][position.x].alpha=0.5;
          state[position.y-i][position.x].zIndex=3;
        };
      }
      currentChessPositions.map(v=>{
        return (
          state[v.y][v.x].isInteractive=false,
          state[v.y][v.x].zIndex=1
        )
      });
    }
  }
});
export default chessMap.reducer;
export const { MoveSelect, GetMove, GetAttack } = chessMap.actions;
