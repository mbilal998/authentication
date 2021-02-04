import * as type from '../types';

export function signUp(data) {
    return {
        type: type.SIGNUP_USER,
        payload: data
    }
}
export function logIn(data) {
    return {
        type: type.LOGIN_USER,
        payload: data
    }
}
