import {CounterState} from "../counter/state/counter.state";
import {PostsState} from "../posts/state/posts.state";
import {counterReducer} from "../counter/state/counter.reducers";
import {postsReducer} from "../posts/state/posts.reducers";
import {AuthState} from "../auth/state/auth.state";
import {authReducer} from "../auth/state/auth.reducers";
import {SharedState} from './shared/shared.state';
import {sharedReducer} from "./shared/shared.reducer";
import {SHARED_STATE_NAME} from "./shared/shared.selector";
import {AUTH_STATE_NAME} from "../auth/state/auth.selectors";


// combine the states to root
export interface AppState {
	// because using feature Reducer so do not need to define the root one
	// counter: CounterState,
	// posts: PostsState,
	// auth: AuthState,
	// shared: SharedState
	[SHARED_STATE_NAME]: SharedState,
	[AUTH_STATE_NAME]: AuthState
}


// combine the reducers to root
export const appReducer = {
	// counter: counterReducer,
	// posts: postsReducer,
	// auth: authReducer,
	// shared: sharedReducer
	[SHARED_STATE_NAME]: sharedReducer,
	[AUTH_STATE_NAME]: authReducer
}
