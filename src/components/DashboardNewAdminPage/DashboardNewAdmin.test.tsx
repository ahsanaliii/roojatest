/* eslint-disable testing-library/no-debugging-utils */
/* eslint-disable @typescript-eslint/no-explicit-any */
import DashboardNewAdmin from './DashboardNewAdmin';
// import
import { renderWithProviders } from '../../../utils/test-utils';
import { screen, fireEvent, waitFor } from '@testing-library/react';
describe('-----Unit Test for testing New Admin Component-----', () => {
  // test('sidebar uni test', () => {
  //   expect(true).toBe(true);
  // });
  test('renders New Admin  component with all input fields', async () => {
    renderWithProviders(<DashboardNewAdmin />);
    const titleInputElement = screen.getByLabelText(/Title/i);
    const phoneNumberInputElement =
      screen.getByLabelText(/Phone Number/i);
    const firstNameInputElement =
      screen.getByLabelText(/First Name/i);
    const lastNameInputElement = screen.getByLabelText(/Last Name/i);
    const emailInputElement = screen.getByLabelText(/Email/i);
    const passwordInputElement = screen.getByLabelText(/Password/i);
    const languageInputElement = screen.getByLabelText(/Language/i);
    const roleInputElement = screen.getByLabelText(/Role/i);
    expect(titleInputElement).toBeInTheDocument();
    expect(phoneNumberInputElement).toBeInTheDocument();
    expect(firstNameInputElement).toBeInTheDocument();
    expect(passwordInputElement).toBeInTheDocument();
    expect(lastNameInputElement).toBeInTheDocument();
    expect(languageInputElement).toBeDisabled();
    expect(roleInputElement).toBeInTheDocument();
    expect(emailInputElement).toBeInTheDocument();
  });
  test('renders New Admin  component and show error when submit with empty fields', async () => {
    renderWithProviders(<DashboardNewAdmin />);
    const createButton = screen.getByText(/create/i);
    fireEvent.click(createButton);
    await waitFor(() => {
      const errorsMessageElements = screen.getAllByText(
        /This field is required/i
      );
      expect(errorsMessageElements.length).toEqual(7);
    });
    // screen.logTestingPlaygroundURL();
  });
});
