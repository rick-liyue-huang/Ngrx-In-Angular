import {createReducer, on} from "@ngrx/store";
import {initialState} from "./posts.states";
import {addPost, deletePost, editPost} from "./posts.actions";
import {Post} from "../../models/posts.model";

const _postsReducer = createReducer(
	initialState,

	on(addPost, (state: any, action: any) => {
		const post = {...action.post};
		post.id = (state.posts.length + 1).toString();
		return {
			...state,
			posts: [...state.posts, post]
		};
	}),

	on(editPost, (state: any, action: any) => {
		const posts = state.posts.map((post: Post) => {
			return action.post.id === post.id ? action.post : post
		})
		return {
			...state,
			posts: posts
		}
	}),

	on(deletePost, (state: any, action: any) => {
		const posts = state.posts.filter((post: Post) => {
			return post.id !== action.id
		})
		return {
			...state,
			posts: posts
		}
	})

)

export function postsReducers(state: any, action: any) {
	return _postsReducer(state, action);
}

