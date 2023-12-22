import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CustomHeading from "./CustomHeading";

describe("CustomHeading Component", () => {
  test("renders default heading (Level 1)", () => {
    render(<CustomHeading>This is a default heading</CustomHeading>);
    expect(screen.getByText("This is a default heading")).toBeInTheDocument();
    expect(screen.getByText("This is a default heading")).toHaveClass(
      "ant-typography"
    );
  });
});
