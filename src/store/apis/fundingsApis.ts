import { FundingsApiResponseType } from '../../types/types';
import { baseApi } from './baseApi';

const fundingsApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getFundings: build.query<
      FundingsApiResponseType,
      { page: number; searchedAccountId: string }
    >({
      query: ({ page, searchedAccountId }) => {
        let url = `fundings?limit=10&page=${page}`;
        if (searchedAccountId) {
          url += `&accountId=${searchedAccountId}`;
        }
        return {
          url,
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        };
      },
    }),
  }),
  overrideExisting: false,
});
export const { useGetFundingsQuery } = fundingsApi;
