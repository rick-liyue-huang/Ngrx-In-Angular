import {CounterState} from "../counter/state/counter.state";
import {PostsState} from "../posts/state/posts.state";
import {counterReducer} from "../counter/state/counter.reducers";
import {postsReducers} from "../posts/state/posts.reducers";


// combine the states to root
export interface AppState {
	counter: CounterState,
	posts: PostsState
}


// combine the reducers to root
export const appReducer = {
	counter: counterReducer,
	posts: postsReducers
}
