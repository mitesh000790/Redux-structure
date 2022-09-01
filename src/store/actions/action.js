import {
    GET_USERS_LIST
} from "./actionType";

export const getUsersList = payload => ({
    type: GET_USERS_LIST,
    toasterString: `Try to get users list.`,
    isHttpAction: true,
    url: '/users',
    method: 'GET',
});
