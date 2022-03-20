import { AnyAction } from '@reduxjs/toolkit';
import {
  CALCULATE_RESULT_LOADING,
  CALCULATE_RESULT_SUCCESS,
  CALCULATE_RESULT_ERROR,
} from '../constants/actionsTypes';
import {
  ResultStatus,
  CalculationRequestResponse,
  CommisionformValues,
} from '../types';

export type ResultState = {
  status: ResultStatus;
  results: Array<{
    responseData: CalculationRequestResponse;
    requestData: CommisionformValues;
  }>;
};

const initalResultState: ResultState = {
  status: 'inital',
  results: [],
};

export const resultReducer = (
  state = initalResultState,
  action: AnyAction
): ResultState => {
  switch (action.type) {
    case CALCULATE_RESULT_LOADING:
      return { ...state, status: 'loading' };
    case CALCULATE_RESULT_SUCCESS:
      return {
        ...state,
        status: 'success',
        results: [action.payload, ...state.results],
      };
    case CALCULATE_RESULT_ERROR:
      return { ...state, status: 'error' };
    default:
      break;
  }
  return state;
};
