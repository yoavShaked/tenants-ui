import root from './reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const middelwares = thunk;

export function configureStore() {
    const store = createStore(
        root,
        compose(applyMiddleware(middelwares),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
 );
 return store;
}