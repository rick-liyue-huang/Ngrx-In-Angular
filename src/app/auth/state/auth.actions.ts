import {createAction, props} from "@ngrx/store";
import {UserModel} from "../../models/user.model";


export const LOGIN_START = '[auth page] login start';
export const LOGIN_SUCCESS = '[auth page] login success';
export const LOGIN_FAIL = '[auth page] login fail';


/**
 * this action will be used in two parts: 1st the effects to connect with service on firebase,
 * 2nd the component by store dispatch
 */
export const loginStart  = createAction(
	LOGIN_START,
	props<{email: string, password: string}>()
);

export const loginSuccess = createAction(
	LOGIN_SUCCESS,
	props<{user: UserModel}>()
);

export const loginFail = createAction(
	LOGIN_FAIL,
)
