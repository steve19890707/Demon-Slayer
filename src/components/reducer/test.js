const initialState = '0x00000';
export default function test(state=initialState ,action) {
  switch (action.type) {
    case 'COLOR': {
      state='0xffffff'
      return state
    }
    default:
      return state
  }
};