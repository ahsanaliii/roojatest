// Dummy data for accountsSlice test cases
import { RootState } from "@reduxjs/toolkit/query";
import { SingalAccountDetailsType } from "../../types/types.ts";
import accountsSlice, {
  clearSingalAccountData,
  getAccountsLoadingSlice,
  getSelectedAccountId,
  getSingalAccountSlice,
  setLoading,
  setSelectedAccountId,
  setSingalAccountData,
} from "./accountsSlice";

const dummyAccountData: SingalAccountDetailsType = {
  bank_account: {
    id: "1",
    account_id: "123",
    bank_code: "12345",
    bank_account_no: "9876543210",
    bank_account_name: "John Doe",
  },
  email: "john.doe@example.com",
  email_verified: true,
  first_name: "John",
  id: "12345",
  lang: "en",
  last_name: "Doe",
  phone: "9876543210",
  phone_verified: true,
  settings: {
    account_id: "12345",
    id: "1",
    data: { wallet: { custom_max_balance: 1000 } },
  },
  status: true,
  wallet: {
    account_id: "12345",
    balance: 500,
    currency: "USD",
    currency_unit: 2,
    id: "1",
    tx_summary: {
      account_id: "12345",
      total_commission: 50,
      total_fundings: 200,
      total_pending_withdrawals: 30,
      total_purchases: 100,
      total_sales: 150,
      total_withdrawals: 20,
    },
  },
};

// Dummy data for RootState
const dummyRootState: RootState = {
  accounts: {
    loading: false,
    singalAccountDetails: dummyAccountData,
    selectedAccountId: "12345",
  },
  // Add other slices as needed
};

// Updated test cases for accountsSlice
test("setLoading action sets loading state", () => {
  const newState = accountsSlice(
    dummyRootState.accounts,
    setLoading({ loading: true })
  );
  expect(newState.loading).toEqual(true);
});

test("setSingalAccountData action sets account data", () => {
  const newState = accountsSlice(
    dummyRootState.accounts,
    setSingalAccountData({ accountData: dummyAccountData })
  );
  expect(newState.singalAccountDetails).toEqual(dummyAccountData);
});

test("setSelectedAccountId action sets selected account ID", () => {
  const newState = accountsSlice(
    dummyRootState.accounts,
    setSelectedAccountId({ id: "54321" })
  );
  expect(newState.selectedAccountId).toEqual("54321");
});

test("clearSingalAccountData action resets account data", () => {
  const stateWithAccountData = {
    ...dummyRootState.accounts,
    singalAccountDetails: dummyAccountData,
  };
  const newState = accountsSlice(
    stateWithAccountData,
    clearSingalAccountData()
  );
  expect(newState.singalAccountDetails).toBeNull();
  expect(newState.selectedAccountId).toBeNull();
});

test("getAccountsLoadingSlice selector returns correct loading state", () => {
  const result = getAccountsLoadingSlice(dummyRootState);
  expect(result).toEqual(false);
});

test("getSelectedAccountId selector returns correct selected account ID", () => {
  const result = getSelectedAccountId(dummyRootState);
  expect(result).toEqual("12345");
});

test("getSingalAccountSlice selector returns correct account data", () => {
  const result = getSingalAccountSlice(dummyRootState);
  expect(result).toEqual(dummyAccountData);
});
