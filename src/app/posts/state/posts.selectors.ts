import {createFeatureSelector, createSelector} from "@ngrx/store";
import {PostsStates} from "./posts.states";

export const POST_STATE_NAME = 'posts'

// match with 'StoreModule.forFeature(POST_STATE_NAME, postsReducers)' in posts.module.ts
const getPostsState = createFeatureSelector<PostsStates>(POST_STATE_NAME);

export const getPosts = createSelector(getPostsState, state => {
	return state.posts;
});


export const getPostById = createSelector(getPostsState, (state: PostsStates, props: any) => {
	return state.posts.find(post => post.id === props.id);
});
