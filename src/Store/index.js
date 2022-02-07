import reducers from "./reducers";
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from "./saga";
const sagaMiddleware = createSagaMiddleware()

export const store = createStore(reducers, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)