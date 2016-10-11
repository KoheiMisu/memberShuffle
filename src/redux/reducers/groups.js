const shuffle = (array) => {
    let n = array.length, t, i;

    while (n) {
        i = Math.floor(Math.random() * n--);
        t = array[n];
        array[n] = array[i];
        array[i] = t;
    }

    return array;
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