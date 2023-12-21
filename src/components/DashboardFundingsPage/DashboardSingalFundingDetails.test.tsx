/* eslint-disable testing-library/no-debugging-utils */
import { fundingsDetailsDummyData } from '../../../mocks/unit-test-data';
import { renderWithProviders } from '../../../utils/test-utils';
import DashboardSingalFundingDetails from './DashboardSingalFundingDetails';
import { screen } from '@testing-library/react';

describe('Render Dashboard Fundings Component', () => {
  test('Render Dashboard Fundings details Component with dummy data', async () => {
    renderWithProviders(
      <DashboardSingalFundingDetails
        fundingsDetails={fundingsDetailsDummyData}
        onClose={() => {}}
      />
    );
    //// Fundings Details
    screen.getByText('credit_card');

    ////  Dynamic Account
    expect(
      screen.getByText('Dynamic Virtual Account Info')
    ).toBeInTheDocument();
    expect(screen.getByText('Bank XYZ')).toBeInTheDocument();
    expect(screen.getByText('USD')).toBeInTheDocument();
    expect(screen.getByText('funding_987654321')).toBeInTheDocument();

    //////  Account Details
    expect(screen.getByText('Dynamic Account')).toBeInTheDocument();
    expect(screen.getByText('user@example.com')).toBeInTheDocument();
    expect(screen.getByText('John')).toBeInTheDocument();
    expect(screen.getByText('Doe')).toBeInTheDocument();
    expect(screen.getByText('1234567890')).toBeInTheDocument();
    expect(screen.getByText('sv')).toBeInTheDocument();
  });
  test('Render Dashboard Fundings details Component with with data to null', async () => {
    renderWithProviders(
      <DashboardSingalFundingDetails
        fundingsDetails={null}
        onClose={() => {}}
      />
    );
    expect(screen.queryByText('Fundings Details')).toBe(null);
    // screen.logTestingPlaygroundURL();
  });
});
