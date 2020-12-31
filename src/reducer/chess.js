import { createSlice } from '@reduxjs/toolkit';
const basicCommon = {
  x:0,
  y:0,
  checkStatus:false,
  boardStatus:false,
  debut:false,
  roundMove:1
};
const chess = createSlice({
  name:'chess',
  initialState:[
    {
      name:'Tanjirou',
      cn:'竃門 碳治郎',
      step:3,
      attack:2,
      hp:1500,
      sp:100,
      dodge:65,
      fullValue:{
        hp:1500,
        sp:100
      },
      skill:[{ 
        name:'斬擊',
        atk:50,
        sp:0,
        hitfix:0
      },{ 
        name:'叄之型―流流舞',
        atk:200,
        sp:5,
        hitfix:10
      },{ 
        name:'捌之型―滝壺',
        atk:200,
        sp:5,
        hitfix:5
      },{
        name:'拾之型―生生流轉',
        atk:500,
        sp:10,
        hitfix:20
      }],
      ...basicCommon
    },{
      name:'Nezuko',
      step:2,
      attack:1,
      hp:2200,
      sp:200,
      dodge:50,
      fullValue:{
        hp:2200,
        sp:200
      },
      skill:[{ 
        name:'爪擊',
        atk:50,
        sp:0,
        hitfix:0
      },{ 
        name:'踢擊',
        atk:120,
        sp:5,
        hitfix:0
      },{ 
        name:'血鬼術',
        atk:1000,
        sp:100,
        hitfix:0
      }],
      ...basicCommon
    },{
      name:'Inosuke',
      cn:'嘴平 伊之助',
      step:4,
      attack:3,
      hp:1800,
      sp:80,
      dodge:40,
      fullValue:{
        hp:1800,
        sp:80
      },
      skill:[{ 
        name:'斬擊',
        atk:50,
        sp:0,
        hitfix:0
      },{ 
        name:'壹之牙―穿透刺射',
        atk:120,
        sp:2,
        hitfix:0
      },{ 
        name:'貳之牙―利刃對劈',
        atk:200,
        sp:5,
        hitfix:0
      },{
        name:'叄之牙―獠牙撕扯',
        atk:400,
        sp:8,
        hitfix:0
      }],
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
    },
    chessAttackResult: (state, actions)=> {
      const { key, lessSp } = actions.payload;
      state[key].sp -= lessSp;
    },
    chessMoved: (state, actions)=>{
      const { key } = actions.payload;
      state[key].roundMove -= 1;
    },
  }
});
export default chess.reducer;
export const { 
  stageDebut, chessMove, chessSelected, chessCheckStatus, chessAttackResult, chessMoved
} = chess.actions;