import { renderWithProviders } from '../../../utils/test-utils';
import SquadSettings from './SquadSettings';
import { squadSettingsDummyData } from '../../../mocks/unit-test-data';
import { screen } from '@testing-library/react';

describe('-----Render Sms Settings component------', () => {
  test('Render Sms Settings component with dummy data', () => {
    renderWithProviders(
      <SquadSettings
        squadSettings={squadSettingsDummyData}
        onClose={() => {}}
      />
    );
    expect(screen.getByText('settings')).toBeInTheDocument();
    const dvaDurationInSecondsInputEle = screen.getByLabelText(
      'Dva Duration In Seconds'
    );
    const dvaEmailInputEle = screen.getByLabelText('Dva Email');
    const dvaTxFeePercentageInputEle = screen.getByLabelText(
      'Dva Tx Fee Percentage'
    );
    const submitEle = screen.getByText('Submit');
    expect(submitEle).toBeInTheDocument();

    ////// checks the weather input elements exist or not
    expect(dvaDurationInSecondsInputEle).toBeInTheDocument();
    expect(dvaEmailInputEle).toBeInTheDocument();
    expect(dvaTxFeePercentageInputEle).toBeInTheDocument();

    ///// check the initail values of input elements
    expect(dvaDurationInSecondsInputEle).toHaveValue('12');
    expect(dvaEmailInputEle).toHaveValue('dv@gmail.com');
    expect(dvaTxFeePercentageInputEle).toHaveValue('1232');
  });
  test('Render Sms Settings component with data to null', () => {
    renderWithProviders(
      <SquadSettings squadSettings={null} onClose={() => {}} />
    );
    expect(screen.queryByText('settings')).toBe(null);
  });
});
