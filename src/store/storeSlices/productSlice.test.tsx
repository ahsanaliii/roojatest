import {
  setLoading,
  setSelectedProductData,
  getProductsLoadingSlice,
  getProductSelectedData,
} from "./productsSlice";
import productsSliceReducer, { initialState } from "./productsSlice";
import {
  dummyProductData1,
  dummyProductData2,
} from "../../../mocks/unit-test-data.ts";

// Test case 1: Test the initial state
test("initial state is correct", () => {
  const state = productsSliceReducer(undefined, { type: "nonexistent" });
  expect(state).toEqual(initialState);
});

// Test case 2: Test setLoading action
test("setLoading action sets loading state", () => {
  const newState = productsSliceReducer(
    initialState,
    setLoading({ loading: true })
  );
  expect(newState.loading).toEqual(true);
});

// Test case 3: Test setSelectedProductData action
test("setSelectedProductData action sets selected product data", () => {
  const newState = productsSliceReducer(
    initialState,
    setSelectedProductData({ data: dummyProductData1 })
  );
  expect(newState.selectedProductData).toEqual(dummyProductData1);
});

// Test case 4: Test getProductsLoadingSlice selector
test("getProductsLoadingSlice selector returns correct loading state", () => {
  const state = { products: { loading: true } };
  expect(getProductsLoadingSlice(state)).toEqual(true);
});

// Test case 5: Test getProductSelectedData selector
test("getProductSelectedData selector returns correct selected product data", () => {
  const state = { products: { selectedProductData: dummyProductData2 } };
  expect(getProductSelectedData(state)).toEqual(dummyProductData2);
});
