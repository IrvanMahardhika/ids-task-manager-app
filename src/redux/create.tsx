import asyncStorage from '@react-native-async-storage/async-storage';
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import reducer from './modules/reducer';

let TypeOfRootState: any;
let TypeOfAppDispatch: any;

const createStore = () => {
  const persistConfig = {
    key: 'root',
    storage: asyncStorage,
    whitelist: ['auth'],
  };

  const persistedReducer = persistReducer(persistConfig, reducer);
  const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  });

  TypeOfRootState = store.getState;
  TypeOfAppDispatch = store.dispatch;

  return store;
};

export type RootState = ReturnType<typeof TypeOfRootState>;
export type AppDispatch = typeof TypeOfAppDispatch;

export default createStore;
