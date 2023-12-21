/* eslint-disable testing-library/no-debugging-utils */
import { withdrawalsDetailsDummyData } from '../../../mocks/unit-test-data';
import { renderWithProviders } from '../../../utils/test-utils';
import DashboardSingalFundingDetails from './DashboardSingalWithdrawalsDetails';
import { screen } from '@testing-library/react';

describe('Render Dashboard withdrawals details Component', () => {
  test('Render Dashboard withdrawals details with dummy data', async () => {
    renderWithProviders(
      <DashboardSingalFundingDetails
        withdrwalDetails={withdrawalsDetailsDummyData}
        onClose={() => {}}
      />
    );
    //   //// Withdrawals Details
    expect(
      screen.getByText('Withdrawals Details')
    ).toBeInTheDocument();
    expect(screen.getByText('Amount')).toBeInTheDocument();
    expect(screen.getByText('Balance')).toBeInTheDocument();
    expect(screen.getByText('tx_fee')).toBeInTheDocument();
    expect(screen.getByText('Currency')).toBeInTheDocument();
    expect(screen.getByText('USD')).toBeInTheDocument();
    expect(screen.getByText('Amount')).toBeInTheDocument();
    expect(screen.getByText('Currency Unit')).toBeInTheDocument();
    expect(screen.getByText('1008')).toBeInTheDocument();
    expect(screen.getByText('Account Id')).toBeInTheDocument();
    expect(screen.getByText('user123')).toBeInTheDocument();
    expect(screen.getByText('tx Ref')).toBeInTheDocument();
    expect(screen.getByText('Withdrawal Method')).toBeInTheDocument();
    expect(screen.getByText('bank_transfer')).toBeInTheDocument();
    expect(screen.getByText('Created At')).toBeInTheDocument();
    expect(screen.getByText('Is Auto')).toBeInTheDocument();
    expect(screen.getByText('Gateway Response')).toBeInTheDocument();

    //// Account Details
    expect(screen.getByText('Account Details')).toBeInTheDocument();
    expect(screen.getByText('First Name')).toBeInTheDocument();
    expect(screen.getByText('John8979')).toBeInTheDocument();
    expect(screen.getByText('Last Name')).toBeInTheDocument();
    expect(screen.getByText('Doe')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('test@example.com')).toBeInTheDocument();
    expect(screen.getByText('Phone Verified')).toBeInTheDocument();
  });

  test('Render Dashboard withdrawals details Component with with data to null', async () => {
    renderWithProviders(
      <DashboardSingalFundingDetails
        withdrwalDetails={null}
        onClose={() => {}}
      />
    );
    expect(screen.queryByText('Withdrawals Details')).toBe(null);
  });
});
