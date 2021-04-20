import {createSlice} from '@reduxjs/toolkit';

interface InitialState {
  isLoading: boolean;
}

const initialState: InitialState = {
  isLoading: false,
};

const {actions, reducer} = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    startLoading: state => {
      state.isLoading = true;
    },
    stopLoading: () => {
      initialState;
    },
  },
});

export default reducer;

export const {startLoading, stopLoading} = actions;
