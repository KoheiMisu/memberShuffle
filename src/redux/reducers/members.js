import _ from 'underscore';
import cuid from 'cuid';
import qs from 'query-string';
import 'whatwg-fetch';

const member = (state = {}, action) => {
    switch (action.type) {

        case 'ADD_MEMBER':
            return {
                name: action.name,
                present: true
            };

        default:
            return state
    }
};

const members = (state = [], action) => {
    switch (action.type) {

        case 'ADD_MEMBER':
            return [
                    action.member,
                    ...state
                ];

        case 'FETCH_MEMBER':

            return action.members;

        case 'CHANGE_PRESENT':

            return _.map(state, (member) => {

                if (member.name === action.member.name) {
                    member.present = !action.member.present;
                    return member;
                }

                return member;
            });

        default:
            return state
    }
};

export default members