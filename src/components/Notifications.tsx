import React from 'react';
import { Alert, Snackbar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { closeSnackbar } from '../redux/actions';
import { RootState } from '../redux/store';

const Notifications = () => {
  const dispatch = useDispatch();
  const snackBarData = useSelector((state: RootState) => state.snackbar);

  const handleClose = () => dispatch(closeSnackbar());

  const isOpen =
    snackBarData.errorSnackbarOpen || snackBarData.successSnackbarOpen;

  const msg = snackBarData.msg;

  const severity = snackBarData.errorSnackbarOpen ? 'error' : 'success';

  return (
    <Snackbar
      className={`snackbar--${severity}`}
      open={isOpen}
      autoHideDuration={4000}
      onClose={handleClose}
      TransitionProps={{
        exit: false,
      }}
    >
      <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
        {msg}
      </Alert>
    </Snackbar>
  );
};

export default Notifications;
