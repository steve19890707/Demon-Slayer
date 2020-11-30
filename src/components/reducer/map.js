const createTraverseLine = (traverse=0,color='')=>{
  const list = [];
  for(let i=0;i<20;i++){
    list.push({
      x:i,
      y:traverse,
      color:color,
    });
  };
  return list;
};
const createStraightLine = ( method=()=>{} )=>{
  const list = [];
  for(let i=0;i<15;i++){
    list.push(method(i,'0x383838'));
  };
  return list;
};
const initialState = createStraightLine(createTraverseLine);
export default function updateMap(state=initialState ,action) {
  switch (action.type) {
    case 'MoveSelect': {
      const px = action.position.x;
      const py = action.position.y;
      state[py][px+1].color = '0xffff';
      return state
    }
    default:
      return state
  }
};

