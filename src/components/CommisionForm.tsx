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
  clientId: yup.string().min(1).required('client_id is required'),
  amount: yup.number().min(0.00001).required('amount is required'),
  date: yup.date().required('date is required'),
  currency: yup
    .mixed<SupportedCurrencies>()
    .oneOf(Object.values(SupportedCurrencies))
    .required('currency is required'),
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

  const { values, handleChange, touched, errors, setFieldValue, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: validationSchema,
      onSubmit: (values) => {
        dispatch(calculateResult(values));
      },
    });

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <TextField
              fullWidth
              id="amount"
              name="amount"
              label="Amount"
              type="number"
              InputProps={{ inputProps: { min: 0.0001, step: '0.0001' } }}
              value={values.amount}
              onChange={handleChange}
              error={touched.amount && Boolean(errors.amount)}
              helperText={touched.amount && errors.amount}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              id="clientId"
              name="clientId"
              label="client_id"
              type="number"
              InputProps={{ inputProps: { min: 0 } }}
              value={values.clientId}
              onChange={handleChange}
              error={touched.clientId && Boolean(errors.clientId)}
              helperText={touched.clientId && errors.clientId}
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
              error={touched.currency && Boolean(errors.currency)}
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
              label="Date"
              value={values.date}
              onChange={(value) => setFieldValue('date', value)}
              renderInput={(params) => (
                <TextField
                  fullWidth={true}
                  error={touched.date && Boolean(errors.date)}
                  helperText={touched.date && errors.date}
                  {...params}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
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
      </form>
    </LocalizationProvider>
  );
}

export default CommisionForm;
