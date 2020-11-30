const initialState = [
  {
    name:'Tanjirou',
    x:3,
    y:10,
    move:3
  },{
    name:'Nezuko',
    x:3,
    y:12,
    move:2
  },{
    name:'Inosuke',
    x:4,
    y:11,
    move:4
  }
];
export default function chessMove(state=initialState ,action) {
  switch (action.type) {
    default:
      return state
  }
};