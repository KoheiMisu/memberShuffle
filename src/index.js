import React from 'react';
import ReactDOM from 'react-dom';
import Root from './containers/Root';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';
import configureStore from './redux/store/configureStore';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const initialState = {members: [], groups: [], inputError: ""};

let store = configureStore(initialState);

const App = () => (
    <Provider store={store}>
        <Root />
    </Provider>
);

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
