import { screen } from '@testing-library/react';
import { SupportedCurrencies } from '../types';

import Results from './Results';

describe('Results spec', () => {
  it('should show msg for empty results ', () => {
    renderWithState(<Results />, {
      initialState: {
        result: {
          status: 'inital',
          results: [],
        },
        snackbar: {
          successSnackbarOpen: false,
          errorSnackbarOpen: false,
          msg: '',
        },
      },
    });
    expect(
      screen.getByText('To see some results use calculate form first :)')
    ).toBeInTheDocument();
  });

  it('should show result list when having results ', () => {
    renderWithState(<Results />, {
      initialState: {
        result: {
          status: 'inital',
          results: [
            {
              responseData: {
                currency: SupportedCurrencies.EUR,
                amount: '22222',
              },
              requestData: {
                clientId: 1,
                amount: 1,
                date: new Date(),
                currency: SupportedCurrencies.EUR,
              },
            },
            {
              responseData: {
                currency: SupportedCurrencies.EUR,
                amount: '1111',
              },
              requestData: {
                clientId: 1,
                amount: 1,
                date: new Date(),
                currency: SupportedCurrencies.EUR,
              },
            },
          ],
        },
        snackbar: {
          successSnackbarOpen: false,
          errorSnackbarOpen: false,
          msg: '',
        },
      },
    });
    expect(screen.getByText('Results:')).toBeInTheDocument();
    expect(screen.getByText('Result 1:')).toBeInTheDocument();
    expect(screen.getByText('Result 2:')).toBeInTheDocument();
  });
});
