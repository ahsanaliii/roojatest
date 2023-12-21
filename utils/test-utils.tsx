import React, { PropsWithChildren } from 'react';
import { cleanup, render } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import {
  setupStore,
  type AppStore,
  type RootState,
} from '../src/store/store';
// As a basic setup, import your same slice reducers
afterEach(() => {
  cleanup();
});
// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions
  extends Omit<RenderOptions, 'queries'> {
  preloadedState?: Partial<RootState>;
  store?: AppStore;
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    // Automatically create a store instance if no store was passed in
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return (
      <Provider store={store}>
        <MemoryRouter>{children}</MemoryRouter>
      </Provider>
    );
  }

  // Return an object with the store and all of RTL's query functions
  return {
    store,
    ...render(ui, { wrapper: Wrapper, ...renderOptions }),
  };
}
