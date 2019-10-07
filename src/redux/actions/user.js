import userApi from 'utils/api/user';

const Actions = {
  setUser: user => ({
    type: 'USER:SET_DATA',
    payload: user
  }),
  unsetUser: () => ({
    type: 'USER:UNSET_DATA'
  }),
  loginUser: (data) => dispatch => {
    return userApi.login(data).then(({data}) => {
      localStorage.setItem('token', data.token)
      dispatch(Actions.setUser(data))
    })
  },
  logoutUser: () => dispatch => {
    localStorage.removeItem('token');
    dispatch(Actions.unsetUser())
  }
};

export default Actions;