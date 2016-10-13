import _ from 'underscore';

const member = (state = {}, action) => {
    switch (action.type) {

        case 'ADD_MEMBER':
            return {
                name: action.name
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
        name: 'suemitsu',
        present: true
    },
    {
        name: 'jindo',
        present: true
    },
    {
        name: 'nitta',
        present: true
    },
    {
        name: 'fukunishi',
        present: true
    },
    {
        name: 'matsuo',
        present: true
    },
    {
        name: 'kuwata',
        present: true
    },
    {
        name: 'takada',
        present: true
    },
    {
        name: 'ozawa',
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
            return mockMembers;

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