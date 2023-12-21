import { screen } from '@testing-library/react';
import { adminAuthDummyData } from '../../../mocks/unit-test-data';
import DashboardOverview from './DashboardOverview';
import { renderWithProviders } from '../../../utils/test-utils';

//// unable to match the exact values in the bar charts because of ReferenceError: ResizeObserver is not defined
//// https://github.com/ZeeCoder/use-resize-observer/issues/40
describe('---------Render Dashboard Overview Components------------', () => {
  test('Render Dashboard Overview Components', () => {
    renderWithProviders(<DashboardOverview />, {
      preloadedState: {
        userAuth: { ...adminAuthDummyData },
      },
    });

    // Purchase Overview chart
    expect(screen.getByText('Purchases Details')).toBeInTheDocument();

    // Withdrawals Overview chart
    expect(
      screen.getByText('Withdrawals Details')
    ).toBeInTheDocument();

    //  Fees Overview chart
    expect(screen.getByText('Fees Details')).toBeInTheDocument();

    //  Fundings  Overview chart
    expect(screen.getByText('Fundings Details')).toBeInTheDocument();

    //  Accounts Overview charts
    expect(screen.getByText('Accounts Details')).toBeInTheDocument();
  });
});
