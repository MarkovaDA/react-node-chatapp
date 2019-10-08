const initialState = {
  user: null
};
export default (state = initialState, {type, payload}) => {
  switch(type) {
    case 'USER:SET_DATA':
      return {
        ...state,
         user: {...state.user, ...payload}
      }
    case 'USER:UNSET_DATA':
      return {
        ...state,
        user: null
      };
    default:
      return state;
  }
}