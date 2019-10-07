const initialState = {
  user: null
};
export default (state = initialState, {type, payload}) => {
  switch(type) {
    case 'USER:SET_DATA':
      return payload
    case 'USER:UNSET_DATA':
      return initialState;
    default:
      return state;
  }
}