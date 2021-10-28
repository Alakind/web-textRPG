import { authTypes } from './types';

const INITIAL_STATE = {
  error: null,
  isAuthenticated: false,
  isInitialized: false,
  user: null,
};

export function authReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case authTypes.LOGIN_REQUEST:
    case authTypes.REGISTER_REQUEST:
    case authTypes.FETCH_USER_REQUEST:
      return {
        ...state,
        error: null,
      };
    case authTypes.REGISTER_SUCCESS:
    case authTypes.LOGIN_SUCCESS:
    case authTypes.FETCH_USER_SUCCESS:
      return {
        ...state,
        user: action.user,
        isAuthenticated: true,
        isInitialized: true,
      };
    case authTypes.REGISTER_ERROR:
    case authTypes.LOGIN_ERROR:
    case authTypes.FETCH_USER_ERROR:
      return {
        ...state,
        error: action.error,
        isInitialized: true,
      };

    case authTypes.LOGOUT_SUCCESS:
      return {
        ...INITIAL_STATE,
        isInitialized: true,
      };

    default:
      return state;
  }
}
