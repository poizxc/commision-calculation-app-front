import { screen } from '@testing-library/react';

import App from './App';
import { RootState } from './redux/store';
describe('App component ', () => {
  it('should render app without errors', () => {
    renderWithState(<App />, { initialState: {} as RootState });
    expect(screen.getByText('calculate')).toBeInTheDocument();
    expect(screen.getByText('result')).toBeInTheDocument();
  });
});
