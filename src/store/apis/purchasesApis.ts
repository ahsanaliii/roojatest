// purchases
import { PurchasesApiResponseType } from '../../types/types';
import { baseApi } from './baseApi';

const purchasesApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getPurchases: build.query<
      PurchasesApiResponseType,
      { page: number; searchedAccountId: string }
    >({
      query: ({ page, searchedAccountId }) => {
        let url = `purchases?limit=10&page=${page}`;
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
export const { useGetPurchasesQuery } = purchasesApi;
