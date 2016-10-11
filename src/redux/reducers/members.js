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
    },
    {
        name: 'sam'
    },
    {
        name: 'suemitsu'
    },
    {
        name: 'jindo'
    },
    {
        name: 'nitta'
    },
    {
        name: 'fukunishi'
    },
    {
        name: 'matsuo'
    },
    {
        name: 'kuwata'
    },
    {
        name: 'takada'
    },
    {
        name: 'ozawa'
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

        // case 'DIVIDE_MEMBER':
        //     console.log(state);
        //     return mockMembers;

        default:
            return state
    }
};

export default members