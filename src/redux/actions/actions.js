import * as ActionTypes from '../constants/constants';

export const addMember = (name) => {
    return {
        type: ActionTypes.ADD_MEMBER,
        name
    };
};

export const fetchMember = () => {
    return {
        type: ActionTypes.FETCH_MEMBER
    };

    // return (dispatch) => {
    //     return fetch(`${baseURL}/api/getPosts`).
    //     then((response) => response.json()).
    //     then((response) => dispatch(addPosts(response.posts)));
    // };
};

export const divideMember = (groupCount, members) => {
    return {
        type: ActionTypes.DIVIDE_MEMBER,
        groupCount,
        members
    };
};
