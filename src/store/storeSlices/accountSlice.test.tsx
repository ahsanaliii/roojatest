// Dummy data for accountsSlice test cases

import accountsSlice, {
  clearSingalAccountData,
  getAccountsLoadingSlice,
  getSelectedAccountId,
  getSingalAccountSlice,
  setLoading,
  setSelectedAccountId,
  setSingalAccountData,
} from "./accountsSlice";

import {
  singalAccountDummyData,
  accountSliceDummyData1,
} from "../../../mocks/unit-test-data.ts";

// Updated test cases for accountsSlice
test("setLoading action sets loading state", () => {
  const newState = accountsSlice(
    accountSliceDummyData1.accounts,
    setLoading({ loading: true })
  );
  expect(newState.loading).toEqual(true);
});

test("setSingalAccountData action sets account data", () => {
  const newState = accountsSlice(
    accountSliceDummyData1.accounts,
    setSingalAccountData({ accountData: singalAccountDummyData })
  );
  expect(newState.singalAccountDetails).toEqual(singalAccountDummyData);
});

test("setSelectedAccountId action sets selected account ID", () => {
  const newState = accountsSlice(
    accountSliceDummyData1.accounts,
    setSelectedAccountId({ id: "54321" })
  );
  expect(newState.selectedAccountId).toEqual("54321");
});

test("clearSingalAccountData action resets account data", () => {
  const stateWithAccountData = {
    ...accountSliceDummyData1.accounts,
    singalAccountDetails: singalAccountDummyData,
  };
  const newState = accountsSlice(
    stateWithAccountData,
    clearSingalAccountData()
  );
  expect(newState.singalAccountDetails).toBeNull();
  expect(newState.selectedAccountId).toBeNull();
});

test("getAccountsLoadingSlice selector returns correct loading state", () => {
  const result = getAccountsLoadingSlice(accountSliceDummyData1);
  expect(result).toEqual(false);
});

test("getSelectedAccountId selector returns correct selected account ID", () => {
  const result = getSelectedAccountId(accountSliceDummyData1);
  expect(result).toEqual("123456");
});

// test("getSingalAccountSlice selector returns correct account data", () => {
//   const result = getSingalAccountSlice(dummyRootState);
//   expect(result).toEqual(dummyAccountData);
// });
