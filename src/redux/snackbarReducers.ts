import { AnyAction } from '@reduxjs/toolkit';
import {
  SNACKBAR_ERROR,
  SNACKBAR_SUCCESS,
  SNACKBAR_CLOSE,
} from '../constants/actionsTypes';

const initialSnackbarState = {
  successSnackbarOpen: false,
  errorSnackbarOpen: false,
  msg: '',
};

export type SnackbarState = typeof initialSnackbarState;

export const snackbarReducer = (
  state = initialSnackbarState,
  action: AnyAction
): SnackbarState => {
  switch (action.type) {
    case SNACKBAR_ERROR:
      return { ...state, errorSnackbarOpen: true, msg: action.payload };
    case SNACKBAR_SUCCESS:
      return {
        ...state,
        successSnackbarOpen: true,
        msg: 'Success, open result page to see result',
      };
    case SNACKBAR_CLOSE:
      return initialSnackbarState;
    default:
      break;
  }
  return state;
};
