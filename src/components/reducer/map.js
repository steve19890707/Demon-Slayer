const createTraverseLine = (traverse=0,color='')=>{
  const list = [];
  for(let i=0;i<20;i++){
    list.push({
      x:i,
      y:traverse,
      color:color,
      name:'none'
    });
  };
  return list;
};
const createStraightLine = ( method=()=>{} )=>{
  const list = [];
  for(let i=0;i<15;i++){
    list.push(method(i,'0x00bcd4'));
  };
  return list;
};
const initialState = createStraightLine(createTraverseLine);
export default function updateMap(state=initialState ,action) {
  switch (action.type) {
    case 'IsChess': {
      const xkey = action.Xkey ? action.Xkey : 0;
      const ykey = action.Ykey ? action.Ykey : 0;
      state[ykey][xkey].name = action.name;
      return state
    }
    default:
      return state
  }
};

