
import {AuthState, initialState} from './auth.state';
import {createReducer, on} from "@ngrx/store";
import {loginSuccess} from "./auth.actions";

const _authReducer = createReducer(
	initialState,

	on(loginSuccess, (state: AuthState, action: any) => {
		console.log(action.user);
		return {
			...state,
			user: action.user
		}
	})
);

export function authReducer(state: AuthState, action: any) {
	return _authReducer(state, action)
}


