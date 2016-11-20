import _ from 'underscore';

const members = (state = [], action) => {
    switch (action.type) {

        case 'ADD_MEMBER':
            return [
                    action.member,
                    ...state,
                ];

        case 'FETCH_MEMBER':

            return action.members;

        case 'CHANGE_PRESENT':

            return _.map(state, (member) => {

                if (member.name === action.member.name) {
                    member.present = action.member.present;
                    return member;
                }

                return member;
            });

        case 'DELETE_MEMBER':

            return _.filter(state, (member) => {
                return member.name !== action.member.name;
            });

        default:
            return state
    }
};

export default members