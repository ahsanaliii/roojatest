/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable testing-library/no-debugging-utils */
import { act, screen, waitFor } from '@testing-library/react';
import { renderWithProviders } from '../../../utils/test-utils';
import DashboardSettings from './DashboardSettings';
import userEvent from '@testing-library/user-event';
describe('Render Dashboard Setting Components', () => {
  test('Render Dashboard setting Components with dummy data', async () => {
    renderWithProviders(<DashboardSettings />);

    // Check for the existence of System settings
    await waitFor(() => {
      expect(screen.getByText('2353460')).toBeInTheDocument();
    });

    // Check for the existence of System settings
    await waitFor(() => {
      expect(screen.getByText('1.234')).toBeInTheDocument();
    });

    // // Check for the existence of SMS settings
    await waitFor(() => {
      expect(screen.getByText('34')).toBeInTheDocument();
    });

    // // Check for the existence of purchase settings
    await waitFor(() => {
      expect(screen.getByText('82')).toBeInTheDocument();
    });

    // // Check for the existence of wallet settings
    await waitFor(() => {
      expect(screen.getByText('12340')).toBeInTheDocument();
    });

    // // Check for the existence of paystack settings
    await waitFor(() => {
      expect(screen.getByText('PAYSTACK')).toBeInTheDocument();
    });

    // // Check for the existence of squad settings
    await waitFor(() => {
      expect(screen.getByText('78@gmail.com')).toBeInTheDocument();
    });
  });

  test('Render Dashboard setting Components and select the SYSTEM setting to edit', async () => {
    renderWithProviders(<DashboardSettings />);

    // Check for the existence of System settings
    await waitFor(() => {
      expect(screen.getByText('2353460')).toBeInTheDocument();
    });

    //// select the edit icon for system settings
    const editSysSettingIcon = screen.getByTestId(
      'system-settings-icon'
    );
    act(() => {
      userEvent.click(editSysSettingIcon);
    });

    //// select the close icon for system settings
    const closeSysSettingIcon = screen.getByRole('img');

    ///// checks if system settings form become visible on edit icons click
    await waitFor(() => {
      expect(closeSysSettingIcon).toBeInTheDocument();
    });

    act(() => {
      userEvent.click(closeSysSettingIcon);
    });

    ///// checks if system settings form become invisible on close icons click
    await waitFor(() => {
      expect(screen.queryByRole('img')).toBeNull();
    });
  });

  test('Render Dashboard setting Components and select the EMAIL setting to edit', async () => {
    renderWithProviders(<DashboardSettings />);

    // Check for the existence of EMAIL settings
    await waitFor(() => {
      expect(screen.getByText('123@gmail.com')).toBeInTheDocument();
    });

    //// select the edit icon for EMAIL settings
    const editSysSettingIcon = screen.getByTestId(
      'email-settings-icon'
    );
    act(() => {
      userEvent.click(editSysSettingIcon);
    });

    //// select the close icon for EMAIL settings
    const closeSysSettingIcon = screen.getByRole('img');

    ///// checks if EMAIL settings form become visible on edit icons click
    await waitFor(() => {
      expect(closeSysSettingIcon).toBeInTheDocument();
    });

    act(() => {
      userEvent.click(closeSysSettingIcon);
    });

    ///// checks if EMAIL settings form become invisible on close icons click
    await waitFor(() => {
      expect(screen.queryByRole('img')).toBeNull();
    });
  });

  test('Render Dashboard setting Components and select the SMS setting to edit', async () => {
    renderWithProviders(<DashboardSettings />);

    // Check for the existence of SMS settings
    await waitFor(() => {
      expect(screen.getByText('SMS')).toBeInTheDocument();
    });

    //// select the edit icon for SMS settings
    const editSysSettingIcon = screen.getByTestId(
      'sms-settings-icon'
    );
    act(() => {
      userEvent.click(editSysSettingIcon);
    });

    //// select the close icon for SMS settings
    const closeSysSettingIcon = screen.getByRole('img');

    ///// checks if SMS settings form become visible on edit icons click
    await waitFor(() => {
      expect(closeSysSettingIcon).toBeInTheDocument();
    });

    act(() => {
      userEvent.click(closeSysSettingIcon);
    });

    ///// checks if SMS settings form become invisible on close icons click
    await waitFor(() => {
      expect(screen.queryByRole('img')).toBeNull();
    });
  });

  test('Render Dashboard setting Components and select the PURCHASE setting to edit', async () => {
    renderWithProviders(<DashboardSettings />);

    // Check for the existence of PURCHASE settings
    await waitFor(() => {
      expect(screen.getByText('PURCHASE')).toBeInTheDocument();
    });

    //// select the edit icon for PURCHASE settings
    const editSysSettingIcon = screen.getByTestId(
      'purchase-settings-icon'
    );
    act(() => {
      userEvent.click(editSysSettingIcon);
    });

    //// select the close icon for PURCHASE settings
    const closeSysSettingIcon = screen.getByRole('img');

    ///// checks if PURCHASE settings form become visible on edit icons click
    await waitFor(() => {
      expect(closeSysSettingIcon).toBeInTheDocument();
    });

    act(() => {
      userEvent.click(closeSysSettingIcon);
    });

    ///// checks if PURCHASE settings form become invisible on close icons click
    await waitFor(() => {
      expect(screen.queryByRole('img')).toBeNull();
    });
  });

  test('Render Dashboard setting Components and select the WALLET setting to edit', async () => {
    renderWithProviders(<DashboardSettings />);

    // Check for the existence of WALLET settings
    await waitFor(() => {
      expect(screen.getByText('WALLET')).toBeInTheDocument();
    });

    //// select the edit icon for WALLET settings
    const editSysSettingIcon = screen.getByTestId(
      'wallet-settings-icon'
    );
    act(() => {
      userEvent.click(editSysSettingIcon);
    });

    //// select the close icon for WALLET settings
    const closeSysSettingIcon = screen.getByRole('img');

    ///// checks if WALLET settings form become visible on edit icons click
    await waitFor(() => {
      expect(closeSysSettingIcon).toBeInTheDocument();
    });

    act(() => {
      userEvent.click(closeSysSettingIcon);
    });

    ///// checks if WALLET settings form become invisible on close icons click
    await waitFor(() => {
      expect(screen.queryByRole('img')).toBeNull();
    });
  });
  test('Render Dashboard setting Components and select the PAYSTACK setting to edit', async () => {
    renderWithProviders(<DashboardSettings />);

    // Check for the existence of PAYSTACK settings
    await waitFor(() => {
      expect(screen.getByText('PAYSTACK')).toBeInTheDocument();
    });

    //// select the edit icon for PAYSTACK settings
    const editSysSettingIcon = screen.getByTestId(
      'paystack-settings-icon'
    );
    act(() => {
      userEvent.click(editSysSettingIcon);
    });

    //// select the close icon for PAYSTACK settings
    const closeSysSettingIcon = screen.getByRole('img');

    ///// checks if PAYSTACK settings form become visible on edit icons click
    await waitFor(() => {
      expect(closeSysSettingIcon).toBeInTheDocument();
    });

    act(() => {
      userEvent.click(closeSysSettingIcon);
    });

    ///// checks if PAYSTACK settings form become invisible on close icons click
    await waitFor(() => {
      expect(screen.queryByRole('img')).toBeNull();
    });
  });

  test('Render Dashboard setting Components and select the SQUAD setting to edit', async () => {
    renderWithProviders(<DashboardSettings />);

    // Check for the existence of SQUAD settings
    await waitFor(() => {
      expect(screen.getByText('SQUAD')).toBeInTheDocument();
    });

    //// select the edit icon for SQUAD settings
    const editSysSettingIcon = screen.getByTestId(
      'squad-settings-icon'
    );
    act(() => {
      userEvent.click(editSysSettingIcon);
    });

    //// select the close icon for SQUAD settings
    const closeSysSettingIcon = screen.getByRole('img');

    ///// checks if SQUAD settings form become visible on edit icons click
    await waitFor(() => {
      expect(closeSysSettingIcon).toBeInTheDocument();
    });

    act(() => {
      userEvent.click(closeSysSettingIcon);
    });

    ///// checks if SQUAD settings form become invisible on close icons click
    await waitFor(() => {
      expect(screen.queryByRole('img')).toBeNull();
    });
  });
});
