import { renderWithProviders } from '../../../utils/test-utils';
import PaystackSettings from './PaystackSettings';
import { paystackSettingsDummyData } from '../../../mocks/unit-test-data';
import { screen } from '@testing-library/react';

describe('-----Render Paystack Settings component------', () => {
  test('Render Paystack Settings component with dummy data', () => {
    renderWithProviders(
      <PaystackSettings
        paystackSettings={paystackSettingsDummyData}
        onClose={() => {}}
      />
    );
    expect(screen.getByText('settings')).toBeInTheDocument();
    const paystack5kAndBelowTransferFeeInputEle =
      screen.getByLabelText('Paystack 5k And Below Transfer Fee');
    const paystack50kAndAboveTransferFeeInputEle =
      screen.getByLabelText('Paystack 50k And Above Transfer Fee');

    const paystack50kAndBelowTransferFeeInputEle =
      screen.getByLabelText('Paystack 50k And Below Transfer Fee');

    const submitEle = screen.getByText('Submit');

    expect(submitEle).toBeInTheDocument();

    ////// checks the weather input elements exist or not
    expect(paystack5kAndBelowTransferFeeInputEle).toBeInTheDocument();
    expect(
      paystack50kAndAboveTransferFeeInputEle
    ).toBeInTheDocument();
    expect(
      paystack50kAndBelowTransferFeeInputEle
    ).toBeInTheDocument();

    ///// check the initail values of input elements
    expect(paystack5kAndBelowTransferFeeInputEle).toHaveValue('234');
    expect(paystack50kAndBelowTransferFeeInputEle).toHaveValue('12');
    expect(paystack50kAndAboveTransferFeeInputEle).toHaveValue('345');
  });
  test('Render Paystack Settings component with data to null', () => {
    renderWithProviders(
      <PaystackSettings paystackSettings={null} onClose={() => {}} />
    );
    expect(screen.queryByText('settings')).toBe(null);
  });
});
