import * as ActionTypes from '../constants/constants';
import cuid from 'cuid';
import qs from 'query-string';
import 'whatwg-fetch';

export const addMember = (name) => {
    return {
        type: ActionTypes.ADD_MEMBER,
        name
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

export const changePresent = (member) => {
    return {
        type: ActionTypes.CHANGE_PRESENT,
        member
    };
};

export const fetchMembers = () => {
    const cId = getCId();

    return (dispatch) => {
        return fetch(`http://localhost:5000/api/v1/members?cId=${cId}`, {
            mode: 'cors',
        })
            .then(checkStatus)
            .then(parseJSON)
            .then((data) => {
                console.log(data);
                dispatch(fetchMember(data));
            }).catch((error) => {
            console.log('request failed', error)
        });
    }
}

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
};

const checkStatus = (response) => {
    if (response.status >= 200 && response.status < 300) {
        return response;
    } else {
        let error = new Error(response.statusText);
        error.response = response;
        throw error;
    }
};

const parseJSON = (response) => {
    return response.json();
};
