import { render, screen } from '@testing-library/react';

import Error from './Error';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

describe('---------Render Error Components------------', () => {
  test('Render Error Components', () => {
    render(
      <RouterProvider
        router={createBrowserRouter(
          createRoutesFromElements(
            <Route path='/'>
              <Route index element={<Error />}></Route>
            </Route>
          )
        )}
      />
    );
    expect(
      screen.getByText('Something went wrong 😢')
    ).toBeInTheDocument();
  });
});
