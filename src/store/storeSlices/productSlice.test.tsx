// Import necessary modules and functions for testing
import { ProductType } from "../../types/types.ts";
import {
  setLoading,
  setSelectedProductData,
  getProductsLoadingSlice,
  getProductSelectedData,
} from "./productsSlice";
import productsSliceReducer, { initialState } from "./productsSlice";

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
  const dummyProductData: ProductType = {
    id: 1,
    name: "Product 1",
    key: "product1",
    description: "Description for Product 1",
    status: "active",
  };

  const newState = productsSliceReducer(
    initialState,
    setSelectedProductData({ data: dummyProductData })
  );
  expect(newState.selectedProductData).toEqual(dummyProductData);
});

// Test case 4: Test getProductsLoadingSlice selector
test("getProductsLoadingSlice selector returns correct loading state", () => {
  const state = { products: { loading: true } };
  expect(getProductsLoadingSlice(state)).toEqual(true);
});

// Test case 5: Test getProductSelectedData selector
test("getProductSelectedData selector returns correct selected product data", () => {
  const dummyProductData: ProductType = {
    id: 2,
    name: "Product 2",
    key: "product2",
    description: "Description for Product 2",
    status: "inactive",
  };

  const state = { products: { selectedProductData: dummyProductData } };
  expect(getProductSelectedData(state)).toEqual(dummyProductData);
});
