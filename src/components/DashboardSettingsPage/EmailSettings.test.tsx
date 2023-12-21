import { renderWithProviders } from '../../../utils/test-utils';
import EmailSettings from './EmailSettings';
import { emailSettingsDummyData } from '../../../mocks/unit-test-data';
import { screen } from '@testing-library/react';
describe('-----Render Email Settings component------', () => {
  test('Render Email Settings component with dummy data', () => {
    renderWithProviders(
      <EmailSettings
        emailSettings={emailSettingsDummyData}
        onClose={() => {}}
      />
    );
    expect(screen.getByText('settings')).toBeInTheDocument();
    const awsEmailCofigInputEle = screen.getByLabelText(
      'Aws Email Config Set'
    );
    const generalPurposeEmailTemplateInputEle = screen.getByLabelText(
      'General Purpose Email Template'
    );
    const maxSendEmailCodeRetryInputEle = screen.getByLabelText(
      'Max Send Email Code Retry'
    );
    const noReplyEmailAddressInputEle = screen.getByLabelText(
      'No Reply Email Address'
    );
    const sendNewEmailCodeAfterMaxRetryInHoursInputEle =
      screen.getByLabelText(
        'Send New Email Code After Max Retry In Hours'
      );
    const sendNewEmailCodeInMinutesInputEle = screen.getByLabelText(
      'Send New Email Code In Minutes'
    );
    const submitEle = screen.getByText('Submit');

    ////// checks the weather input elements exist or not
    expect(awsEmailCofigInputEle).toBeInTheDocument();
    expect(generalPurposeEmailTemplateInputEle).toBeInTheDocument();
    expect(maxSendEmailCodeRetryInputEle).toBeInTheDocument();
    expect(noReplyEmailAddressInputEle).toBeInTheDocument();
    expect(
      sendNewEmailCodeAfterMaxRetryInHoursInputEle
    ).toBeInTheDocument();
    expect(sendNewEmailCodeInMinutesInputEle).toBeInTheDocument();
    expect(submitEle).toBeInTheDocument();

    ///// check the initail values of input elements
    expect(awsEmailCofigInputEle).toHaveValue(
      'dummy_email_config_set'
    );
    expect(generalPurposeEmailTemplateInputEle).toHaveValue(
      'dummy_email_template'
    );
    expect(maxSendEmailCodeRetryInputEle).toHaveValue('3');
    expect(noReplyEmailAddressInputEle).toHaveValue(
      'noreply@example.com'
    );
    expect(sendNewEmailCodeAfterMaxRetryInHoursInputEle).toHaveValue(
      '24'
    );
    expect(sendNewEmailCodeInMinutesInputEle).toHaveValue('5');
  });
  test('Render Email Settings component with data to null', () => {
    renderWithProviders(
      <EmailSettings emailSettings={null} onClose={() => {}} />
    );
    expect(screen.queryByText('settings')).toBe(null);
  });
});
