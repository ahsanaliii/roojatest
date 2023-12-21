/* eslint-disable testing-library/no-debugging-utils */
/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable @typescript-eslint/no-explicit-any */
import LoginForm from './LoginForm';
import { renderWithProviders } from '../../../utils/test-utils';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';

describe('-----Unit Test for testing Loin Form-----', () => {
  test('renders LoginForm component', async () => {
    renderWithProviders(<LoginForm />);
    const headingElement = screen.getByText(/welcome/i);
    const emailLabelElement = screen.getByLabelText(/email/i);
    const passwordLabelElement = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole('button', {
      name: /submit/i,
    });
    expect(headingElement).toBeInTheDocument();
    expect(emailLabelElement).toBeInTheDocument();
    expect(passwordLabelElement).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });
  test('shows validation errors when submitting with empty fields', async () => {
    renderWithProviders(<LoginForm />);
    const submitButton = screen.getByRole('button', {
      name: /submit/i,
    });
    act(() => {
      userEvent.click(submitButton);
    });
    await waitFor(() => {
      const emailError = screen.getByText(/please input your email/i);
      expect(emailError).toBeInTheDocument();
    });
    await waitFor(() => {
      const passwordError = screen.getByText(
        /Please input your password!/i
      );
      expect(passwordError).toBeInTheDocument();
    });
  });
  test('shows validation errors when submitting with invalid email and valid password field', async () => {
    renderWithProviders(<LoginForm />);
    const submitButton = screen.getByRole('button', {
      name: /submit/i,
    });
    const passwordLabelElement = screen.getByLabelText(/password/i);
    const emailLabelElement = screen.getByLabelText(/email/i);
    act(() => {
      userEvent.type(emailLabelElement, 'testadmi');
      userEvent.type(passwordLabelElement, 'P@@klasjgkl');
      userEvent.click(submitButton);
    });
    await waitFor(() => {
      const passwordErrorElement = screen.queryByText(
        /Please input your password!/i
      );
      expect(passwordErrorElement).toBe(null);
    });
    await waitFor(() => {
      const emailErrorElement = screen.queryByText(
        /The input is not valid E-mail!/i
      );
      expect(emailErrorElement).toBeInTheDocument();
    });
    // screen.logTestingPlaygroundURL();
  });
  // test('shows no  validation errors if credentails values are correct', async () => {
  //   // try {
  //   //   const res = await fetch('https://follomy.com/authenticate');
  //   //   const data = await res.json();
  //   //   console.log(data);
  //   // } catch (err) {
  //   //   console.log(err);
  //   //   console.log('erros');
  //   // }
  //   renderWithProviders(<LoginForm />);
  //   const submitButton = screen.getByText(/submit/i);
  //   const passwordLabelElement = screen.getByLabelText(/password/i);
  //   const emailLabelElement = screen.getByLabelText(/email/i);
  //   act(() => {
  //     userEvent.type(emailLabelElement, 'testadmi@gmai.com');
  //     userEvent.type(passwordLabelElement, 'P@@klasjgkl');
  //     userEvent.click(submitButton);
  //   });
  //   await waitFor(() => {
  //     const emailErrorElement = screen.queryByText(
  //       /The input is not valid E-mail!/i
  //     );
  //     expect(emailErrorElement).toBe(null);
  //   });
  //   await waitFor(() => {
  //     const passwordErrorElement = screen.queryByText(
  //       /Please input your password!/i
  //     );
  //     expect(passwordErrorElement).toBe(null);
  //   });
  // });
});
