import {
  all, call, put, takeLatest,
} from 'redux-saga/effects';
import { authActions } from './actions';
import { authTypes } from './types';
import services from './services';

export function* fetchUserSaga() {
  try {
    yield put(authActions.fetchUserRequest());
    const response = yield call(services.fetchUser);
    yield put(authActions.fetchUserSuccess(response.user));

    return { payload: response.user };
  } catch (error) {
    yield put(authActions.fetchUserError(error));
    return { error };
  }
}

export function* authSagas() {
  yield all([
    takeLatest([authTypes.FETCH_USER, authTypes.LOGIN_SUCCESS], fetchUserSaga),
  ]);
}
