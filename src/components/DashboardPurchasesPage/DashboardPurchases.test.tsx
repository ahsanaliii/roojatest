/* eslint-disable testing-library/no-unnecessary-act */

import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '../../../utils/test-utils';
import DashboardPurchases from './DashboardPurchases';
import { screen, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

describe('Render Dashboard Purchases Component', () => {
  test('Render Dashboard Purchases Component with first page', async () => {
    renderWithProviders(<DashboardPurchases />);
    expect(
      screen.getByPlaceholderText('Search by account id')
    ).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.getByText('Jane')).toBeInTheDocument();
    });
  });
  test('Render Dashboard Purchases Component with second page', async () => {
    renderWithProviders(<DashboardPurchases />);
    await waitFor(() => {
      expect(screen.getByText('Jane')).toBeInTheDocument();
    });
    const nextPageButton = screen.getByTestId(
      'next-page-pagination-btn'
    );
    act(() => {
      userEvent.click(nextPageButton);
    });
    await waitFor(() => {
      expect(screen.getByText('Alice')).toBeInTheDocument();
    });
  });
});
