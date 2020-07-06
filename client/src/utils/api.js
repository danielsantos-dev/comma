import axios from 'axios';

const api = axios.create({
  baseURL: '/dataCommma',
  headers: {
    'Content-Type': 'application/json'
  }
});
/**
 intercept the error responses from the api
 and check if the token is no longer valid.
 ie. Token has expired
 logout the user if the token has expired, let´s go
**/

export default api;
