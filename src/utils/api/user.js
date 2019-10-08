import axios from './../axios';

export default {
  login: (data) => {
    const { login, password } = data;

    return axios.post('/user/login', {
      username: login,
      password: password
    })
  },
  getUser: () => {
    return axios.get('/user');
  },
  logout: () => {
    return axios.post('/user/logout')
  }
};