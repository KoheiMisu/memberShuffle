import * as ActionTypes from '../constants/constants';
import cuid from 'cuid';
import qs from 'query-string';
import 'whatwg-fetch';
import * as asyncModule from '../../util/asyncModule';

const addMember = (member) => {
    return {
        type: ActionTypes.ADD_MEMBER,
        member
    };
};

const fetchMember = (members) => {
    return {
        type: ActionTypes.FETCH_MEMBER,
        members
    };
};

export const divideMember = (groupCount, members) => {
    return {
        type: ActionTypes.DIVIDE_MEMBER,
        groupCount,
        members
    };
};

const changePresent = (member) => {
    return {
        type: ActionTypes.CHANGE_PRESENT,
        member
    };
};

const addError = (message) => {
    return {
        type: ActionTypes.ADD_ERROR,
        message
    };
};

export const fetchMembers = () => {
    const cId = getCId();

    return (dispatch) => {
        return fetch(`http://localhost:5000/api/v1/members?cId=${cId}`, {
            mode: 'cors',
        })
        .then(asyncModule.checkStatus)
        .then(asyncModule.parseJSON)
        .catch((error) => {
            console.log('request failed', error)
        })
        .then((data) => {
            if (data === null) {
                data = [];
            }
            dispatch(fetchMember(data));
        })
    }
};

export const addMembers = (name) => {
    if (!name) {
        return (dispatch) => {
            dispatch(addError('cannot insert empty value'));
        }
    }

    const queryString = qs.parse(location.search);

    const data = new FormData();
    data.append("cId", queryString['cId']);
    data.append("name", name);

    return (dispatch) => {
        return fetch('http://localhost:5000/api/v1/members', {
                mode: 'cors',
                method: 'Post',
                body: data
            })
            .then(asyncModule.checkStatus)
            .then(asyncModule.parseJSON)
            .catch((error) => {
                console.log('request failed', error)
            })
            .then((data) => {
                if (data.result) {
                    dispatch(addMember(data.member));
                } else {
                    dispatch(addError(data.message));
                }
            });
    }
};

export const changePresents = (member) => {
    const queryString = qs.parse(location.search);

    const data = new FormData();
    data.append("cId", queryString['cId']);
    data.append("name", member.name);
    data.append("present", !member.present);

    return (dispatch) => {
        return fetch('http://localhost:5000/api/v1/members', {
                mode: 'cors',
                method: 'Put',
                body: data
            })
            .then(asyncModule.checkStatus)
            .then(asyncModule.parseJSON)
            .then((data) => {
                dispatch(changePresent(data));
            }).catch((error) => {
                console.log('request failed', error)
            });
    }
};


const setCollectionId = (cId) => {
    let param = `?cId=${cId}`;
    window.history.replaceState('', '', param);
};

const getCId = () => {
    const queryString = qs.parse(location.search);

    if ('cId' in queryString) {
        return queryString['cId'];
    }

    const cId = cuid();

    setCollectionId(cId);
    return cId;
};