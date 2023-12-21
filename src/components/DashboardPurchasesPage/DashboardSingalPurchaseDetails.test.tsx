/* eslint-disable testing-library/no-debugging-utils */
import { purchasesDetaisDummyData } from '../../../mocks/unit-test-data';
import { renderWithProviders } from '../../../utils/test-utils';
import DashboardSingalFundingDetails from './DashboardSingalPurchaseDetails';
import { screen } from '@testing-library/react';

describe('Render Dashboard Puchases details Component', () => {
  test('Render Dashboard Puchases details with dummy data', async () => {
    renderWithProviders(
      <DashboardSingalFundingDetails
        purchaseDetails={purchasesDetaisDummyData}
        onClose={() => {}}
      />
    );
    //// Buyer Details
    expect(screen.getByText('Buyer')).toBeInTheDocument();
    expect(screen.getByText('John')).toBeInTheDocument();
    expect(screen.getByText('Doe')).toBeInTheDocument();

    ////  Seller Details
    expect(screen.getByText('Seller')).toBeInTheDocument();
    expect(screen.getByText('Jane')).toBeInTheDocument();
    expect(screen.getByText('Doe')).toBeInTheDocument();

    expect(screen.getByText('Amount')).toBeInTheDocument();
    expect(screen.getByText('Balance')).toBeInTheDocument();
    expect(screen.getByText('Currency')).toBeInTheDocument();
    expect(screen.getByText('USD')).toBeInTheDocument();
    expect(screen.getByText('Currency Unit')).toBeInTheDocument();
    expect(screen.getByText('100')).toBeInTheDocument();

    expect(screen.getByText('Purchases Id')).toBeInTheDocument();
    expect(screen.getByText('189797')).toBeInTheDocument();
    expect(screen.getByText('Account Id')).toBeInTheDocument();
    expect(screen.getByText('account1')).toBeInTheDocument();
    expect(screen.getByText('Duration')).toBeInTheDocument();
    expect(screen.getByText('Description')).toBeInTheDocument();
    expect(screen.getByText('Example Purchase')).toBeInTheDocument();
    expect(screen.getByText('Seller Balance')).toBeInTheDocument();
    expect(screen.getByText('Seller Tx Fee')).toBeInTheDocument();

    expect(screen.getByText('Tx Fee')).toBeInTheDocument();
    expect(screen.getByText('Status')).toBeInTheDocument();
    expect(screen.getByText('Seller Id')).toBeInTheDocument();
    expect(screen.getByText('seller1')).toBeInTheDocument();
    expect(
      screen.getByText('Seller Tx Fee Percent')
    ).toBeInTheDocument();
    expect(screen.getByText('37066')).toBeInTheDocument();
    expect(screen.getByText('tx_fee_percent')).toBeInTheDocument();
    expect(screen.getByText('534976')).toBeInTheDocument();
    expect(screen.getByText('Created At')).toBeInTheDocument();

    // Product Details
    expect(screen.getByText('Product Details')).toBeInTheDocument();
    expect(screen.getByText('Product Name')).toBeInTheDocument();
    expect(screen.getByText('Product 1795875')).toBeInTheDocument();
    expect(
      screen.getByText('Product Description')
    ).toBeInTheDocument();
    expect(screen.getByText('Example Product')).toBeInTheDocument();
    expect(screen.getByText('Product Status')).toBeInTheDocument();
    expect(screen.getByText('176')).toBeInTheDocument();
  });

  test('Render Dashboard Fundings details Component with with data to null', async () => {
    renderWithProviders(
      <DashboardSingalFundingDetails
        purchaseDetails={null}
        onClose={() => {}}
      />
    );
    expect(screen.queryByText('Purchase Details')).toBe(null);
  });
});
