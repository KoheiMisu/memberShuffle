import _ from 'underscore';

const shuffle = (array) => {

    let members = _.filter(array, (member) => {
        return member.present;
    });

    let n = members.length, t, i;

    while (n) {
        i = Math.floor(Math.random() * n--);
        t = members[n];
        members[n] = members[i];
        members[i] = t;
    }

    return members;
};

const groups = (state = [], action) => {
    switch (action.type) {

        case 'DIVIDE_MEMBER':

            let members = shuffle(action.members);

            let divideMember = [];
            for (let i=0; i < members.length; i+=action.groupCount) {
                divideMember.push(members.slice(i, i+action.groupCount))
            }

            return divideMember;

        default:
            return state;
    }
};

export default groups