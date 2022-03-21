import CommisionForm from './CommisionForm';
import { fireEvent, screen, waitFor } from '@testing-library/react';

describe('CommisionForm spec', () => {
  it('should show CommisionForm with initial values', () => {
    const { getByDisplayValue } = renderWithState(<CommisionForm />, {
      initialState: {
        result: {
          status: 'inital',
          results: [],
        },
        snackbar: {
          successSnackbarOpen: true,
          errorSnackbarOpen: false,
          msg: '',
        },
      },
    });
    expect(getByDisplayValue('100')).toBeInTheDocument();
    expect(getByDisplayValue('1')).toBeInTheDocument();
    expect(getByDisplayValue('EUR')).toBeInTheDocument();
    expect(getByDisplayValue(getDateString(new Date()))).toBeInTheDocument();
  });

  it('should do not allow subbmition on invalid values and show correc messages', async () => {
    renderWithState(<CommisionForm />, {
      initialState: {
        result: {
          status: 'inital',
          results: [],
        },
        snackbar: {
          successSnackbarOpen: true,
          errorSnackbarOpen: false,
          msg: '',
        },
      },
    });

    const amountInput = screen.getByLabelText('amount');
    const clientInput = screen.getByLabelText('client_id');
    const submitButton = screen.getByTestId('submit-button');
    fireEvent.change(amountInput, { target: { value: 0 } });
    fireEvent.change(clientInput, { target: { value: -20 } });

    await waitFor(() => {
      expect(submitButton).toBeDisabled();
      expect(
        screen.getByText('amount must be greater than or equal to 0.01')
      ).toBeInTheDocument();
      expect(
        screen.getByText('clientId must be greater than or equal to 1')
      ).toBeInTheDocument();
    });
  });
});

it('should allow subbmition valid values', async () => {
  renderWithState(<CommisionForm />, {
    initialState: {
      result: {
        status: 'inital',
        results: [],
      },
      snackbar: {
        successSnackbarOpen: true,
        errorSnackbarOpen: false,
        msg: '',
      },
    },
  });

  const amountInput = screen.getByLabelText('amount');
  const clientInput = screen.getByLabelText('client_id');
  const submitButton = screen.getByTestId('submit-button');

  fireEvent.change(amountInput, { target: { value: 123 } });
  fireEvent.change(clientInput, { target: { value: 123123 } });

  await waitFor(() => {
    expect(submitButton).toBeEnabled();
  });
});

/**
 * returns date in MM/DD/YYYY format
 */
const getDateString = (dt: Date) => {
  const year = dt.getFullYear();
  const month = (1 + dt.getMonth()).toString();
  const day = dt.getDate().toString();

  return `${month.length > 1 ? month : `0${month}`}/${
    day.length > 1 ? day : `0${day}`
  }/${year}`;
};
