import { authTypes } from './types';

export const authActions = {
  login(credentials) {
    return {
      type: authTypes.LOGIN,
      credentials,
    };
  },
  loginRequest(credentials) {
    return {
      type: authTypes.LOGIN_REQUEST,
      credentials,
    };
  },
  loginSuccess(user) {
    return {
      type: authTypes.LOGIN_SUCCESS,
      user,
    };
  },
  loginError(error) {
    return {
      type: authTypes.LOGIN_ERROR,
      error,
    };
  },

  register(credentials) {
    return {
      type: authTypes.REGISTER,
      credentials,
    };
  },
  registerRequest(credentials) {
    return {
      type: authTypes.REGISTER_REQUEST,
      credentials,
    };
  },
  registerSuccess(user) {
    return {
      type: authTypes.REGISTER_SUCCESS,
      user,
    };
  },
  registerError(error) {
    return {
      type: authTypes.REGISTER_ERROR,
      error,
    };
  },

  logout() {
    return {
      type: authTypes.LOGOUT,
    };
  },
  logoutSuccess() {
    return {
      type: authTypes.LOGOUT_SUCCESS,
    };
  },

  fetchUser() {
    return {
      type: authTypes.FETCH_USER,
    };
  },
  fetchUserRequest() {
    return {
      type: authTypes.FETCH_USER_REQUEST,
    };
  },
  fetchUserSuccess(user) {
    return {
      type: authTypes.FETCH_USER_SUCCESS,
      user,
    };
  },
  fetchUserError(error) {
    return {
      type: authTypes.FETCH_USER_ERROR,
      error,
    };
  },
};
