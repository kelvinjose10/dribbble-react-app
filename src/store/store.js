import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { authReducer } from '../reducers/authReducer';
import thunk from 'redux-thunk';

// Redux devtoopls
const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

//Lista de reducers
const reducers = combineReducers({
  auth: authReducer,
});

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk)) // Aplicar middleware con redux devtools
);
