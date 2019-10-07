import axios from 'axios';

export default {
  login: (data) => {
    const { login, password } = data;

    return axios.post(`${process.env.REACT_APP_API_URL}/user/login`, {
      username: login,
      password: password
    })
  },

  logout: () => {
    return axios.post(`${process.env.REACT_APP_API_URL}/user/logout`)
  }
};