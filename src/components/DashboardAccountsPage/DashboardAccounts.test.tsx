/* eslint-disable testing-library/no-unnecessary-act */
import DashboardAccounts from './DashboardAccounts.tsx';
import { renderWithProviders } from '../../../utils/test-utils';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';

describe('-----Unit Tests for testing dashboard accounts table-----', () => {
  test('renders dashboard accounts  component with first page account details', async () => {
    renderWithProviders(<DashboardAccounts />);
    const table = screen.getByRole('table');
    expect(table).toBeInTheDocument();
    const firstNameInputElement =
      screen.getByLabelText(/First Name/i);
    const lastNameInputElement = screen.getByLabelText(/Last name/i);
    const emailInputElement = screen.getByLabelText(/Email/i);
    await waitFor(() => {
      expect(screen.getByText('xyz@example')).toBeInTheDocument();
    });
    expect(firstNameInputElement).toBeInTheDocument();
    expect(emailInputElement).toBeInTheDocument();
    expect(lastNameInputElement).toBeInTheDocument();
  });
  test('renders dashboard accounts  component with second page account details', async () => {
    renderWithProviders(<DashboardAccounts />);
    const table = screen.getByRole('table');
    expect(table).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.getByText('xyz@example')).toBeInTheDocument();
    });
    const nextPageButton = screen.getByTestId(
      'next-page-pagination-btn'
    );
    act(() => {
      userEvent.click(nextPageButton);
    });
    await waitFor(() => {
      expect(screen.getByText('page2@gmail.com')).toBeInTheDocument();
    });
  });
});
