import {
  adminAuthDummyData,
  regularAuthDummyData,
  supportAuthDummyData,
  salesAuthDummyData,
} from '../../../mocks/unit-test-data';
import { renderWithProviders } from '../../../utils/test-utils';
import { screen } from '@testing-library/react';
import Sidebar from './Sidebar';

describe('-----Unit Tests for testing dashboard accounts table-----', () => {
  test('renders side bar when role is  admin', async () => {
    renderWithProviders(<Sidebar />, {
      preloadedState: {
        userAuth: { ...adminAuthDummyData },
      },
    });
    const overviewLinkElement = screen.getByText(/Overview/i);
    const accountsLinkElement = screen.getByText(/Accounts/i);
    const withdrawalsLinkElement = screen.getByText(/withdrawals/i);
    const purchasesLinkElement = screen.getByText(/Purchases/i);
    const productsLinkElement = screen.getByText(/Products/i);
    const fundingsLinkElement = screen.getByText(/Fundings/i);
    const settingsLinkElement = screen.getByText(/Settings/i);
    const newAdminLinkElement = screen.getByText(/New Admin/i);
    expect(overviewLinkElement).toBeInTheDocument();
    expect(accountsLinkElement).toBeInTheDocument();
    expect(withdrawalsLinkElement).toBeInTheDocument();
    expect(purchasesLinkElement).toBeInTheDocument();
    expect(productsLinkElement).toBeInTheDocument();
    expect(fundingsLinkElement).toBeInTheDocument();
    expect(settingsLinkElement).toBeInTheDocument();
    expect(newAdminLinkElement).toBeInTheDocument();
  });
  test('renders side bar when user role is  regular', async () => {
    renderWithProviders(<Sidebar />, {
      preloadedState: {
        userAuth: { ...regularAuthDummyData },
      },
    });
    const overviewLinkElement = screen.getByText(/Overview/i);
    const accountsLinkElement = screen.getByText(/Accounts/i);
    const withdrawalsLinkElement = screen.queryByText(/withdrawals/i);
    const purchasesLinkElement = screen.queryByText(/Purchases/i);
    const productsLinkElement = screen.getByText(/Products/i);
    const fundingsLinkElement = screen.queryByText(/Fundings/i);
    const settingsLinkElement = screen.queryByText(/Settings/i);
    const newAdminLinkElement = screen.queryByText(/New Admin/i);
    expect(overviewLinkElement).toBeInTheDocument();
    expect(accountsLinkElement).toBeInTheDocument();
    expect(productsLinkElement).toBeInTheDocument();
    expect(fundingsLinkElement).toEqual(null);
    expect(settingsLinkElement).toEqual(null);
    expect(newAdminLinkElement).toEqual(null);
    expect(withdrawalsLinkElement).toEqual(null);
    expect(purchasesLinkElement).toEqual(null);
  });
  test('renders side bar when user role is  support', async () => {
    renderWithProviders(<Sidebar />, {
      preloadedState: {
        userAuth: { ...supportAuthDummyData },
      },
    });
    const overviewLinkElement = screen.getByText(/Overview/i);
    const accountsLinkElement = screen.getByText(/Accounts/i);
    const withdrawalsLinkElement = screen.queryByText(/withdrawals/i);
    const purchasesLinkElement = screen.queryByText(/Purchases/i);
    const productsLinkElement = screen.getByText(/Products/i);
    const fundingsLinkElement = screen.queryByText(/Fundings/i);
    const settingsLinkElement = screen.queryByText(/Settings/i);
    const newAdminLinkElement = screen.queryByText(/New Admin/i);
    expect(overviewLinkElement).toBeInTheDocument();
    expect(accountsLinkElement).toBeInTheDocument();
    expect(productsLinkElement).toBeInTheDocument();
    expect(fundingsLinkElement).toBeInTheDocument();
    expect(withdrawalsLinkElement).toBeInTheDocument();
    expect(purchasesLinkElement).toBeInTheDocument();
    expect(settingsLinkElement).toEqual(null);
    expect(newAdminLinkElement).toEqual(null);
    // screen.debug();
    // screen.logTestingPlaygroundURL();
  });
  test('renders side bar when user role is  sale', async () => {
    renderWithProviders(<Sidebar />, {
      preloadedState: {
        userAuth: { ...salesAuthDummyData },
      },
    });
    const overviewLinkElement = screen.getByText(/Overview/i);
    const accountsLinkElement = screen.getByText(/Accounts/i);
    const withdrawalsLinkElement = screen.queryByText(/withdrawals/i);
    const purchasesLinkElement = screen.queryByText(/Purchases/i);
    const productsLinkElement = screen.getByText(/Products/i);
    const fundingsLinkElement = screen.queryByText(/Fundings/i);
    const settingsLinkElement = screen.queryByText(/Settings/i);
    const newAdminLinkElement = screen.queryByText(/New Admin/i);
    expect(overviewLinkElement).toBeInTheDocument();
    expect(accountsLinkElement).toBeInTheDocument();
    expect(productsLinkElement).toBeInTheDocument();
    expect(fundingsLinkElement).toBeInTheDocument();
    expect(withdrawalsLinkElement).toBeInTheDocument();
    expect(purchasesLinkElement).toBeInTheDocument();
    expect(settingsLinkElement).toEqual(null);
    expect(newAdminLinkElement).toEqual(null);
    // screen.debug();
    // screen.logTestingPlaygroundURL();
  });
});
