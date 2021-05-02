import { Store, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// import createSagaMiddleware from "redux-saga";

import thunk from 'redux-thunk';

import { routerMiddleware } from 'connected-react-router';

import { History } from 'history';

import { ApplicationState, createRootReducer } from './store';

export default function configureStore(history: History, initialState: ApplicationState): Store<ApplicationState> {
    const store = createStore(
        createRootReducer(history),
        initialState,
        composeWithDevTools(applyMiddleware(routerMiddleware(history), thunk)),
    );
    return store;
}
