import { combineReducers } from 'redux';
import members from './members';
import groups from './groups';
import inputError from './inputError';

const shuffleApp = combineReducers({
    members,
    groups,
    inputError
});

export default shuffleApp