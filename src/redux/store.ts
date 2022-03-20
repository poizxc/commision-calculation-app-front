import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { resultReducer } from './resultReducer';
import { snackbarReducer } from './snackbarReducers';

export const store = configureStore({
  reducer: combineReducers({
    result: resultReducer,
    snackbar: snackbarReducer,
  }),
  devTools: true,
  middleware: [thunk],
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
