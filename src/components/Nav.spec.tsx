import { screen } from '@testing-library/react';
import { CALCULATE_COMMISION_PAGE, RESULTS_PAGE } from '../constants/pages';

import Nav from './Nav';

describe('Nav spec', () => {
  it('should show nav and have proper links', () => {
    const { getByText } = renderWithState(<Nav />, {
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
    const resultButton = getByText('result');
    const calculateButton = getByText('calculate');

    expect(screen.getByText('calculate')).toBeInTheDocument();
    expect(screen.getByText('result')).toBeInTheDocument();
    expect(resultButton.closest('a')).toHaveAttribute('href', RESULTS_PAGE);
    expect(calculateButton.closest('a')).toHaveAttribute(
      'href',
      CALCULATE_COMMISION_PAGE
    );
  });
});
