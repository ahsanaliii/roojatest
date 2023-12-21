import {
  setUser,
  logout,
  getAuthLoadingSlice,
  getAppLoadingSlice,
  getUserDetailsSlice,
  getUserDashboardDataSlice,
} from "./userAuthSlice";
import userAuthSliceReducer, { initialState } from "./userAuthSlice";
import {
  OverviewAccountsDetailsType,
  OverviewFeesDetailsType,
  OverviewFundingsDetailsType,
  OverviewPurchaseDetailsType,
  UserType,
  OverviewWithdrawalsDetailsType,
} from "../../types/types.ts";

// Test case 1: Test the initial state
test("initial state is correct", () => {
  const state = userAuthSliceReducer(undefined, { type: "nonexistent" });
  expect(state).toEqual(initialState);
});

// Test case 2: Test setUser action
test("setUser action sets user data and dashboard data", () => {
  const dummyUserData: { user: UserType; token: string } = {
    user: {
      id: "1",
      first_name: "John",
      last_name: "Doe",
      email: "john.doe@example.com",
    },
    token: "someToken",
  };

  const dummyDashboardData = {
    accounts: {} as OverviewAccountsDetailsType,
    purchases: {} as OverviewPurchaseDetailsType,
    fundings: {} as OverviewFundingsDetailsType,
    withdrawals: {} as OverviewWithdrawalsDetailsType,
    fees: {} as OverviewFeesDetailsType,
  };

  const newState = userAuthSliceReducer(
    initialState,
    setUser({ userData: dummyUserData, dashboardData: dummyDashboardData })
  );

  expect(newState.userData).toEqual(dummyUserData);
  expect(newState.dashboardData).toEqual(dummyDashboardData);
});

// Test case 3: Test logout action
test("logout action resets state to initial state", () => {
  const stateWithUserData = {
    loading: false,
    appLoading: false,
    userData: {
      user: {
        id: "2",
        first_name: "Jane",
        last_name: "Doe",
        email: "jane.doe@example.com",
      },
      token: "anotherToken",
    },
    dashboardData: {
      accounts: {} as OverviewAccountsDetailsType,
      purchases: {} as OverviewPurchaseDetailsType,
      fundings: {} as OverviewFundingsDetailsType,
      withdrawals: {} as OverviewWithdrawalsDetailsType,
      fees: {} as OverviewFeesDetailsType,
    },
  };

  const newState = userAuthSliceReducer(stateWithUserData, logout());
  expect(newState).toEqual(initialState);
});

// Test case 4: Test getAuthLoadingSlice selector
test("getAuthLoadingSlice selector returns correct loading state", () => {
  const state = { userAuth: { loading: true } };
  expect(getAuthLoadingSlice(state)).toEqual(true);
});

// Test case 5: Test getAppLoadingSlice selector
test("getAppLoadingSlice selector returns correct app loading state", () => {
  const state = { userAuth: { appLoading: false } };
  expect(getAppLoadingSlice(state)).toEqual(false);
});

// Test case 6: Test getUserDetailsSlice selector
test("getUserDetailsSlice selector returns correct user data", () => {
  const dummyUserData: { user: UserType; token: string } = {
    user: {
      id: "3",
      first_name: "Alice",
      last_name: "Smith",
      email: "alice.smith@example.com",
    },
    token: "yetAnotherToken",
  };

  const state = { userAuth: { userData: dummyUserData } };
  expect(getUserDetailsSlice(state)).toEqual(dummyUserData);
});

// Test case 7: Test getUserDashboardDataSlice selector
test("getUserDashboardDataSlice selector returns correct dashboard data", () => {
  const dummyDashboardData = {
    accounts: {} as OverviewAccountsDetailsType,
    purchases: {} as OverviewPurchaseDetailsType,
    fundings: {} as OverviewFundingsDetailsType,
    withdrawals: {} as OverviewWithdrawalsDetailsType,
    fees: {} as OverviewFeesDetailsType,
  };

  const state = { userAuth: { dashboardData: dummyDashboardData } };
  expect(getUserDashboardDataSlice(state)).toEqual(dummyDashboardData);
});
