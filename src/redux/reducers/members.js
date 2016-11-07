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

const mockMembers = [
    {
        name: 'misu',
        present: false
    },
    {
        name: 'sam',
        present: true
    },
    {
        name: 'joe',
        present: true
    },
    {
        name: 'michael',
        present: true
    },
    {
        name: 'keel',
        present: true
    },
    {
        name: 'spark',
        present: true
    },
    {
        name: 'right',
        present: true
    },
    {
        name: 'moon',
        present: true
    },
    {
        name: 'sun',
        present: true
    },
    {
        name: 'planet',
        present: true
    }
];

const members = (state = [], action) => {
    switch (action.type) {

        case 'ADD_MEMBER':
            return [
                    member(undefined, action),
                    ...state
                ];

        case 'FETCH_MEMBER':

            return [action.members];

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