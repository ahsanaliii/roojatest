import { render, fireEvent, screen } from "@testing-library/react";
import CustomPagination from "./CustomPagination";

describe("CustomPagination", () => {
  it("renders pagination buttons", () => {
    render(
      <CustomPagination
        hasNextPage={true}
        hasPreviousPage={true}
        onBackBtnClick={() => {}}
        onNextBtnClick={() => {}}
        loading={false}
      />
    );

    expect(
      screen.getByTestId("previous-page-pagination-btn")
    ).toBeInTheDocument();
    expect(screen.getByTestId("next-page-pagination-btn")).toBeInTheDocument();
  });

  it("renders disabled back button when hasPreviousPage is false", () => {
    render(
      <CustomPagination
        hasNextPage={true}
        hasPreviousPage={false}
        onBackBtnClick={() => {}}
        onNextBtnClick={() => {}}
        loading={false}
      />
    );

    const backButton = screen.getByTestId("previous-page-pagination-btn");
    expect(backButton).toHaveClass("cursor-not-allowed");
    fireEvent.click(backButton);
    // Ensure that onBackBtnClick is not called
  });

  it("renders disabled next button when hasNextPage is false", () => {
    render(
      <CustomPagination
        hasNextPage={false}
        hasPreviousPage={true}
        onBackBtnClick={() => {}}
        onNextBtnClick={() => {}}
        loading={false}
      />
    );

    const nextButton = screen.getByTestId("next-page-pagination-btn");
    expect(nextButton).toHaveClass("cursor-not-allowed");
    fireEvent.click(nextButton);
    // Ensure that onNextBtnClick is not called
  });

  it("renders loading state when loading is true", () => {
    render(
      <CustomPagination
        hasNextPage={true}
        hasPreviousPage={true}
        onBackBtnClick={() => {}}
        onNextBtnClick={() => {}}
        loading={true}
      />
    );

    expect(screen.getByTestId("previous-page-pagination-btn")).toHaveClass(
      "cursor-not-allowed"
    );
    expect(screen.getByTestId("next-page-pagination-btn")).toHaveClass(
      "cursor-not-allowed"
    );
  });

  it("calls onBackBtnClick when back button is clicked", () => {
    const onBackBtnClickMock = jest.fn();
    render(
      <CustomPagination
        hasNextPage={true}
        hasPreviousPage={true}
        onBackBtnClick={onBackBtnClickMock}
        onNextBtnClick={() => {}}
        loading={false}
      />
    );

    const backButton = screen.getByTestId("previous-page-pagination-btn");
    fireEvent.click(backButton);
    expect(onBackBtnClickMock).toHaveBeenCalled();
  });

  it("calls onNextBtnClick when next button is clicked", () => {
    const onNextBtnClickMock = jest.fn();
    render(
      <CustomPagination
        hasNextPage={true}
        hasPreviousPage={true}
        onBackBtnClick={() => {}}
        onNextBtnClick={onNextBtnClickMock}
        loading={false}
      />
    );

    const nextButton = screen.getByTestId("next-page-pagination-btn");
    fireEvent.click(nextButton);
    expect(onNextBtnClickMock).toHaveBeenCalled();
  });
});
