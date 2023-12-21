/* eslint-disable testing-library/no-debugging-utils */
/* eslint-disable testing-library/no-unnecessary-act */

import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '../../../utils/test-utils';
import DashboardFundings from './DashboardFundings';
import { screen, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

describe('Render Dashboard Fundings Component', () => {
  test('Render Dashboard Fundings Component with first page', async () => {
    renderWithProviders(<DashboardFundings />);
    expect(
      screen.getByPlaceholderText('Search by account id')
    ).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.getByText('John Doe')).toBeInTheDocument();
    });
  });
  test('Render Dashboard Fundings Component with second page', async () => {
    renderWithProviders(<DashboardFundings />);
    expect(
      screen.getByPlaceholderText('Search by account id')
    ).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.getByText('John Doe')).toBeInTheDocument();
    });
    const nextPageButton = screen.getByTestId(
      'next-page-pagination-btn'
    );
    act(() => {
      userEvent.click(nextPageButton);
    });
    await waitFor(() => {
      expect(screen.getByText('Jane')).toBeInTheDocument();
    });
  });
});
