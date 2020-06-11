import { render, fireEvent } from '@testing-library/react';
import Login from '../../components/Login';

describe('Login', () => {
  it('calls alert with the username and password when submit is clicked', () => {
    const alert = (window.alert = jest.fn());

    const utils = render(<Login />);

    const user = { username: 'michelle', password: 'smith' };

    const userNameInput = utils.getByLabelText(/username/i);
    const userNameEvent = { target: { value: user.username } };

    const passwordInput = utils.getByLabelText(/password/i);
    const passwordEvent = { target: { value: user.password } };

    fireEvent.change(userNameInput, userNameEvent);
    fireEvent.change(passwordInput, passwordEvent);

    const submitBtn = utils.getByText(/submit/i);

    fireEvent.click(submitBtn);

    expect(alert).toHaveBeenCalledTimes(1);
    expect(alert).toHaveBeenCalledWith(user);
  });

  it('shows an error message when submit is clicked and no username is provided', () => {
    const alert = (window.alert = jest.fn());

    const utils = render(<Login />);

    const passwordInput = utils.getByLabelText(/password/i);
    const passwordEvent = { target: { value: 'anything' } };

    fireEvent.change(passwordInput, passwordEvent);

    const submitBtn = utils.getByText(/submit/i);

    fireEvent.click(submitBtn);

    const errorMessage = utils.getByRole('alert');

    expect(errorMessage).toHaveTextContent(/username is required/i);
    expect(alert).not.toHaveBeenCalled();
  });

  it('shows an error message when submit is clicked and no password is provided', () => {
    const alert = (window.alert = jest.fn());

    const utils = render(<Login />);

    const usernameInput = utils.getByLabelText(/username/i);
    const usernameEvent = { target: { value: 'anything' } };

    fireEvent.change(usernameInput, usernameEvent);

    const submitBtn = utils.getByText(/submit/i);

    fireEvent.click(submitBtn);

    const errorMessage = utils.getByRole('alert');

    expect(errorMessage).toHaveTextContent(/password is required/i);
    expect(alert).not.toHaveBeenCalled();
  });
});
