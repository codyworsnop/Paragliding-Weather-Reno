import { createAction } from "redux-actions"
import { message } from "antd";
import { getIdTokenResult } from "@firebase/auth";

export const SET_USER_CLAIMS = 'SET_USER_CLAIMS'
export const SET_USER = 'SET_USER'

export const setUser = createAction(SET_USER, user => user)

export const setUserClaims = createAction(SET_USER_CLAIMS, async user =>
    await getIdTokenResult(user, true).then(resp => resp).catch(err => {
        message.error(err.toString())
        return Promise.reject(err);
    })
);
