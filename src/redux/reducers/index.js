import { combineReducers } from 'redux';
import members from './members';
import groups from './groups'

const shuffleApp = combineReducers({
    members,
    groups
});

export default shuffleApp