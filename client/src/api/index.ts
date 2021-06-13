import axios from 'axios';

export const baseAxios = axios.create({
  baseURL: 'http://localhost:5000',
});
