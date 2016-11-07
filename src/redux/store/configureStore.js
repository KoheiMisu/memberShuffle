import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index'

export default function configureStore(initialState) {
    const store = compose((applyMiddleware(thunk))(createStore));
    return store(rootReducer, initialState);
}