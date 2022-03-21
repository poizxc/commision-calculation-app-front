import { createStore } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { JSXElementConstructor, ReactElement } from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { reducer, RootState } from './redux/store';

export const renderWithState = (
  ui: ReactElement<any, string | JSXElementConstructor<any>>,
  { initialState, ...renderOptions }: { initialState: RootState }
) => {
  const store = createStore(reducer, initialState);

  const Wrapper = ({ children }: { children: ReactElement }) => (
    <MemoryRouter>
      <Provider store={store}>{children}</Provider>
    </MemoryRouter>
  );

  return render(ui, {
    wrapper: Wrapper,
    ...renderOptions,
  });
};
