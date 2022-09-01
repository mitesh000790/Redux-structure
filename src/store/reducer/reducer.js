import rootState from "./rootState";
import {
    GET_USERS_LIST
} from "../actions/actionType";
import {getFormattedResponse} from "../../HelperFunction";


const reducer = (state = JSON.parse(JSON.stringify(rootState)), {type, payload, actionType}) => {
    switch (type) {
        case `_FETCHING`: {
            return {
                ...state,
            };
        }

        case `_SUCCESS`: {
            return {
                ...payload, ...state,
            }
        }

        case `_FAILED` : {
            return {

                ...state,
            }
        }

        case `API_RESPONSES` : {
            return {
                ...state,
                apiResponses: [state.apiResponses, getFormattedResponse(actionType, payload)]
            }
        }

        case `${GET_USERS_LIST}_SUCCESS`: {
            return {
                user: {
                    userData: {...state.apiResponses[1]}
                }
            };
        }

        default : {
            return state;
        }
    }
};

export default reducer;
