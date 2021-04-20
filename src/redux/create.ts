import {configureStore} from '@reduxjs/toolkit';
import reducer from './modules/reducer';

let TypeOfRootState: any;
let TypeOfAppDispatch: any;

const createStore = () => {
  const store = configureStore({
    reducer,
  });
  TypeOfRootState = store.getState;
  TypeOfAppDispatch = store.dispatch;
  return store;
};

export type RootState = ReturnType<typeof TypeOfRootState>;
export type AppDispatch = typeof TypeOfAppDispatch;

export default createStore;
