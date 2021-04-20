import {createSlice} from '@reduxjs/toolkit';
import axios from '@supports/api';
import {encrypt} from '@supports/helpers/encryption';
import {AppDispatch} from '../create';
import {startLoading, stopLoading} from './loading';

interface InitialState {
  id: number | null;
  name: string;
  email: string;
  token: string | null;
}

const initialState: InitialState = {
  id: null,
  name: '',
  email: '',
  token: null,
};

const {actions, reducer} = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state = action.payload;
    },
    logout: () => {
      initialState;
    },
  },
});

export default reducer;

export const {login, logout} = actions;

type SignInData = {
  email: string;
  password: string;
};

export const signIn = (data: SignInData) => async (dispatch: AppDispatch) => {
  try {
    dispatch(startLoading());
    const {email, password} = data;
    const encriptedPassword = encrypt(password);
    const signInResult = await axios.get('user/login', {
      params: {
        email,
        password: encriptedPassword,
      },
    });
    dispatch(login(signInResult.data));
    dispatch(stopLoading());
  } catch (error) {
    console.log(error);
  }
};

export const signOut = () => (dispatch: AppDispatch) => {
  try {
    dispatch(logout());
  } catch (error) {
    console.log(error);
  }
};
