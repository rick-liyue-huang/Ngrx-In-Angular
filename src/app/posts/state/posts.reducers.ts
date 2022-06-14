import {createReducer} from "@ngrx/store";
import {initialState} from "./posts.states";

const _postsReducer = createReducer(
	initialState,

)

export function postsReducers(state: any, action: any) {
	return _postsReducer(state, action);
}
