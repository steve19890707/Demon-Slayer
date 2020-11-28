const initialState = {
  Tanjirou:{
    x:10,
    y:10,
  },
  Nezuko:{
    x:12,
    y:12,
  },
  Inosuke:{
    x:20,
    y:15
  }
}
export default function chessMove(state=initialState ,action) {
  switch (action.type) {
    case action.type: {
      const type = action.type;
      if(state[type]&&state[type]){
        state[type].x=action.x;
        state[type].y=action.y;
      };
      return state
    }
    default:
      return state
  }
};