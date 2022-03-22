import React from 'react';
import { Button, Grid, MenuItem, TextField } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import * as yup from 'yup';
import { DatePicker, LocalizationProvider } from '@mui/lab';
import { useFormik } from 'formik';
import { calculateResult } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { CommisionformValues, SupportedCurrencies } from '../types';
import { RootState } from '../redux/store';

const validationSchema = yup.object({
  clientId: yup.number().min(1).required('client_id is required'),
  amount: yup
    .number()
    .min(0.01)
    .max(Number.MAX_SAFE_INTEGER)
    .required('amount is required'),
  date: yup.date().required('Date is required').typeError('Invalid Date'),
  currency: yup
    .mixed<SupportedCurrencies>()
    .oneOf(Object.values(SupportedCurrencies))
    .required('Currency is required'),
});

function CommisionForm() {
  const dispatch = useDispatch();

  const submittingStatus = useSelector((state: RootState) => {
    return state.result.status;
  });

  const initialValues: CommisionformValues = {
    clientId: 1,
    amount: 100,
    date: new Date(),
    currency: SupportedCurrencies.EUR,
  };

  const { values, handleChange, errors, setFieldValue, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: validationSchema,
      onSubmit: (values) => {
        dispatch(calculateResult(values));
      },
    });

  return (
    <form onSubmit={handleSubmit}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <TextField
              fullWidth
              id="amount"
              name="amount"
              label="amount"
              value={values.amount}
              onChange={handleChange}
              type="number"
              error={Boolean(errors.amount)}
              helperText={errors.amount}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              id="clientId"
              name="clientId"
              label="client_id"
              value={values.clientId}
              onChange={handleChange}
              type="number"
              error={Boolean(errors.clientId)}
              helperText={errors.clientId}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              id="demo-simple-select"
              name="currency"
              label="currency"
              value={values.currency}
              onChange={handleChange}
              select
              error={Boolean(errors.currency)}
            >
              {Object.values(SupportedCurrencies).map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={8}>
            <DatePicker
              label="date"
              value={values.date}
              onChange={(value) => setFieldValue('date', value)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  fullWidth={true}
                  error={Boolean(errors.date)}
                  helperText={errors.date}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              data-testid="submit-button"
              disabled={
                Object.keys(errors).length !== 0 ||
                submittingStatus === 'loading'
              }
              color="primary"
              variant="contained"
              fullWidth
              type="submit"
            >
              Calculate
            </Button>
          </Grid>
        </Grid>
      </LocalizationProvider>
    </form>
  );
}

export default CommisionForm;
