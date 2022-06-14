import {createAction, props} from "@ngrx/store";
import {Post} from "../../models/posts.model";


export const ADD_POST_ACTION = '[posts page] add post';
export const UPDATE_POST_ACTION = '[posts page] update post'

// add post
export const addPost = createAction(
	ADD_POST_ACTION,
	props<{post: Post}>()
);

export const editPost = createAction(
	UPDATE_POST_ACTION,
	props<{post: Post}>()
);
