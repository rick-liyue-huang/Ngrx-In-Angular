import {createReducer, on} from "@ngrx/store";
import {initialState} from "./posts.states";
import {addPost} from "./posts.actions";

const _postsReducer = createReducer(
	initialState,

	on(addPost, (state: any, action: any) => {
		const post = {...action.post};
		post.id = (state.posts.length + 1).toString();
		return {
			...state,
			posts: [...state.posts, post]
		};
	})

)

export function postsReducers(state: any, action: any) {
	return _postsReducer(state, action);
}

