import {loadingInitialState, SharedState} from "./shared.state";
import {createReducer, on} from "@ngrx/store";
import {setLoadingSpinner} from "./shared.action";

const _sharedReducer = createReducer(
	loadingInitialState,
	on(setLoadingSpinner, (state, action) => {
		return {
			...state,
			showLoading: action.status
		}
	})
)

export function sharedReducer(state: SharedState, action: any) {
	return _sharedReducer(state, action);
}
