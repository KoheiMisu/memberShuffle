import _ from 'underscore';
import cuid from 'cuid';
import qs from 'query-string';

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

const setCollectionId = (cId) => {
    let param = `?cid=${cId}`;
    window.history.replaceState('', '', param);
};

const getCId = () => {
    const queryString = qs.parse(location.search);

    if ('cid' in queryString) {
        return queryString['cid'];
    }

    const cId = cuid();

    setCollectionId(cId);
    return cId;
}

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

            const cId = getCId();




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