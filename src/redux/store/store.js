import { configureStore } from '@reduxjs/toolkit';
import { profileSlice } from '../Slices/profileSlice';
import {todosSlice }from '../Slices/todosSlice';
import {plansummarySlice} from '../Slices/plansummarySlice'



export default configureStore({
  reducer: {
    profile: profileSlice.reducer,
   todos: todosSlice.reducer,
   total: plansummarySlice.reducer
  },
});

