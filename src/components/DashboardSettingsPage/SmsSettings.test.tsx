import { renderWithProviders } from '../../../utils/test-utils';
import SmsSettings from './SmsSettings';
import { smsSettingsDummyData } from '../../../mocks/unit-test-data';
import { screen } from '@testing-library/react';

describe('-----Render Sms Settings component------', () => {
  test('Render Sms Settings component with dummy data', () => {
    renderWithProviders(
      <SmsSettings
        smsSettings={smsSettingsDummyData}
        onClose={() => {}}
      />
    );
    expect(screen.getByText('settings')).toBeInTheDocument();
    const maxSendSmsCodeRetryInputEle = screen.getByLabelText(
      'Max Send Sms Code Retry'
    );
    const sendNewSmsCodeAfterMaxRetryInHoursInputEle =
      screen.getByLabelText(
        'Send New Sms Code After Max Retry In Hours'
      );
    const sendNewSmsCodeInMinutesInputEle = screen.getByLabelText(
      'Send New Sms Code In Minutes'
    );
    const submitEle = screen.getByText('Submit');
    expect(submitEle).toBeInTheDocument();

    ////// checks the weather input elements exist or not
    expect(maxSendSmsCodeRetryInputEle).toBeInTheDocument();
    expect(
      sendNewSmsCodeAfterMaxRetryInHoursInputEle
    ).toBeInTheDocument();
    expect(sendNewSmsCodeInMinutesInputEle).toBeInTheDocument();

    ///// check the initail values of input elements
    expect(maxSendSmsCodeRetryInputEle).toHaveValue('1342');
    expect(sendNewSmsCodeAfterMaxRetryInHoursInputEle).toHaveValue(
      '23'
    );
    expect(sendNewSmsCodeInMinutesInputEle).toHaveValue('56');
  });
  test('Render Sms Settings component with data to null', () => {
    renderWithProviders(
      <SmsSettings smsSettings={null} onClose={() => {}} />
    );
    expect(screen.queryByText('settings')).toBe(null);
  });
});
