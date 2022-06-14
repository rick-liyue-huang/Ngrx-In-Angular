import {CounterState} from "../counter/state/counter.state";
import {PostsStates} from "../posts/state/posts.states";
import {counterReducer} from "../counter/state/counter.reducers";
import {postsReducers} from "../posts/state/posts.reducers";


// combine the states to root
export interface Index {
	counter: CounterState,
	posts: PostsStates
}


// combine the reducers to root
export const appReducer = {
	counter: counterReducer,
	posts: postsReducers
}
