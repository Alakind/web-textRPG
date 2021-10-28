import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from './rootSaga';
import createRootReducer from './rootReducer';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  createRootReducer(),
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);
