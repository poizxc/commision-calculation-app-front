import { screen } from '@testing-library/react';

import Notifications from './Notifications';

describe('Notifications spec', () => {
  it('should show msg for success snackbar', () => {
    const successClassname = 'snackbar--success';
    const testMsg = 'testMsg';

    const { container } = renderWithState(<Notifications />, {
      initialState: {
        result: {
          status: 'inital',
          results: [],
        },
        snackbar: {
          successSnackbarOpen: true,
          errorSnackbarOpen: false,
          msg: testMsg,
        },
      },
    });

    expect(screen.getByText(testMsg)).toBeInTheDocument();
    expect(container.getElementsByClassName(successClassname).length).toBe(1);
  });

  it('should show msg for error snackbar', () => {
    const errorClassname = 'snackbar--error';

    const testMsg = 'testMsg';

    const { container } = renderWithState(<Notifications />, {
      initialState: {
        result: {
          status: 'inital',
          results: [],
        },
        snackbar: {
          successSnackbarOpen: false,
          errorSnackbarOpen: true,
          msg: testMsg,
        },
      },
    });

    expect(screen.getByText(testMsg)).toBeInTheDocument();
    expect(container.getElementsByClassName(errorClassname).length).toBe(1);
  });
});
