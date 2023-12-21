import { renderWithProviders } from '../../../utils/test-utils';
import WalletSettings from './WalletSettings';
import { walletSettingsDummyData } from '../../../mocks/unit-test-data';
import { screen } from '@testing-library/react';

describe('-----Render Wallet Settings component------', () => {
  test('Render Wallet Settings component with dummy data', () => {
    renderWithProviders(
      <WalletSettings
        walletSettings={walletSettingsDummyData}
        onClose={() => {}}
      />
    );
    expect(screen.getByText('settings')).toBeInTheDocument();
    const freeWithdrawalsPerDayInputEle = screen.getByLabelText(
      'Free Withdrawals Per Day'
    );
    const maximumFundingAmountInputEle = screen.getByLabelText(
      'Maximum Funding Amount'
    );
    const maximumWalletBalanceInputEle = screen.getByLabelText(
      'Maximum Wallet Balance'
    );
    const maximumWithdrawalAmountInputEle = screen.getByLabelText(
      'Maximum Withdrawal Amount'
    );
    const minimumFundingAmountInputEle = screen.getByLabelText(
      'Minimum Funding Amount'
    );
    const minimumWithdrawalAmountInputEle = screen.getByLabelText(
      'Minimum Withdrawal Amount'
    );
    const purchaseReceivedWithdrawalTxFeeInputEle =
      screen.getByLabelText('Purchase Received Withdrawal Tx Fee');
    const withdrawalTxFeePercentageInputEle = screen.getByLabelText(
      'Withdrawal Tx Fee Percentage'
    );

    const submitEle = screen.getByText('Submit');
    expect(submitEle).toBeInTheDocument();

    ////// checks the weather input elements exist or not
    expect(freeWithdrawalsPerDayInputEle).toBeInTheDocument();
    expect(maximumFundingAmountInputEle).toBeInTheDocument();
    expect(maximumWalletBalanceInputEle).toBeInTheDocument();
    expect(maximumWithdrawalAmountInputEle).toBeInTheDocument();
    expect(minimumFundingAmountInputEle).toBeInTheDocument();
    expect(minimumWithdrawalAmountInputEle).toBeInTheDocument();
    expect(
      purchaseReceivedWithdrawalTxFeeInputEle
    ).toBeInTheDocument();
    expect(withdrawalTxFeePercentageInputEle).toBeInTheDocument();

    ///// check the initail values of input elements
    expect(freeWithdrawalsPerDayInputEle).toHaveValue('123');
    expect(maximumFundingAmountInputEle).toHaveValue('34');
    expect(maximumWalletBalanceInputEle).toHaveValue('56');
    expect(maximumWithdrawalAmountInputEle).toHaveValue('78');
    expect(minimumFundingAmountInputEle).toHaveValue('123');
    expect(minimumWithdrawalAmountInputEle).toHaveValue('567');
    expect(purchaseReceivedWithdrawalTxFeeInputEle).toHaveValue(
      '234'
    );
    expect(withdrawalTxFeePercentageInputEle).toHaveValue('678');
    // screen.debug();
  });

  test('Render Wallet Settings component with data to null', () => {
    renderWithProviders(
      <WalletSettings walletSettings={null} onClose={() => {}} />
    );
    expect(screen.queryByText('settings')).toBe(null);
  });
});
