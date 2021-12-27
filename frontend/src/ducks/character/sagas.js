import {
  all, call, put, takeLatest,
} from 'redux-saga/effects';
import { characterTypes } from './types';
import { characterActions } from './actions';
import { loadCharacter } from '../../util/mockLoaders';

export function* loadCharacterSaga() {
  try {
    yield put(characterActions.loadCharacterRequest());
    const character = yield call(loadCharacter);
    yield put(characterActions.loadCharacterSuccess(character));

    return { character };
  } catch (error) {
    yield put(characterActions.loadCharacterError(error));
    return { error };
  }
}

export function* characterSagas() {
  yield all([
    takeLatest([characterTypes.LOAD_CHARACTER], loadCharacterSaga),
  ]);
}
