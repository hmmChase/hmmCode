import { render, fireEvent } from '@testing-library/react';
import Login from '../../components/Login';

// Here we have a bunch of setup functions that compose together for our test cases
// I only recommend doing this when you have a lot of tests that do the same thing.
// I'm including it here only as an example.
// These tests don't necessitate this
// much abstraction.
// Read more: https://kcd.im/aha-testing

const setup = () => {
  const alert = (window.alert = jest.fn());

  const utils = render(<Login />);

  const user = { username: 'michelle', password: 'smith' };

  const event = value => {
    return { target: { value } };
  };

  const userNameInput = utils.getByLabelText(/username/i);

  const changeUsernameInput = value =>
    fireEvent.change(userNameInput, event(value));

  const passwordInput = utils.getByLabelText(/password/i);

  const changePasswordInput = value =>
    fireEvent.change(passwordInput, event(value));

  const submitBtn = utils.getByText(/submit/i);

  const clickSubmit = () => fireEvent.click(submitBtn);

  return {
    ...utils,
    alert,
    user,
    changeUsernameInput,
    changePasswordInput,
    clickSubmit
  };
};

const setupSuccessCase = () => {
  const utils = setup();

  utils.changeUsernameInput(utils.user.username);
  utils.changePasswordInput(utils.user.password);
  utils.clickSubmit();

  return utils;
};

const setupWithNoPassword = () => {
  const utils = setup();

  utils.changeUsernameInput(utils.user.username);
  utils.clickSubmit();

  const errorMessage = utils.getByRole('alert');

  return { ...utils, errorMessage };
};

const setupWithNoUsername = () => {
  const utils = setup();

  utils.changePasswordInput(utils.user.password);
  utils.clickSubmit();

  const errorMessage = utils.getByRole('alert');

  return { ...utils, errorMessage };
};

describe('Login', () => {
  it('calls onSubmit with the username and password', () => {
    const { alert, user } = setupSuccessCase();

    expect(alert).toHaveBeenCalledTimes(1);
    expect(alert).toHaveBeenCalledWith(user);
  });

  it('shows an error message when submit is clicked and no username is provided', () => {
    const { alert, errorMessage } = setupWithNoUsername();

    expect(errorMessage).toHaveTextContent(/username is required/i);
    expect(alert).not.toHaveBeenCalled();
  });

  it('shows an error message when password is not provided', () => {
    const { alert, errorMessage } = setupWithNoPassword();

    expect(errorMessage).toHaveTextContent(/password is required/i);
    expect(alert).not.toHaveBeenCalled();
  });
});
