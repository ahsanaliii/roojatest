import { renderWithProviders } from '../../../utils/test-utils';
import PurchaseSettings from './PurchaseSettings';
import { purchaseSettingsDummyData } from '../../../mocks/unit-test-data';
import { screen } from '@testing-library/react';

describe('-----Render Purchase Settings component------', () => {
  test('Render Purchase Settings component with dummy data', () => {
    renderWithProviders(
      <PurchaseSettings
        purchaseSettings={purchaseSettingsDummyData}
        onClose={() => {}}
      />
    );
    expect(screen.getByText('settings')).toBeInTheDocument();
    const buyerPurchaseTxFeePercentageInputEle =
      screen.getByLabelText('Buyer Purchase Tx Fee Percentage');
    const maximumSingleTxAmountInputEle = screen.getByLabelText(
      'Maximum Single Tx Amount'
    );
    const minimumSingleTxAmountInputEle = screen.getByLabelText(
      'Minimum Single Tx Amount'
    );
    const sellerPurchaseTxFeePercentageInputEle =
      screen.getByLabelText('Seller Purchase Tx Fee Percentage');

    const submitEle = screen.getByText('Submit');

    expect(submitEle).toBeInTheDocument();

    ////// checks the weather input elements exist or not
    expect(buyerPurchaseTxFeePercentageInputEle).toBeInTheDocument();
    expect(maximumSingleTxAmountInputEle).toBeInTheDocument();
    expect(minimumSingleTxAmountInputEle).toBeInTheDocument();
    expect(sellerPurchaseTxFeePercentageInputEle).toBeInTheDocument();

    ///// check the initail values of input elements
    expect(buyerPurchaseTxFeePercentageInputEle).toHaveValue('12');
    expect(maximumSingleTxAmountInputEle).toHaveValue('3');
    expect(minimumSingleTxAmountInputEle).toHaveValue('67');
    expect(sellerPurchaseTxFeePercentageInputEle).toHaveValue('45');
  });
  test('Render Purchase Settings component with data to null', () => {
    renderWithProviders(
      <PurchaseSettings purchaseSettings={null} onClose={() => {}} />
    );
    expect(screen.queryByText('settings')).toBe(null);
  });
});
