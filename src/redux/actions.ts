import { CALCULATE_ENDPOINT } from '../constants/endpoints';
import {
  CALCULATE_RESULT_LOADING,
  CALCULATE_RESULT_SUCCESS,
  CALCULATE_RESULT_ERROR,
  SNACKBAR_SUCCESS,
  SNACKBAR_ERROR,
  SNACKBAR_CLOSE,
} from '../constants/actionsTypes';
import { Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';
import { CommisionformValues } from '../types';
import { mapCalculationData } from '../utils';

export const calculateResult =
  (calculationData: CommisionformValues) => async (dispatch: Dispatch) => {
    dispatch({ type: CALCULATE_RESULT_LOADING });
    const mapped = mapCalculationData(calculationData);

    try {
      const { data } = await axios.post(CALCULATE_ENDPOINT, mapped);
      dispatch({
        type: CALCULATE_RESULT_SUCCESS,
        payload: { responseData: data, requestData: mapped },
      });
      dispatch({ type: SNACKBAR_SUCCESS });
    } catch (error) {
      dispatch({ type: CALCULATE_RESULT_ERROR });
      dispatch({ type: SNACKBAR_ERROR, payload: 'Api failed' });
    }
  };

export const closeSnackbar = () => ({
  type: SNACKBAR_CLOSE,
});
