
import {initialState} from './auth.state';
import {createReducer} from "@ngrx/store";

const _authReducer = createReducer(initialState);

export function authReducer(state: any, action: any) {
	return _authReducer(state, action)
}


