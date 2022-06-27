import axios from 'axios';
import { IUser } from '../types/types';

export const authAPI = {
  logIn: () => {
    return axios.get<IUser[]>('./users.json');
  },
};
