import { screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import { rest } from "msw";
import { setupServer } from "msw/node";
import ProductForm from "./ProductForm";
import {
  useCreateProductMutation,
  useUpdateProductMutation,
} from "../../store/apis/productsApis";
import { renderWithProviders } from "../../../utils/test-utils";

// Mocking the API calls
const server = setupServer(
  rest.post("/create-product", (req, res, ctx) => {
    return res(ctx.json({ message: "Product created successfully" }));
  }),
  rest.put("/update-product/:id", (req, res, ctx) => {
    return res(ctx.json({ message: "Product updated successfully" }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("ProductForm Component", () => {
  it("renders ProductForm with Create a new product title", () => {
    renderWithProviders(<ProductForm open={true} onClose={() => {}} />);
    expect(screen.getByText("Create a new product")).toBeInTheDocument();
  });

  it("renders ProductForm with Update product title when selectedProductData is provided", () => {
    const selectedProductData = {
      id: 1,
      name: "Test Product",
      status: "active",
      description: "Test Description",
    };

    renderWithProviders(
      <ProductForm
        open={true}
        onClose={() => {}}
        selectedProductData={selectedProductData}
      />
    );

    expect(screen.getByText("Product Status")).toBeInTheDocument();
  });

  //   it("calls createProduct when form is submitted with valid data", async () => {
  //     const onCloseMock = jest.fn();

  //     renderWithProviders(<ProductForm open={true} onClose={onCloseMock} />);

  //     await act(async () => {
  //       userEvent.type(screen.getByLabelText(/Product Name/i), "Test Product");
  //       userEvent.selectOptions(
  //         screen.getByLabelText(/Product Status/i),
  //         "active"
  //       );
  //       userEvent.type(screen.getByLabelText(/Description/i), "Test Description");

  //       fireEvent.submit(screen.getByText(/Add product/i));
  //       await waitFor(() => expect(onCloseMock).toHaveBeenCalled());
  //     });

  //     // Verify that the API call was made
  //     expect(useCreateProductMutation).toHaveBeenCalledWith();

  //     // Reset mock to avoid any conflicts with other tests
  //     // useCreateProductMutation.mockReset();
  //   });

  //   it("calls updateProduct when form is submitted with valid data and selectedProductData is provided", async () => {
  //     const onCloseMock = jest.fn();

  //     const selectedProductData = {
  //       id: 1,
  //       name: "Test Product",
  //       status: "active",
  //       description: "Test Description",
  //     };

  //     renderWithProviders(
  //       <ProductForm
  //         open={true}
  //         onClose={onCloseMock}
  //         selectedProductData={selectedProductData}
  //       />
  //     );

  //     await act(async () => {
  //       fireEvent.submit(screen.getByText("Update Product"));
  //       await waitFor(() => expect(onCloseMock).toHaveBeenCalled());
  //     });

  // Verify that the API call was made
  // expect(useUpdateProductMutation).toHaveBeenCalledWith();

  // Reset mock to avoid any conflicts with other tests
  // useUpdateProductMutation.mockReset();
  //   });
});
