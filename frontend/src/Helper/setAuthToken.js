// import axios from 'axios';
import api from '../Api';

const setAuthToken = token => {
  if (token) {
    // axios.defaults.headers.common['x-auth-token'] = token;
    api.defaults.headers.common['x-auth-token'] = token;
  } else {
    delete api.defaults.headers.common['x-auth-token']
  }
}

export default setAuthToken;