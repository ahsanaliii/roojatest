import { render, fireEvent, screen } from "@testing-library/react";
import CustomButton from "./CutomButton";

describe("CustomButton", () => {
  test("renders button with children", () => {
    render(<CustomButton>Hello Button</CustomButton>);
    expect(screen.getByText("Hello Button")).toBeInTheDocument();
  });

  test("renders button with icon", () => {
    render(
      <CustomButton icon={<span>🚀</span>}>Button with Icon</CustomButton>
    );
    expect(screen.getByTestId("icon-btn")).toBeInTheDocument();
  });

  test("calls onClick handler when button is clicked", () => {
    const onClickMock = jest.fn();
    render(<CustomButton onClick={onClickMock}>Click me</CustomButton>);
    fireEvent.click(screen.getByText("Click me"));
    expect(onClickMock).toHaveBeenCalled();
  });

  test("displays loading state when isLoading is true", async () => {
    render(<CustomButton isLoading>Loading...</CustomButton>);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });
});
