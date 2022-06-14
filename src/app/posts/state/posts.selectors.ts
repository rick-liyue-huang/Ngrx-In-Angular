import {createFeatureSelector, createSelector} from "@ngrx/store";
import {PostsStates} from "./posts.states";

const getPostsState = createFeatureSelector<PostsStates>('posts');

export const getPosts = createSelector(getPostsState, state => {
	return state.posts;
});

