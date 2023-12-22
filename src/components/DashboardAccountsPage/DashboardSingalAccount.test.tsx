/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable testing-library/no-debugging-utils */
import DashboardSingalAccount from "./DashboardSingalAccount.tsx";
import { renderWithProviders } from "../../../utils/test-utils";
import { screen } from "@testing-library/react";
import { accountSliceDummyData } from "../../../mocks/unit-test-data";

describe("-----Unit Tests for testing singla account details -----", () => {
  test("renders singla account details drawer", async () => {
    renderWithProviders(<DashboardSingalAccount />, {
      preloadedState: {
        accounts: { ...accountSliceDummyData },
      },
    });

    expect(screen.getByText("Account Details")).toBeInTheDocument();

    ///// Personal Details Info
    expect(screen.getByText(/First Name/i)).toBeInTheDocument();
    expect(screen.getByText(/Mr/i)).toBeInTheDocument();
    expect(screen.getByText(/Last Name/i)).toBeInTheDocument();
    expect(screen.getByText(/reheel/i)).toBeInTheDocument();
    expect(screen.getByText(/Language/i)).toBeInTheDocument();
    expect(screen.getByText(/sv/i)).toBeInTheDocument();

    ///// Bank Account Details Info
    expect(screen.getByText(/Bank Account Details/i)).toBeInTheDocument();
    expect(screen.getByText(/Bank Account Name/i)).toBeInTheDocument();
    expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
    expect(screen.getByText(/Bank Account Code/i)).toBeInTheDocument();
    expect(screen.getByText(/ABC123/i)).toBeInTheDocument();
    expect(screen.getByText(/Bank Account Number/i)).toBeInTheDocument();
    expect(screen.getByText(/9876543210/i)).toBeInTheDocument();

    ///// Wallet Details Info
    expect(screen.getByText(/Wallet Details/i)).toBeInTheDocument();
    expect(screen.getByText("Balance")).toBeInTheDocument();
    expect(screen.getByText("5000")).toBeInTheDocument();
    expect(screen.getByText("Currency")).toBeInTheDocument();
    expect(screen.getByText(/USD/i)).toBeInTheDocument();
    expect(screen.getByText(/Currency Unit/i)).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();

    ///// Settings Details Info
    expect(screen.getByText(/Settings Details/i)).toBeInTheDocument();
    expect(screen.getByText(/Account Id/i)).toBeInTheDocument();
    expect(screen.getByText("789012")).toBeInTheDocument();
    expect(screen.getByText(/Maximum Balance/i)).toBeInTheDocument();

    // screen.debug();
  });
});
