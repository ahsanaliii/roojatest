import { renderWithProviders } from '../../../utils/test-utils';
import SystemSettings from './SystemSettings';
import { systemSettingsDummyData } from '../../../mocks/unit-test-data';
import { screen } from '@testing-library/react';

describe('-----Render System Settings component------', () => {
  test('Render System Settings component with dummy data', () => {
    renderWithProviders(
      <SystemSettings
        systemSettings={systemSettingsDummyData}
        onClose={() => {}}
      />
    );
    expect(screen.getByText('settings')).toBeInTheDocument();
    const androidAppVersionInputEle = screen.getByLabelText(
      'Android App Version'
    );
    const apiVersionInputEle = screen.getByLabelText('Api Version');
    const forceUpgradeAndoidAppVersionInputEle =
      screen.getByLabelText('Force Upgrade Android App Version');
    const forceUpgradeIosAppVersionInputEle = screen.getByLabelText(
      'Force Upgrade Ios App Version'
    );
    const iosAppVersionInputEle =
      screen.getByLabelText('Ios App Version');
    const maxParallelGornoutineInputEle = screen.getByLabelText(
      'Max Parallel Goroutine'
    );
    const mustUpgradeIosAppVersionInputEle = screen.getByLabelText(
      'Must Upgrade Ios App Version'
    );

    const mustUpgradeAndroidAppVersionInputEle =
      screen.getByLabelText('Must Upgrade Android App Version');
    // const mustUpgradeAndroidAppVersionInputEle =
    screen.getByLabelText('Must Upgrade Android App Version');

    const submitEle = screen.getByText('Submit');
    expect(submitEle).toBeInTheDocument();

    ////// checks the weather input elements exist or not
    expect(androidAppVersionInputEle).toBeInTheDocument();
    expect(apiVersionInputEle).toBeInTheDocument();
    expect(forceUpgradeAndoidAppVersionInputEle).toBeInTheDocument();
    expect(forceUpgradeIosAppVersionInputEle).toBeInTheDocument();
    expect(mustUpgradeIosAppVersionInputEle).toBeInTheDocument();
    expect(maxParallelGornoutineInputEle).toBeInTheDocument();
    expect(iosAppVersionInputEle).toBeInTheDocument();
    expect(mustUpgradeAndroidAppVersionInputEle).toBeInTheDocument();

    ///// check the initail values of input elements
    expect(androidAppVersionInputEle).toHaveValue('1.0.0');
    expect(apiVersionInputEle).toHaveValue('1.2.0');
    expect(forceUpgradeAndoidAppVersionInputEle).toHaveValue('2');
    expect(forceUpgradeIosAppVersionInputEle).toHaveValue('7');
    expect(mustUpgradeIosAppVersionInputEle).toHaveValue('2.0.0');
    expect(maxParallelGornoutineInputEle).toHaveValue('5');
    expect(iosAppVersionInputEle).toHaveValue('1.3.0');
    expect(mustUpgradeAndroidAppVersionInputEle).toHaveValue('2.1.0');
  });
  test('Render System Settings component with data to null', () => {
    renderWithProviders(
      <SystemSettings systemSettings={null} onClose={() => {}} />
    );
    expect(screen.queryByText('settings')).toBe(null);
  });
});
