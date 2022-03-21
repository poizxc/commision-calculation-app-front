// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { renderWithState as renderWithStateFn } from './tests.wraper';

//@ts-expect-error
global.renderWithState = renderWithStateFn;

declare global {
  const renderWithState: typeof renderWithStateFn;
}