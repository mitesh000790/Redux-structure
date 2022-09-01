import axios from "axios";
import {API_RESPONSES} from "../actions/actionType";

const httpActions = (e) => next => async action => {

    const {
        method = "GET",
        // toasterString,
        url,
        isHttpAction,
        headers,
        type,
        body,
    } = action;
    const authKey = localStorage.getItem("token");

    if (isHttpAction) {

        await next({
            type: `${type}_FETCHING`,
            payload: {},
        });
        const baseURL = 'https://jsonplaceholder.typicode.com/';
        const accessAndContentHeader = {
            'Access-Control-Allow-Origin': '*',
            'Content-type': 'application/json',
            'Access-Control-Allow-Methods': 'POST, GET',
        };
        try {
            const response = await axios({
                url,
                headers: {
                    Authorization: authKey || '',
                    ...accessAndContentHeader,
                    ...headers,
                },
                baseURL,
                data: body,
                method,
            });
            const {data} = response;
            await next({
                type: API_RESPONSES,
                payload: data,
                actionType: `${type}_SUCCESS`,
            });
            await next({
                type: `${type}_SUCCESS`,
                payload: data,
            });
        } catch (e) {
            const {response} = e;
            console.error('Error : got in httpsAction');
            await next({
                type: API_RESPONSES,
                payload: {message: response?.data, e},
                actionType: `${type}_FAILED`,
            })
            await next({
                type: `${type}_FAILED`,
                payload: {message: response?.data?.message, e},
            });
        }

    } else {
        await next(action);
    }

    return e.getState();
};

export default httpActions;
