/* eslint-disable testing-library/no-unnecessary-act */

import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '../../../utils/test-utils';
import DashboardWithdrawals from './DashboardWithdrawals';
import { screen, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

describe('Render Dashboard Withdrawals Component', () => {
  test('Render Dashboard Withdrawals Component with first page', async () => {
    renderWithProviders(<DashboardWithdrawals />);
    expect(
      screen.getByPlaceholderText('Search by account id')
    ).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.getByText('John')).toBeInTheDocument();
    });
  });
  test('Render Dashboard Withdrawals Component with second page', async () => {
    renderWithProviders(<DashboardWithdrawals />);
    await waitFor(() => {
      expect(screen.getByText('John')).toBeInTheDocument();
    });
    const nextPageButton = screen.getByTestId(
      'next-page-pagination-btn'
    );
    act(() => {
      userEvent.click(nextPageButton);
    });
    await waitFor(() => {
      expect(screen.getByText('John8979')).toBeInTheDocument();
    });
  });
});
