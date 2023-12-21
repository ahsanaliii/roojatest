import { setupServer } from 'msw/node';
import { rest } from 'msw';
import {
  loginDummyData,
  accountsTablePage1DummyData,
  accountsTablePage2DummyData,
  fundingsTablePage1DummyData,
  fundingsTablePage2DummyData,
  purchasesTablePage1DummyData,
  purchasesTablePage2DummyData,
  withdrawalsTablePage1DummyData,
  withdrawalsTablePage2DummyData,
  settingApiResponseDummyData,
} from './unit-test-data.ts';
const worker = setupServer(
  rest.post(
    'https://roojaa-admin-proxy.dev.follomy.com​/v1/authenticate',
    async (req, res, ctx) => {
      return res(ctx.json({ ...loginDummyData }));
    }
  ),
  // account
  rest.get(
    'https://roojaa-admin-proxy.dev.follomy.com/v1/accounts',
    async (req, res, ctx) => {
      if (+(req.url.searchParams.get('page') as string) === 1) {
        return res(ctx.json({ ...accountsTablePage1DummyData }));
      } else {
        return res(ctx.json({ ...accountsTablePage2DummyData }));
      }
    }
  ),
  rest.get(
    'https://roojaa-admin-proxy.dev.follomy.com/v1/accounts',
    async (req, res, ctx) => {
      if (+(req.url.searchParams.get('page') as string) === 1) {
        return res(ctx.json({ ...accountsTablePage1DummyData }));
      } else {
        return res(ctx.json({ ...accountsTablePage2DummyData }));
      }
    }
  ),
  // purchasesTablePage1DummyData
  rest.get(
    'https://roojaa-admin-proxy.dev.follomy.com/v1/fundings',
    async (req, res, ctx) => {
      if (+(req.url.searchParams.get('page') as string) === 1) {
        return res(ctx.json({ ...fundingsTablePage1DummyData }));
      } else {
        return res(ctx.json({ ...fundingsTablePage2DummyData }));
      }
    }
  ),
  rest.get(
    'https://roojaa-admin-proxy.dev.follomy.com/v1/purchases',
    async (req, res, ctx) => {
      if (+(req.url.searchParams.get('page') as string) === 1) {
        return res(ctx.json({ ...purchasesTablePage1DummyData }));
      } else {
        return res(ctx.json({ ...purchasesTablePage2DummyData }));
      }
    }
  ),
  rest.get(
    'https://roojaa-admin-proxy.dev.follomy.com/v1/withdrawals',
    async (req, res, ctx) => {
      if (+(req.url.searchParams.get('page') as string) === 1) {
        return res(ctx.json({ ...withdrawalsTablePage1DummyData }));
      } else {
        return res(ctx.json({ ...withdrawalsTablePage2DummyData }));
      }
    }
  ),
  rest.get(
    'https://roojaa-admin-proxy.dev.follomy.com/v1/settings',
    async (req, res, ctx) => {
      return res(ctx.json({ ...settingApiResponseDummyData }));
    }
  )
);

export default worker;
